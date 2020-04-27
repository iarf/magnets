/////
//  Classes of objects represented on stage

export class Magnet{
	constructor(strength,decay){
		//STRENGTH: strength of magnet.
		//DECAY: Remaining strength at radius of 1 unit
		this.strength = strength;
		this.decay = decay;		
	}
}
export class Particle{
	constructor(magnetism,mass){
		this.magnetism = magnetism;
		this.mass = mass
	}
}