import './styles.css';
import { renderUI, createUI } from './ui.js';
import { createWorld } from './scene/world.js';
import { createLoop } from './motion.js';

renderUI();
const controller = new AbortController(), media = matchMedia('(prefers-reduced-motion: reduce)');
const settings = {
  motionOff: media.matches,
  low: false,
  get reduced() { return this.motionOff || media.matches; },
  setMotion(off) { this.motionOff = off; document.documentElement.classList.toggle('motion-off', this.reduced); },
  setLow(low) { this.low = low; },
};
settings.setMotion(media.matches);
media.addEventListener('change', () => settings.setMotion(media.matches), { signal: controller.signal });
const ui = createUI(settings, controller.signal), world = createWorld(settings, controller.signal);
const loop = createLoop(dt => { ui.update(dt); world.update(dt); });
function dispose() { loop.dispose(); controller.abort(); ui.dispose(); world.dispose(); }
window.addEventListener('pagehide', e => { if (!e.persisted) dispose(); }, { signal: controller.signal });
if (import.meta.hot) import.meta.hot.dispose(dispose);
// Opt-in diagnostics for the browser QA suite; no globals in normal visits.
if (new URLSearchParams(location.search).has('qa')) window.synapseQA = { inspect: world.inspect, dispose };
