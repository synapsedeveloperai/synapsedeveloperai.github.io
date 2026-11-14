import{M as te,O as $e,B as Pe,F as fe,S as F,U as ie,V as S,W as K,H as J,N as Ne,T as ke,C as se,a as T,A as Ee,b as ze,R as Oe,c as Ge,d as qe,L as He,e as Qe,f as je,g as Re,h as We,i as Ve,j as Ye,k as Xe,l as Ke,m as Je,P as me,I as Ze,n as et,D as Le,o as tt,p as it,q as st,r as at,G as ot,s as rt,t as nt,u as lt}from"./three-D2i3rXe3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const M={github:{url:"https://github.com/synapsedeveloperai"},email:"synapse.developer.ai@gmail.com",discord:"synapseaidev",socials:[],phrases:["I build things for the web.","Exploring local AI systems.","Turning ideas into software.","Always testing something new."],content:{status:"Currently building",title:"Hi, I'm Synapse.",summary:"I work with software, local AI, and the systems behind them. This is a place for things I'm learning, experimenting with, and eventually releasing.",focus:[{title:"AI & INFERENCE",heading:"Models, tooling, and local AI.",description:"Exploring the practical side of running models locally: inference, hardware constraints, workflows, and useful integrations.",code:`// current interests
const focus = [
  'local LLMs',
  'inference',
  'automation'
];`,bullets:["Local models","Inference pipelines","Model integration","Automation workflows"],symbol:"{ / }"},{title:"FULL-STACK SYSTEMS",heading:"Interfaces and the logic behind them.",description:"Building and experimenting with web interfaces, services, APIs, and tools that connect the front end to the underlying system.",code:`// things I like building
const areas = {
  frontend: 'web',
  backend: 'services',
  goal: 'make it work'
};`,bullets:["Web interfaces","Backend services","Typed APIs","System design"],symbol:"[ _ ]"}],about:{lead:"I like figuring out how software works, then seeing what I can build with it.",description:"Most of my time goes into learning by building, testing ideas, and exploring the intersection of software engineering and AI. I'm especially interested in local models, automation, and the tradeoffs involved in making software useful.",facts:[["Focus","Software / AI / Systems"],["Interests","Local inference / Automation"],["Approach","Build → Test → Iterate"],["Portfolio","Work in progress"]]},projects:{title:"Nothing published here yet.",description:"I'm working on a few things behind the scenes. When there's something worth sharing, you'll find the code and details here."},toolsDescription:"Technologies and topics I work with or am exploring.",tools:["Python","JavaScript / TypeScript","React","HTML / CSS","Git","Linux","Local LLMs","Ollama","APIs","Automation","AI Inference"],contact:{title:"Let's connect.",description:"Want to talk software, AI, or something you're building?"}}},Z=(i,e,t,o)=>i+(e-i)*(1-Math.exp(-t*o));function ae(i,e,t,o=13){const a=i.value-e,s=i.velocity+o*a,l=Math.exp(-o*t);return i.value=e+(a+s*t)*l,i.velocity=(i.velocity-o*s*t)*l,i.value}function Ie(i=12419){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}function ct(i){let e=0,t=0,o=!1;function a(c){const b=t?Math.min((c-t)/1e3,.05):0;t=c,i(b,c/1e3),e=requestAnimationFrame(a)}function s(){cancelAnimationFrame(e),e=0,t=0}function l(){!e&&!o&&!document.hidden&&(e=requestAnimationFrame(a))}function d(){document.hidden?s():l()}return document.addEventListener("visibilitychange",d),l(),{dispose(){o=!0,s(),document.removeEventListener("visibilitychange",d)}}}const g=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ue=i=>{try{return new URL(i).protocol==="https:"}catch{return!1}},Fe=(i,e)=>`<a class="button magnetic" href="${g(e)}" target="_blank" rel="noopener noreferrer">${g(i)} <span aria-hidden="true">↗</span></a>`;function de(i){const e=i==="GitHub",t=e?M.github.url:M.email;return(e?Ue(t)&&new URL(t).hostname==="github.com"&&new URL(t).pathname.length>1&&!/YOUR_USERNAME/i.test(t):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)&&!/@example\./i.test(t))?Fe(i,e?t:`mailto:${t}`):`<span class="unconfigured"><button class="button" type="button" aria-disabled="true" aria-describedby="${e?"github":"email"}-hint">${i} <span aria-hidden="true">↗</span></button><span class="tooltip" id="${e?"github":"email"}-hint">${i} link not configured yet.</span></span>`}const pe=(i,e)=>`<div class="section-heading"><span>${i} /</span><h2>${e}</h2><span class="heading-rule"></span></div>`;function ut(){const i=M.content;document.querySelector("#app").innerHTML=`
    <div class="wrap">
      <header id="home" class="enter" style="--delay:0s">
        <a href="#home" class="brand" aria-label="Synapse home">SYNAPSE<span>.</span></a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Menu <span aria-hidden="true">+</span></button>
        <nav id="navigation" aria-label="Main navigation">${["About","Projects","Stack","Contact"].map(e=>`<a href="#${e.toLowerCase()}" data-scramble>${e}</a>`).join("")}</nav>
      </header>
      <main id="main">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-copy">
            <div class="status enter" style="--delay:.12s"><span class="status-light"></span>${g(i.status)}</div>
            <h1 id="hero-title" class="enter" style="--delay:.25s">${g(i.title)}</h1>
            <div class="type-line enter" style="--delay:.38s" aria-label="${g(M.phrases.join(" "))}"><span id="typed" aria-hidden="true">${g(M.phrases[0])}</span><span class="cursor" aria-hidden="true">_</span></div>
            <p class="summary enter" style="--delay:.5s">${g(i.summary)}</p>
            <div class="actions enter" style="--delay:.62s"><a class="button primary magnetic" href="#projects">Explore Projects <span aria-hidden="true">↗</span></a>${de("GitHub")}</div>
          </div>
          <div class="hero-art" role="img" aria-label="A luminous S assembled from hundreds of code characters in 3D">
            <div class="art-notes" aria-hidden="true">// synapse<br>// build()<br>// test()<br>// iterate()<span>&gt; systems/<br>&gt; ai/<br>&gt; apps/</span></div>
            <div class="fallback-symbol" aria-hidden="true"></div>
            <span class="art-caption enter" style="--delay:.8s" aria-hidden="true">&lt; BUILT ONE CHARACTER AT A TIME / &gt;</span>
          </div>
          <a class="scroll-cue" href="#focus" aria-label="Explore areas of interest"><span></span></a>
        </section>
        <section id="focus" class="focus" aria-label="Areas of interest">
          <div class="focus-grid">${i.focus.map((e,t)=>`<div class="card-shell reveal" style="--delay:${t*.12}s"><span class="floating-pane pane-one" aria-hidden="true"></span><span class="floating-pane pane-two" aria-hidden="true"></span><article class="glass-card tilt"><div class="card-top"><h2><span>0${t+1} /</span> ${g(e.title)}</h2><span class="card-icon" aria-hidden="true">${e.symbol}</span></div><h3 class="sr-only">${g(e.heading)}</h3><p>${g(e.description)}</p><div class="card-details"><pre class="code-box"><code>${e.code.split(`
`).map((o,a)=>`<span class="code-row"><span class="line-number" aria-hidden="true">${a+1}</span><span${a===0?' class="comment"':""}>${g(o)}</span></span>`).join("")}</code></pre><ul>${e.bullets.map(o=>`<li>${g(o)}</li>`).join("")}</ul></div></article></div>`).join("")}</div>
        </section>
        <section id="about" class="content-section reveal">${pe("02","About")}<div class="about-grid"><div><p class="lead">${g(i.about.lead)}</p><p class="copy">${g(i.about.description)}</p></div><dl class="facts">${i.about.facts.map(([e,t])=>`<div><dt>${g(e)}</dt><dd>${g(t)}</dd></div>`).join("")}</dl></div></section>
        <section id="projects" class="content-section reveal">${pe("03","Projects")}<div class="project-empty tilt"><div><div class="eyebrow">PROJECT INDEX / 000</div><h3>${g(i.projects.title)}</h3><p class="copy">${g(i.projects.description)}</p><a class="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div><div class="terminal" aria-hidden="true"><div class="terminal-top"><span></span><span></span><span></span><small>~/synapse/projects</small></div><pre><span class="comment">$ ls ./projects</span>

  [ no public releases ]

