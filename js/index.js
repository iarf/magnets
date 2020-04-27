import { canvasInit } from './utils.js';

window.onload = () => {
	const c = document.querySelector('#stage');
	canvasInit(c);
	const ctx = c.getContext('2d');
	console.log(c.width)
}