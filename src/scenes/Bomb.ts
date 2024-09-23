
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Bomb {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Bomb extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 167, y ?? 108, texture || "atlas", frame ?? "bomb1.png");

		scene.physics.add.existing(this, false);
		this.body.setOffset(3, 3);
		this.body.setSize(26, 26, false);
		this.play("bomb");

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
