
// You can write more code here

/* START OF COMPILED CODE */

import { OnEventScript } from "@phaserjs/editor-scripts-quick";
import { SetVelocityXActionScript } from "@phaserjs/editor-scripts-quick";
import { SetVelocityYActionScript } from "@phaserjs/editor-scripts-quick";
import { PlaySoundActionScript } from "@phaserjs/editor-scripts-quick";
import { OnAwakeScript } from "@phaserjs/editor-scripts-quick";
import { StartFlipWithVelocityAction } from "@phaserjs/editor-scripts-quick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Chicken {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Chicken extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 126, y ?? 121, texture || "atlas", frame ?? "chicken1.png");

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 400;
		this.body.collideWorldBounds = true;
		this.body.onWorldBounds = true;
		this.body.setOffset(7, 10);
		this.body.setSize(17, 18, false);
		this.play("chicken");

		// onKeydownRight
		const onKeydownRight = new OnEventScript(this);

		// setVelocityRight
		const setVelocityRight = new SetVelocityXActionScript(onKeydownRight);

		// onKeyupRight
		const onKeyupRight = new OnEventScript(this);

		// setVelocityXActionScript
		new SetVelocityXActionScript(onKeyupRight);

		// onKeyupLeft
		const onKeyupLeft = new OnEventScript(this);

		// setVelocityXActionScript
		new SetVelocityXActionScript(onKeyupLeft);

		// onKeydownLeft
		const onKeydownLeft = new OnEventScript(this);

		// setVelocityLeft
		const setVelocityLeft = new SetVelocityXActionScript(onKeydownLeft);

		// onKeydownSpace
		const onKeydownSpace = new OnEventScript(this);

		// setVelocityYActionScript
		const setVelocityYActionScript = new SetVelocityYActionScript(onKeydownSpace);

		// playSoundActionScript
		const playSoundActionScript = new PlaySoundActionScript(onKeydownSpace);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// startFlipWithVelocityAction_1
		const startFlipWithVelocityAction_1 = new StartFlipWithVelocityAction(onAwakeScript);

		// onKeydownRight (prefab fields)
		onKeydownRight.eventName = "keydown-RIGHT";
		onKeydownRight.eventEmitter = "scene.input.keyboard";

		// setVelocityRight (prefab fields)
		setVelocityRight.velocityX = 100;

		// onKeyupRight (prefab fields)
		onKeyupRight.eventName = "keyup-RIGHT";
		onKeyupRight.eventEmitter = "scene.input.keyboard";

		// onKeyupLeft (prefab fields)
		onKeyupLeft.eventName = "keyup-LEFT";
		onKeyupLeft.eventEmitter = "scene.input.keyboard";

		// onKeydownLeft (prefab fields)
		onKeydownLeft.eventName = "keydown-LEFT";
		onKeydownLeft.eventEmitter = "scene.input.keyboard";

		// setVelocityLeft (prefab fields)
		setVelocityLeft.velocityX = -100;

		// onKeydownSpace (prefab fields)
		onKeydownSpace.eventName = "keydown-SPACE";
		onKeydownSpace.eventEmitter = "scene.input.keyboard";

		// setVelocityYActionScript (prefab fields)
		setVelocityYActionScript.velocityY = -150;

		// playSoundActionScript (prefab fields)
		playSoundActionScript.audioKey = "flap";

		// startFlipWithVelocityAction_1 (prefab fields)
		startFlipWithVelocityAction_1.flipH = true;
		startFlipWithVelocityAction_1.facingLeft = true;

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