<span class="comment">$ git status</span>
  work in progress<span class="cursor">_</span></pre></div></div></section>
        <section id="stack" class="content-section reveal">${pe("04","Tools & interests")}<p class="copy">${g(i.toolsDescription)}</p><ul class="chips">${i.tools.map((e,t)=>`<li style="--delay:${t*.035}s">${g(e)}</li>`).join("")}</ul></section>
        <section id="contact" class="content-section reveal"><div class="contact-panel"><div class="eyebrow">05 / CONTACT</div><h2>${g(i.contact.title)}</h2><p class="copy">${g(i.contact.description)}</p><div class="actions">${de("GitHub")}${de("Email")}${M.socials.filter(e=>Ue(e.url)).map(e=>Fe(e.label,e.url)).join("")}</div>${`<p class="discord-contact">Discord <span>@${g(M.discord)}</span></p>`}<p class="configuration-note">Contact links will be available once configured.</p></div></section>
      </main>
      <footer><a href="#home" class="brand">SYNAPSE.</a><span>© ${new Date().getFullYear()} · ALWAYS A WORK IN PROGRESS</span><span>BUILT WITH THREE.JS / WEBGL</span></footer>
    </div>
    <div class="experience-controls" aria-label="Experience settings"><button id="motion-toggle" aria-pressed="false">Motion <span>on</span></button><span aria-hidden="true">/</span><button id="quality-toggle" aria-pressed="false">Low power <span>off</span></button></div>
    <a class="back-top" href="#home" aria-label="Back to top">↑</a>`,document.querySelectorAll(".unconfigured").forEach((e,t)=>{const o=`contact-hint-${t}`;e.querySelector(".tooltip").id=o,e.querySelector("button").setAttribute("aria-describedby",o)}),document.querySelector(".configuration-note").hidden=!0}function ht(i,e){const t=(n,u,r,f={})=>n.addEventListener(u,r,{...f,signal:e}),o=document.querySelector(".menu-toggle"),a=document.querySelector("nav");function s(){o.setAttribute("aria-expanded","false"),a.classList.remove("open")}t(o,"click",()=>{const n=o.getAttribute("aria-expanded")!=="true";o.setAttribute("aria-expanded",String(n)),a.classList.toggle("open",n)}),t(document,"keydown",n=>{n.key==="Escape"&&a.classList.contains("open")&&(s(),o.focus())}),t(document,"click",n=>{n.target.closest("header")||s()}),a.querySelectorAll("a").forEach(n=>t(n,"click",s));const l=new IntersectionObserver(n=>n.forEach(u=>{u.isIntersecting&&(u.target.classList.add("visible"),l.unobserve(u.target))}),{threshold:.08});document.querySelectorAll(".reveal").forEach(n=>l.observe(n));const d=[...a.querySelectorAll("a")];let c=[],b=-1;function p(){c=d.map(n=>({link:n,top:document.querySelector(n.hash).offsetTop})),b=-1}t(window,"resize",p,{passive:!0}),p();const m=[...document.querySelectorAll(".tilt, .magnetic")].map(n=>{const u={el:n,card:n.classList.contains("tilt"),x:{value:0,velocity:0},y:{value:0,velocity:0},tx:0,ty:0,glow:0,hover:!1,hx:50,hy:50,rect:null};return t(n,"pointerenter",r=>{r.pointerType!=="touch"&&(u.rect=n.getBoundingClientRect(),u.hover=!0)}),t(n,"pointermove",r=>{if(!u.rect||r.pointerType==="touch")return;const f=Math.max(-1,Math.min(1,(r.clientX-u.rect.left)/u.rect.width*2-1)),y=Math.max(-1,Math.min(1,(r.clientY-u.rect.top)/u.rect.height*2-1));u.tx=f,u.ty=y,u.hx=(f+1)*50,u.hy=(y+1)*50}),t(n,"pointerleave",()=>{u.tx=u.ty=0,u.hover=!1,u.rect=null}),u}),v=()=>m.forEach(n=>{n.tx=n.ty=0,n.hover=!1});t(window,"blur",v),t(document.documentElement,"pointerleave",v);const O=[...document.querySelectorAll(".floating-pane")];let C=0,L=0,x=0,I=0;t(window,"pointermove",n=>{n.pointerType!=="touch"&&(x=n.clientX/innerWidth*2-1,I=n.clientY/innerHeight*2-1)},{passive:!0});const j=()=>{x=I=0};t(window,"blur",j),t(document.documentElement,"pointerleave",j);const W=[...document.querySelectorAll("[data-scramble]")].map(n=>{const u={el:n,text:n.textContent,remaining:0,tick:0};return t(n,"pointerenter",()=>{i.reduced||(u.remaining=.28)}),u}),N=document.querySelector("#typed");let w=0,U=M.phrases[0].length,D=!1,_=2.6;const A=document.querySelector("#motion-toggle"),B=document.querySelector("#quality-toggle");return t(A,"click",()=>i.setMotion(!i.motionOff)),t(B,"click",()=>i.setLow(!i.low)),{update(n){const u=i.reduced;if(b!==scrollY){b=scrollY;const r=c.findLast(f=>f.top<=scrollY+innerHeight*.35)?.link;d.forEach(f=>{f===r?f.setAttribute("aria-current","location"):f.removeAttribute("aria-current")})}C=Z(C,u?0:x,4,n),L=Z(L,u?0:I,4,n),O.forEach((r,f)=>{const y=f%2?9:16;r.style.transform=`translate3d(${C*y}px, ${L*y}px, ${f%2?-70:-30}px)`}),A.setAttribute("aria-pressed",String(u)),A.querySelector("span").textContent=u?"off":"on",B.setAttribute("aria-pressed",String(i.low)),B.querySelector("span").textContent=i.low?"on":"off";for(const r of m){const f=ae(r.x,u?0:r.tx,n),y=ae(r.y,u?0:r.ty,n);r.glow=Z(r.glow,r.hover&&!u?1:0,6,n),r.el.style.transform=r.card?`perspective(1000px) rotateX(${-y*3.5}deg) rotateY(${f*4}deg) translateY(${-r.glow*5}px)`:`translate(${f*7}px, ${y*5}px)`,r.card&&(r.el.style.setProperty("--glow",r.glow),r.el.style.setProperty("--hx",`${r.hx}%`),r.el.style.setProperty("--hy",`${r.hy}%`))}u?(N.textContent=M.phrases[0],_=2.6,w=0,U=M.phrases[0].length,D=!1):(_-=n,_<=0&&(D?(U--,U===0?(w=(w+1)%M.phrases.length,D=!1,_=.25):_=.025):U<M.phrases[w].length?(U++,_=.055):(D=!0,_=1.9),N.textContent=M.phrases[w].slice(0,U)));for(const r of W)if(r.remaining>0&&!u){if(r.remaining-=n,r.tick+=n,r.tick>.035){r.tick=0;const f=Math.floor((1-r.remaining/.28)*r.text.length);r.el.textContent=[...r.text].map((y,G)=>G<f?y:"<>/{}"[G%5]).join("")}}else r.el.textContent!==r.text&&(r.el.textContent=r.text);document.querySelector(".back-top").classList.toggle("show",scrollY>650)},dispose(){l.disconnect()}}}const ee={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class z{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dt=new $e(-1,1,1,-1,0,1);class pt extends Pe{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}}const ft=new pt;class ge{constructor(e){this._mesh=new te(ft,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mt extends z{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof F?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ie.clone(e.uniforms),this.material=new F({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ge(this.material)}render(e,t,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _e extends z{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,o){const a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let l,d;this.inverse?(l=0,d=1):(l=1,d=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,l,4294967295),s.buffers.stencil.setClear(d),s.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}}class gt extends z{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const o=e.getSize(new S);this._width=o.width,this._height=o.height,t=new K(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:J}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mt(ee),this.copyPass.material.blending=Ne,this.timer=new ke}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let o=!1;for(let a=0,s=this.passes.length;a<s;a++){const l=this.passes[a];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),l.needsSwap){if(o){const d=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}_e!==void 0&&(l instanceof _e?o=!0:l instanceof gt&&(o=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new S);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const o=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(o,a),this.renderTarget2.setSize(o,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(o,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bt extends z{constructor(e,t,o=null,a=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=o,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(e,t,o){const a=e.autoClear;e.autoClear=!1;let s,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=a}}const yt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class k extends z{constructor(e,t=1,o,a){super(),this.strength=t,this.radius=o,this.threshold=a,this.resolution=e!==void 0?new S(e.x,e.y):new S(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new K(s,l,{type:J}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const m=new K(s,l,{type:J});m.texture.name="UnrealBloomPass.h"+p,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const v=new K(s,l,{type:J});v.texture.name="UnrealBloomPass.v"+p,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),s=Math.round(s/2),l=Math.round(l/2)}const d=yt;this.highPassUniforms=ie.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new F({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new S(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const b=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=b,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ie.clone(ee.uniforms),this.blendMaterial=new F({uniforms:this.copyUniforms,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader,premultipliedAlpha:!0,blending:Ee,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new ze,this._fsQuad=new ge(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let o=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(o,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(o,a),this.renderTargetsVertical[s].setSize(o,a),this.separableBlurMaterials[s].uniforms.invSize.value=new S(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2)}render(e,t,o,a,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=o.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=o.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[c].uniforms.direction.value=k.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=k.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(o),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=l}_getSeparableBlurMaterial(e){const t=[],o=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(o*o))/o);return new F({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new S(.5,.5)},direction:{value:new S(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new F({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}k.BlurDirectionX=new S(1,0);k.BlurDirectionY=new S(0,1);const X={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class xt extends z{constructor(){super(),this.isOutputPass=!0,this.uniforms=ie.clone(X.uniforms),this.material=new Oe({name:X.name,uniforms:this.uniforms,vertexShader:X.vertexShader,fragmentShader:X.fragmentShader}),this._fsQuad=new ge(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,o){this.uniforms.tDiffuse.value=o.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===He?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qe?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===je?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Re?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===We?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ve?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ye&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const oe="01{}()[];:=+<>/\\#*-.!|&?abcdef";function wt(){const i=document.createElement("canvas");i.width=512,i.height=256;const e=i.getContext("2d");e.font="bold 43px Consolas, monospace",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#fff",[...oe].forEach((o,a)=>e.fillText(o,a%8*64+32,Math.floor(a/8)*64+33));const t=new Xe(i);return t.minFilter=Ke,t.magFilter=Je,t}function Ae(i,e,t=!1){const o=new me(1,1),a=new Ze;a.index=o.index,a.attributes.position=o.attributes.position,a.attributes.uv=o.attributes.uv;for(const[d,c,b]of[["offset",3,i.flatMap(p=>p.position)],["glyph",1,i.map(p=>p.glyph)],["scale",1,i.map(p=>p.size)],["brightness",1,i.map(p=>p.brightness)],["speed",1,i.map(p=>p.speed||0)],["phase",1,i.map(p=>p.phase||0)]])a.setAttribute(d,new et(new Float32Array(b),c));a.instanceCount=i.length;const s=new F({uniforms:{atlas:{value:e},time:{value:0},opacity:{value:1},rain:{value:t?1:0}},transparent:!0,depthWrite:!1,side:Le,vertexShader:`
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
      }`,fragmentShader:`
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
      }`}),l=new te(a,s);return l.frustumCulled=!1,l}function Mt(){const i=Ie(6401),e=[];for(let t=0;t<96;t++){const o=-28+i()*33,a=(i()-.5)*62,s=i()*36-18,l=5+Math.floor(i()*12),d=.35+i()*.5+(o+28)*.025;for(let c=0;c<l;c++)e.push({position:[a,s-c*.25,o],size:.16+i()*.035,brightness:.15+(o+28)/160+(1-c/l)*.12,speed:d,glyph:Math.floor(i()*oe.length),phase:i()*6.28})}return e}function Tt(){const i=document.createElement("canvas");i.width=i.height=640;const e=i.getContext("2d",{willReadFrequently:!0});e.font="900 600px Arial Black, Arial, sans-serif",e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("S",320,340);const t=e.getImageData(0,0,640,640).data,o=Ie(),a=[];let s=640,l=640,d=0,c=0;for(let m=0;m<640;m+=12)for(let v=0;v<640;v+=12)t[(m*640+v)*4+3]<160||(s=Math.min(s,v),d=Math.max(d,v),l=Math.min(l,m),c=Math.max(c,m),a.push({position:[v,-m,(o()-.5)*16],size:12.4,brightness:1.1+o()*.8,glyph:Math.floor(o()*oe.length),phase:o()*6.28}));a.forEach(m=>{m.position[0]-=(s+d)/2,m.position[1]+=(l+c)/2});const b=document.createElement("canvas");b.width=520,b.height=640;const p=b.getContext("2d");return p.font="bold 13px Consolas, monospace",p.fillStyle="#eee",p.textAlign="center",p.textBaseline="middle",a.forEach(m=>p.fillText(oe[m.glyph],m.position[0]+260,-m.position[1]+320)),document.querySelector(".fallback-symbol").style.backgroundImage=`url(${b.toDataURL()})`,{points:a,height:c-l+16}}function St(i,e){const t=document.querySelector("#world"),o=document.querySelector(".hero-art"),a=Tt();let s;const l=()=>{document.documentElement.classList.add("no-webgl"),t.style.visibility="hidden"};try{s=new tt({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"})}catch{return l(),{update(){},dispose(){},inspect:()=>({fallback:!0})}}s.setClearColor(328965),s.outputColorSpace=it,s.toneMapping=Re,s.toneMappingExposure=1,s.info.autoReset=!1;const d=new st,c=new at(43,1,.1,120),b=new T(0,3,15),p=new T(0,1.6,0);c.position.copy(b),c.lookAt(p);const m=c.quaternion.clone(),v=new ot;d.add(v);const O=wt(),C=Mt(),L=Ae(C,O,!0);v.add(L);const x=Ae(a.points,O);d.add(x);const I=new te(new me(110,100,1,1),new F({transparent:!0,depthWrite:!1,side:Le,uniforms:{time:{value:0}},vertexShader:"varying vec3 vWorld; varying vec2 vGrid; void main(){vGrid=position.xy;vec4 p=modelMatrix*vec4(position,1.);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`
      varying vec3 vWorld; varying vec2 vGrid; uniform float time;
      void main(){
        vec2 c = vGrid / 1.5;
        vec2 g = abs(fract(c - .5) - .5) / max(fwidth(c), vec2(.0001));
        float line = 1. - min(min(g.x,g.y),1.);
        float fade = exp(-length(vWorld.xz * vec2(.65,1.)) * .055);
        float horizon = 1. - smoothstep(20.,45.,-vWorld.z);
        float pool = .68 + .32 * sin(time * .32 + vWorld.z * .18);
        gl_FragColor=vec4(vec3(.55),line * fade * horizon * pool * .15);
      }`}));I.rotation.x=-Math.PI/2,I.position.set(0,-2.3,-20),v.add(I);const j=new F({transparent:!0,depthWrite:!1,blending:Ee,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float d=length((vUv-.5)*2.);float a=exp(-d*d*7.)*.045;gl_FragColor=vec4(vec3(.7),a);}"});for(const[h,P,E]of[[6,0,14],[-9,-15,18],[0,-28,20]]){const R=new te(new me(E,E),j);R.rotation.x=-Math.PI/2,R.position.set(h,-2.25,P),v.add(R)}const W=new Pe;W.setAttribute("position",new fe(C.filter((h,P)=>P%9===0).flatMap(h=>h.position),3));const N=new rt(W,new nt({color:10066329,size:.025,transparent:!0,opacity:.3,depthWrite:!1}));v.add(N);const w=new vt(s),U=new bt(d,c),D=new k(new S(1,1),.36,.38,.85),_=new xt;w.addPass(U),w.addPass(D),w.addPass(_);const A={x:0,y:0},B={x:{value:0,velocity:0},y:{value:0,velocity:0}};let n=0,u=0,r=!1,f=0,y=0,G=null,V=!1,ne=0,le=0,ce=0;const be=new T,ye=new T,xe=new T,we=new T,Me=new T,$=(h,P,E,R={})=>h.addEventListener(P,E,{...R,signal:e});function q(){n=innerWidth,u=innerHeight,r=n<900,s.setPixelRatio(Math.min(devicePixelRatio||1,r||i.low?1:1.5)),s.setSize(n,u,!1),w.setPixelRatio(Math.min(devicePixelRatio||1,r||i.low?1:1.5)),w.setSize(n,u),c.aspect=n/u,c.updateProjectionMatrix();const h=o.getBoundingClientRect();ne=h.top+scrollY+h.height*.46,le=h.left+h.width*.56,ce=Math.min(h.height*.85,h.width*.98,r?305:470),n<650&&(le=h.left+h.width*.5)}$(window,"resize",q,{passive:!0}),$(window,"orientationchange",q),$(window,"pointermove",h=>{h.pointerType!=="touch"&&(A.x=Math.max(-1,Math.min(1,h.clientX/n*2-1)),A.y=Math.max(-1,Math.min(1,h.clientY/u*2-1)))},{passive:!0});const Te=()=>{A.x=A.y=0};$(window,"blur",Te),$(document.documentElement,"pointerleave",Te),$(t,"webglcontextlost",h=>{h.preventDefault(),V=!0,l()}),$(t,"webglcontextrestored",()=>{V=!1,document.documentElement.classList.remove("no-webgl"),t.style.visibility="",q()}),q();let ue=0,Se=0;return{update(h){if(V)return;const P=i.reduced;G!==i.low&&(G=i.low,q()),P||(f+=h),y=Z(y,scrollY,5,h);const E=ae(B.x,P||r?0:A.x,h,5.5),R=ae(B.y,P||r?0:A.y,h,5.5),Y=Math.min(y/u,4);c.position.set(E*.52,3-R*.22+Y*.1,15-Y*.18),ye.set(E*.1,1.6-R*.05-Y*.1,-Y*.2),c.lookAt(ye),v.rotation.y=E*.012,v.rotation.z=-R*.004,I.position.z=-20+f*.16%1.5,I.material.uniforms.time.value=f,L.material.uniforms.time.value=f,L.geometry.instanceCount=i.low||r?Math.floor(C.length*.38):C.length,L.rotation.y=E*.015,N.visible=!i.low&&!r,N.rotation.y=f*.008,x.material.uniforms.time.value=f;const Ce=10.5,he=2*Math.tan(lt.degToRad(c.fov/2))*Ce;xe.set(1,0,0).applyQuaternion(m),we.set(0,1,0).applyQuaternion(m),Me.set(0,0,-1).applyQuaternion(m),be.copy(b).addScaledVector(Me,Ce).addScaledVector(xe,(le/n-.5)*he*c.aspect).addScaledVector(we,(.5-(ne-y)/u)*he),x.position.copy(be),x.quaternion.copy(m),x.rotateY(E*.1),x.rotateX(R*.065),x.scale.setScalar(ce/u*he/a.height),x.material.uniforms.opacity.value=Math.min(1,f/1.25+(P?1:0)),x.visible=ne-y>-ce,ue+=h,!((r||i.low)&&ue<1/30&&h>0)&&(ue=0,Se++,s.info.reset(),i.low||r?s.render(d,c):w.render(h))},inspect:()=>({fallback:V,camera:c.position.toArray(),pointer:[B.x.value,B.y.value],rainCount:L.geometry.instanceCount,depths:[Math.min(...C.map(h=>h.position[2])),Math.max(...C.map(h=>h.position[2]))],glyphCount:a.points.length,drawCalls:s.info.render.calls,frames:Se,dpr:s.getPixelRatio(),bloom:!i.low&&!r,time:f}),dispose(){d.traverse(h=>{h.geometry?.dispose(),h.material&&h.material.dispose()}),O.dispose(),D.dispose(),U.dispose(),_.dispose(),w.dispose(),s.dispose()}}}ut();const Q=new AbortController,H=matchMedia("(prefers-reduced-motion: reduce)"),re={motionOff:H.matches,low:!1,get reduced(){return this.motionOff||H.matches},setMotion(i){this.motionOff=i,document.documentElement.classList.toggle("motion-off",this.reduced)},setLow(i){this.low=i}};re.setMotion(H.matches);H.addEventListener("change",()=>re.setMotion(H.matches),{signal:Q.signal});const Be=ht(re,Q.signal),ve=St(re,Q.signal),Ct=ct(i=>{Be.update(i),ve.update(i)});function De(){Ct.dispose(),Q.abort(),Be.dispose(),ve.dispose()}window.addEventListener("pagehide",i=>{i.persisted||De()},{signal:Q.signal});new URLSearchParams(location.search).has("qa")&&(window.synapseQA={inspect:ve.inspect,dispose:De});
