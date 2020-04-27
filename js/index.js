import { canvasInit } from './utils/setup.js';
import { Magnet, Particle } from './utils/types.js';

window.onload = () => {
	const c = document.querySelector('#stage');
	canvasInit(c,24);
}