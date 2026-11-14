export const damp = (current, target, lambda, dt) => current + (target - current) * (1 - Math.exp(-lambda * dt));

// Exact critically damped spring: stable at different display refresh rates.
export function spring(state, target, dt, frequency = 13) {
  const displacement = state.value - target;
  const impulse = state.velocity + frequency * displacement;
  const decay = Math.exp(-frequency * dt);
  state.value = target + (displacement + impulse * dt) * decay;
  state.velocity = (state.velocity - frequency * impulse * dt) * decay;
  return state.value;
}

export function seededRandom(seed = 12419) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

export function createLoop(update) {
  let frame = 0, previous = 0, disposed = false;
  function tick(now) {
    const dt = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
    previous = now;
    update(dt, now / 1000);
    frame = requestAnimationFrame(tick);
  }
  function pause() { cancelAnimationFrame(frame); frame = 0; previous = 0; }
  function resume() { if (!frame && !disposed && !document.hidden) frame = requestAnimationFrame(tick); }
  function visibility() { if (document.hidden) pause(); else resume(); }
  document.addEventListener('visibilitychange', visibility);
  resume();
  return { dispose() { disposed = true; pause(); document.removeEventListener('visibilitychange', visibility); } };
}
