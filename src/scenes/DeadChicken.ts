
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { DelayActionScript } from "@phaserjs/editor-scripts-timer";
import { DestroyActionScript } from "@phaserjs/editor-scripts-core";
import { PlaySoundActionScript } from "@phaserjs/editor-scripts-audio";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface DeadChicken {

	 body: Phaser.Physics.Arcade.Body;
}

export default class DeadChicken extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 133, y ?? 97, texture || "atlas", frame ?? "chicken4.png");

		this.flipY = true;
		scene.physics.add.existing(this, false);
		this.body.velocity.y = -160;
		this.body.gravity.y = 800;
		this.body.setSize(32, 32, false);
		this.play("dead-chicken");

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// delayActionScript
		const delayActionScript = new DelayActionScript(onAwakeScript);

		// destroyActionScript
		new DestroyActionScript(delayActionScript);

		// playSoundActionScript
		const playSoundActionScript = new PlaySoundActionScript(onAwakeScript);

		// delayActionScript (prefab fields)
		delayActionScript.delay = 2000;

		// playSoundActionScript (prefab fields)
		playSoundActionScript.audioKey = "death";

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
