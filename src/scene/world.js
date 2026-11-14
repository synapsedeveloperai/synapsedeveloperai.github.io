import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createAtlas, createGlyphField, makeRain, makeSymbol } from './glyphs.js';
import { damp, spring } from '../motion.js';

export function createWorld(settings, signal) {
  const canvas = document.querySelector('#world'), art = document.querySelector('.hero-art');
  const symbolData = makeSymbol();
  let renderer;
  const fallback = () => { document.documentElement.classList.add('no-webgl'); canvas.style.visibility = 'hidden'; };
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' }); }
  catch { fallback(); return { update() {}, dispose() {}, inspect: () => ({ fallback: true }) }; }
  renderer.setClearColor(0x050505); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
  renderer.info.autoReset = false;
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(43, 1, .1, 120);
  const basePosition = new THREE.Vector3(0, 3, 15), baseLook = new THREE.Vector3(0, 1.6, 0);
  camera.position.copy(basePosition); camera.lookAt(baseLook);
  const baseQuaternion = camera.quaternion.clone();
  const world = new THREE.Group(); scene.add(world);
  const atlas = createAtlas(), rainPoints = makeRain(), rain = createGlyphField(rainPoints, atlas, true);
  world.add(rain);
  const symbol = createGlyphField(symbolData.points, atlas); scene.add(symbol);
  const grid = new THREE.Mesh(new THREE.PlaneGeometry(110, 100, 1, 1), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { time: { value: 0 } },
    vertexShader: `varying vec3 vWorld; varying vec2 vGrid; void main(){vGrid=position.xy;vec4 p=modelMatrix*vec4(position,1.);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
    fragmentShader: `
      varying vec3 vWorld; varying vec2 vGrid; uniform float time;
      void main(){
        vec2 c = vGrid / 1.5;
        vec2 g = abs(fract(c - .5) - .5) / max(fwidth(c), vec2(.0001));
        float line = 1. - min(min(g.x,g.y),1.);
        float fade = exp(-length(vWorld.xz * vec2(.65,1.)) * .055);
        float horizon = 1. - smoothstep(20.,45.,-vWorld.z);
        float pool = .68 + .32 * sin(time * .32 + vWorld.z * .18);
        gl_FragColor=vec4(vec3(.55),line * fade * horizon * pool * .15);
      }`,
  }));
  grid.rotation.x = -Math.PI / 2; grid.position.set(0, -2.3, -20); world.add(grid);
  const poolMaterial = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'varying vec2 vUv;void main(){float d=length((vUv-.5)*2.);float a=exp(-d*d*7.)*.045;gl_FragColor=vec4(vec3(.7),a);}',
  });
  for (const [x, z, scale] of [[6, 0, 14], [-9, -15, 18], [0, -28, 20]]) {
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(scale, scale), poolMaterial); pool.rotation.x = -Math.PI / 2; pool.position.set(x, -2.25, z); world.add(pool);
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.Float32BufferAttribute(rainPoints.filter((_, i) => i % 9 === 0).flatMap(p => p.position), 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0x999999, size: .025, transparent: true, opacity: .3, depthWrite: false })); world.add(dust);
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera), bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), .36, .38, .85), output = new OutputPass();
  composer.addPass(renderPass); composer.addPass(bloom); composer.addPass(output);
  const pointer = { x: 0, y: 0 }, current = { x: { value: 0, velocity: 0 }, y: { value: 0, velocity: 0 } };
  let width = 0, height = 0, mobile = false, time = 0, scroll = 0, lastLow = null, lost = false, symbolTop = 0, symbolX = 0, symbolHeight = 0;
  const anchor = new THREE.Vector3(), look = new THREE.Vector3(), right = new THREE.Vector3(), up = new THREE.Vector3(), forward = new THREE.Vector3();
  const on = (el, event, fn, options = {}) => el.addEventListener(event, fn, { ...options, signal });
  function resize() {
    width = innerWidth; height = innerHeight; mobile = width < 900;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile || settings.low ? 1 : 1.5)); renderer.setSize(width, height, false);
    composer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile || settings.low ? 1 : 1.5)); composer.setSize(width, height);
    camera.aspect = width / height; camera.updateProjectionMatrix();
    const rect = art.getBoundingClientRect();
    symbolTop = rect.top + scrollY + rect.height * .46; symbolX = rect.left + rect.width * .56;
    symbolHeight = Math.min(rect.height * .85, rect.width * .98, mobile ? 305 : 470);
    if (width < 650) symbolX = rect.left + rect.width * .5;
  }
  on(window, 'resize', resize, { passive: true }); on(window, 'orientationchange', resize);
  on(window, 'pointermove', e => { if (e.pointerType === 'touch') return; pointer.x = Math.max(-1, Math.min(1, e.clientX / width * 2 - 1)); pointer.y = Math.max(-1, Math.min(1, e.clientY / height * 2 - 1)); }, { passive: true });
  const reset = () => { pointer.x = pointer.y = 0; };
  on(window, 'blur', reset); on(document.documentElement, 'pointerleave', reset);
  on(canvas, 'webglcontextlost', e => { e.preventDefault(); lost = true; fallback(); });
  on(canvas, 'webglcontextrestored', () => { lost = false; document.documentElement.classList.remove('no-webgl'); canvas.style.visibility = ''; resize(); });
  resize();
  let renderBudget = 0, frames = 0;
  return {
    update(dt) {
      if (lost) return;
      const reduced = settings.reduced;
      if (lastLow !== settings.low) { lastLow = settings.low; resize(); }
      if (!reduced) time += dt;
      scroll = damp(scroll, scrollY, 5, dt);
      const px = spring(current.x, reduced || mobile ? 0 : pointer.x, dt, 5.5);
      const py = spring(current.y, reduced || mobile ? 0 : pointer.y, dt, 5.5);
      const depth = Math.min(scroll / height, 4);
      camera.position.set(px * .52, 3 - py * .22 + depth * .10, 15 - depth * .18);
      look.set(px * .10, 1.6 - py * .05 - depth * .10, -depth * .20); camera.lookAt(look);
      world.rotation.y = px * .012; world.rotation.z = -py * .004;
      grid.position.z = -20 + (time * .16) % 1.5; grid.material.uniforms.time.value = time;
      rain.material.uniforms.time.value = time; rain.geometry.instanceCount = settings.low || mobile ? Math.floor(rainPoints.length * .38) : rainPoints.length;
      rain.rotation.y = px * .015; dust.visible = !settings.low && !mobile; dust.rotation.y = time * .008;
      symbol.material.uniforms.time.value = time;
      const distance = 10.5, viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * distance;
      right.set(1, 0, 0).applyQuaternion(baseQuaternion); up.set(0, 1, 0).applyQuaternion(baseQuaternion); forward.set(0, 0, -1).applyQuaternion(baseQuaternion);
      anchor.copy(basePosition).addScaledVector(forward, distance).addScaledVector(right, (symbolX / width - .5) * viewHeight * camera.aspect).addScaledVector(up, (.5 - (symbolTop - scroll) / height) * viewHeight);
      symbol.position.copy(anchor); symbol.quaternion.copy(baseQuaternion); symbol.rotateY(px * .10); symbol.rotateX(py * .065);
      symbol.scale.setScalar((symbolHeight / height) * viewHeight / symbolData.height);
      symbol.material.uniforms.opacity.value = Math.min(1, time / 1.25 + (reduced ? 1 : 0));
      symbol.visible = symbolTop - scroll > -symbolHeight;
      renderBudget += dt;
      if ((mobile || settings.low) && renderBudget < 1 / 30 && dt > 0) return;
      renderBudget = 0;
      frames++; renderer.info.reset();
      if (settings.low || mobile) renderer.render(scene, camera); else composer.render(dt);
    },
    inspect: () => ({ fallback: lost, camera: camera.position.toArray(), pointer: [current.x.value, current.y.value], rainCount: rain.geometry.instanceCount, depths: [Math.min(...rainPoints.map(p => p.position[2])), Math.max(...rainPoints.map(p => p.position[2]))], glyphCount: symbolData.points.length, drawCalls: renderer.info.render.calls, frames, dpr: renderer.getPixelRatio(), bloom: !settings.low && !mobile, time }),
    dispose() {
      scene.traverse(object => { object.geometry?.dispose(); if (object.material) object.material.dispose(); });
      atlas.dispose(); bloom.dispose(); renderPass.dispose(); output.dispose(); composer.dispose(); renderer.dispose();
    },
  };
}
