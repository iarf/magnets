import { Particle, Magnet } from './types.js';


export function canvasInit(c, fr){
	const ctx = c.getContext('2d');
	//fix device pixel ratio
	const dpr = window.devicePixelRatio;

	const styleHeight = getComputedStyle(c).getPropertyValue('height').slice(0,-2);
	const styleWidth = getComputedStyle(c).getPropertyValue('width').slice(0,-2);

	c.setAttribute('height', parseInt(styleHeight) * dpr);
	c.setAttribute('width', parseInt(styleWidth) * dpr);

	// setup magnets
	let primaryMagnet = new Magnet(1,.5,{x: 50, y: 50, h: 50, w: 20})

	let mouseX;
	let mouseY;
	c.addEventListener('mousemove',(e) => {
		const rect = c.getBoundingClientRect();
		mouseX = (e.clientX - rect.left) * dpr;
		mouseY = (e.clientY - rect.top) * dpr;
	});

	c.addEventListener('click',(e)=>{
		const x = primaryMagnet.position.x;
		const y = primaryMagnet.position.y;
		const w = primaryMagnet.position.w;
		const h = primaryMagnet.position.h;
		if (mouseX >= x && mouseX < x + w && mouseY >= y && mouseY < y + h){
			primaryMagnet.dragging = true;
		}
	})
	let anim = setInterval(canvasUpdate, 1000/fr);
	//handle mouse clicks at interval
	function canvasUpdate(){
		primaryMagnet.draw(ctx);

	}
}
