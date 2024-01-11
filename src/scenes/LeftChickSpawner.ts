
// You can write more code here

/* START OF COMPILED CODE */

import ChickSpawner from "./ChickSpawner";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LeftChickSpawner extends ChickSpawner {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 180, y ?? 120, texture, frame);

		this.flipX = true;
		this.flipY = false;

		// this.setVelocityXActionScript (prefab fields)
		this.setVelocityXActionScript.velocityX = 80;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
