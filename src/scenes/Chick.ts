
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { StartFlipWithVelocityAction } from "@phaserjs/editor-scripts-arcade";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Chick {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Chick extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 152, y ?? 102, texture || "atlas", frame ?? "chick1.png");

		scene.physics.add.existing(this, false);
		this.body.bounce.x = 1.05;
		this.body.bounce.y = 1.05;
		this.body.setOffset(8, 8);
		this.body.setSize(16, 17, false);
		this.play("chick");

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// startFlipWithVelocityAction
		const startFlipWithVelocityAction = new StartFlipWithVelocityAction(onAwakeScript);

		// startFlipWithVelocityAction (prefab fields)
		startFlipWithVelocityAction.flipH = true;
		startFlipWithVelocityAction.facingLeft = true;

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
