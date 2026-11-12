import Lenis from 'lenis'

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const lenis = prefersReduced ? null : new Lenis({ autoRaf: true });

export default lenis;
