//helper to set canvas size based on styles and fix dpi blur

export function canvasInit(c){
	const dpr = window.devicePixelRatio;

	const styleHeight = getComputedStyle(c).getPropertyValue('height').slice(0,-2);
	const styleWidth = getComputedStyle(c).getPropertyValue('width').slice(0,-2);

	c.setAttribute('height', parseInt(styleHeight) * dpr);
	c.setAttribute('width', parseInt(styleWidth) * dpr);
}