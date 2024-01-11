
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnAwakeScript } from "@phasereditor2d/scripts-core";
import { EmitRandomTickActionScript } from "@phasereditor2d/scripts-timer";
import { RandomInArrayComp } from "@phasereditor2d/scripts-random";
import { DelayRandomActionScript } from "@phasereditor2d/scripts-timer";
import { RandomBetweenComp } from "@phasereditor2d/scripts-random";
import { SpawnActionScript } from "@phasereditor2d/scripts-core";
import { EmitEventActionScript } from "@phasereditor2d/scripts-core";
import { SetVelocityXActionScript } from "@phasereditor2d/scripts-arcade";
import { ActionTargetComp } from "@phasereditor2d/scripts-core";
/* START-USER-IMPORTS */
import Chick from "./Chick";
/* END-USER-IMPORTS */

export default class ChickSpawner extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 166, y ?? 115, texture || "atlas", frame ?? "chick1.png");

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(this);

		// emitRandomTickActionScript
		const emitRandomTickActionScript = new EmitRandomTickActionScript(onAwakeScript_1);

		// delayRandomActionScript
		const delayRandomActionScript = new DelayRandomActionScript(emitRandomTickActionScript);

		// spawnAction
		const spawnAction = new SpawnActionScript(delayRandomActionScript);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(spawnAction);

		// setVelocityXActionScript
		const setVelocityXActionScript = new SetVelocityXActionScript(spawnAction);

		// emitRandomTickActionScript (components)
		const emitRandomTickActionScriptRandomInArrayComp = new RandomInArrayComp(emitRandomTickActionScript);
		emitRandomTickActionScriptRandomInArrayComp.options = [1000, 2000, 8000, 12000];

		// delayRandomActionScript (components)
		const delayRandomActionScriptRandomBetweenComp = new RandomBetweenComp(delayRandomActionScript);
		delayRandomActionScriptRandomBetweenComp.max = 500;

		// spawnAction (prefab fields)
		spawnAction.objectPrefab = Chick;

		// emitEventActionScript (prefab fields)
		emitEventActionScript.eventName = "spawn-chick";
		emitEventActionScript.eventEmitter = "scene.events";

		// setVelocityXActionScript (components)
		const setVelocityXActionScriptActionTargetComp = new ActionTargetComp(setVelocityXActionScript);
		setVelocityXActionScriptActionTargetComp.target = "ARG_1";
		setVelocityXActionScriptActionTargetComp.targetName = "chick";

		this.setVelocityXActionScript = setVelocityXActionScript;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public setVelocityXActionScript: SetVelocityXActionScript;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
