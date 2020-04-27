/////
//  Classes of objects represented on stage

export class Magnet{
	constructor(strength,decay,position){
		this.position = {}
		//STRENGTH: strength of magnet.
		//DECAY: Remaining strength at radius of 1 unit
		this.strength = strength;
		this.decay = decay;
		this.position.x = position.x;
		this.position.y = position.y;
	}
	draw(ctx){
		const posX = this.position.x;
		const posY = this.position.y;
		ctx.fillStyle = '#c98b8b'
		ctx.fillRect(posX,posY,30,20);
	}

}
export class Particle{
	constructor(magnetism,mass){
		this.magnetism = magnetism;
		this.mass = mass
	}
}