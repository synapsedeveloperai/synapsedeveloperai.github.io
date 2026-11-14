import * as THREE from 'three';
import { seededRandom } from '../motion.js';

export const characters = '01{}()[];:=+<>/\\#*-.!|&?abcdef';

export function createAtlas() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.font = 'bold 43px Consolas, monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff';
  [...characters].forEach((glyph, i) => ctx.fillText(glyph, (i % 8) * 64 + 32, Math.floor(i / 8) * 64 + 33));
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearMipmapLinearFilter; texture.magFilter = THREE.LinearFilter;
  return texture;
}

export function createGlyphField(points, atlas, rain = false) {
  const plane = new THREE.PlaneGeometry(1, 1);
  const geometry = new THREE.InstancedBufferGeometry();
  geometry.index = plane.index; geometry.attributes.position = plane.attributes.position; geometry.attributes.uv = plane.attributes.uv;
  for (const [name, size, values] of [
    ['offset', 3, points.flatMap(p => p.position)], ['glyph', 1, points.map(p => p.glyph)],
    ['scale', 1, points.map(p => p.size)], ['brightness', 1, points.map(p => p.brightness)],
    ['speed', 1, points.map(p => p.speed || 0)], ['phase', 1, points.map(p => p.phase || 0)],
  ]) geometry.setAttribute(name, new THREE.InstancedBufferAttribute(new Float32Array(values), size));
  geometry.instanceCount = points.length;
  const material = new THREE.ShaderMaterial({
    uniforms: { atlas: { value: atlas }, time: { value: 0 }, opacity: { value: 1 }, rain: { value: rain ? 1 : 0 } },
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: `
      attribute vec3 offset;
      attribute float glyph, scale, brightness, speed, phase;
      uniform float time, rain;
      varying vec2 vUv;
      varying float vLight, vDepth;
      void main() {
        vec3 p = offset;
        if (rain > .5) p.y = mod(p.y - time * speed + 18., 36.) - 18.;
        else p.z += sin(time * .65 + offset.y * 2. + phase) * .075;
        vec4 view = modelViewMatrix * vec4(p + position * scale, 1.);
        gl_Position = projectionMatrix * view;
        float row = floor(glyph / 8.);
        vUv = vec2((mod(glyph, 8.) + uv.x) / 8., (3. - row + uv.y) / 4.);
        vLight = brightness * (1. + sin(time * .8 + phase) * .09);
        vDepth = -view.z;
      }`,
    fragmentShader: `
      uniform sampler2D atlas;
      uniform float opacity, rain;
      varying vec2 vUv;
      varying float vLight, vDepth;
      void main() {
        float a = texture2D(atlas, vUv).a;
        if(rain < .5) a = min(1., a * 1.55);
        if(a < .02) discard;
        float fog = rain > .5 ? exp(-vDepth * .024) : 1.;
        gl_FragColor = vec4(vec3(vLight), a * opacity * fog);
      }`,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  return mesh;
}

export function makeRain() {
  const random = seededRandom(6401), points = [];
  for (let stream = 0; stream < 96; stream++) {
    const z = -28 + random() * 33, x = (random() - .5) * 62;
    const top = random() * 36 - 18, length = 5 + Math.floor(random() * 12);
    const speed = .35 + random() * .5 + (z + 28) * .025;
    for (let j = 0; j < length; j++) points.push({ position: [x, top - j * .25, z], size: .16 + random() * .035, brightness: .15 + (z + 28) / 160 + (1 - j / length) * .12, speed, glyph: Math.floor(random() * characters.length), phase: random() * 6.28 });
  }
  return points;
}

export function makeSymbol() {
  const mask = document.createElement('canvas'); mask.width = mask.height = 640;
  const ctx = mask.getContext('2d', { willReadFrequently: true });
  ctx.font = '900 600px Arial Black, Arial, sans-serif'; ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('S', 320, 340);
  const pixels = ctx.getImageData(0, 0, 640, 640).data, random = seededRandom(), points = [];
  let minX = 640, minY = 640, maxX = 0, maxY = 0;
  for (let y = 0; y < 640; y += 12) for (let x = 0; x < 640; x += 12) {
    if (pixels[(y * 640 + x) * 4 + 3] < 160) continue;
    minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    points.push({ position: [x, -y, (random() - .5) * 16], size: 12.4, brightness: 1.1 + random() * .8, glyph: Math.floor(random() * characters.length), phase: random() * 6.28 });
  }
  points.forEach(p => { p.position[0] -= (minX + maxX) / 2; p.position[1] += (minY + maxY) / 2; });
  // Static fallback contains only the same sampled glyphs, never the solid mask.
  const fallback = document.createElement('canvas'); fallback.width = 520; fallback.height = 640;
  const out = fallback.getContext('2d'); out.font = 'bold 13px Consolas, monospace'; out.fillStyle = '#eee'; out.textAlign = 'center'; out.textBaseline = 'middle';
  points.forEach(p => out.fillText(characters[p.glyph], p.position[0] + 260, -p.position[1] + 320));
  document.querySelector('.fallback-symbol').style.backgroundImage = `url(${fallback.toDataURL()})`;
  return { points, height: maxY - minY + 16 };
}
