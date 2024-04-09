
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { ExecRandomActionScript } from "@phaserjs/editor-scripts-core";
import { SetVelocityXActionScript } from "@phaserjs/editor-scripts-arcade";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Egg {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Egg extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "atlas", frame ?? "egg1.png");

		scene.physics.add.existing(this, false);
		this.body.velocity.y = 50;
		this.body.bounce.x = 1;
		this.body.bounce.y = 1;
		this.body.allowGravity = false;
		this.body.collideWorldBounds = true;
		this.body.setOffset(7, 8);
		this.body.setSize(18, 19, false);
		this.play("egg");

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// execRandomActionScript
		const execRandomActionScript = new ExecRandomActionScript(onAwakeScript);

		// setVelocityXActionScript
		const setVelocityXActionScript = new SetVelocityXActionScript(execRandomActionScript);

		// setVelocityXActionScript_1
		const setVelocityXActionScript_1 = new SetVelocityXActionScript(execRandomActionScript);

		// setVelocityXActionScript (prefab fields)
		setVelocityXActionScript.velocityX = -100;

		// setVelocityXActionScript_1 (prefab fields)
		setVelocityXActionScript_1.velocityX = 100;

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
