import { canvasInit } from './utils/setup.js';
import { Magnet, Particle } from './utils/types.js';

window.onload = () => {
	const c = document.querySelector('#stage');
	canvasInit(c);
	const ctx = c.getContext('2d');
	console.log(c.width)
}
