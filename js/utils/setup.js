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
	let magnets = new Array(2);
	for (let i = 0; i < magnets.length; i++){
		magnets[i] = new Magnet(1,.5,{x:100*i + 50,y:100});
	}

	let mouseX;
	let mouseY;
	c.addEventListener('mousemove',(e) => {
		const rect = c.getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
	});

	c.addEventListener('click',(e)=>{
		console.log(`${mouseX},${mouseY}`)
		for (let i = 0; i < magnets.length; i++){

		}
	})
	canvasUpdate()
	//handle mouse clicks at interval
	function canvasUpdate(){
		//if mouse is clicked, check if it is over a magnet
		//	if so, set magnet.dragging to true, lock it to the mouse
		//if magnet.dragging true and mouse is released, set to false
		for (let i = 0; i < magnets.length; i++){
			magnets[i].draw(ctx);
		}
	}
}
