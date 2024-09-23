
// You can write more code here

/* START OF COMPILED CODE */

import { OnAwakeScript } from "@phaserjs/editor-scripts-quick";
import { EmitRandomTickActionScript } from "@phaserjs/editor-scripts-quick";
import { RandomInArrayComp } from "@phaserjs/editor-scripts-quick";
import { SpawnActionScript } from "@phaserjs/editor-scripts-quick";
import { EmitEventActionScript } from "@phaserjs/editor-scripts-quick";
import { ExecRandomActionScript } from "@phaserjs/editor-scripts-quick";
import { ExecChildrenActionScript } from "@phaserjs/editor-scripts-quick";
import { SetVelocityXActionScript } from "@phaserjs/editor-scripts-quick";
import { ActionTargetComp } from "@phaserjs/editor-scripts-base";
import { SetXActionScript } from "@phaserjs/editor-scripts-quick";
import { SetRandomYActionScript } from "@phaserjs/editor-scripts-quick";
import { RandomBetweenComp } from "@phaserjs/editor-scripts-quick";
/* START-USER-IMPORTS */
import Bomb from "./Bomb";
/* END-USER-IMPORTS */

export default class BombSpawner extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 145, y ?? 120, texture || "atlas", frame ?? "bomb1.png");

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// emitRandomTickActionScript
		const emitRandomTickActionScript = new EmitRandomTickActionScript(onAwakeScript);

		// spawnActionScript
		const spawnActionScript = new SpawnActionScript(emitRandomTickActionScript);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(spawnActionScript);

		// execRandomActionScript
		const execRandomActionScript = new ExecRandomActionScript(spawnActionScript);

		// execChildrenActionScript
		const execChildrenActionScript = new ExecChildrenActionScript(execRandomActionScript);

		// setVelocityXActionScript
		const setVelocityXActionScript = new SetVelocityXActionScript(execChildrenActionScript);

		// setXActionScript_1
		const setXActionScript_1 = new SetXActionScript(execChildrenActionScript);

		// execChildrenActionScript_1
		const execChildrenActionScript_1 = new ExecChildrenActionScript(execRandomActionScript);

		// setVelocityXActionScript_1
		const setVelocityXActionScript_1 = new SetVelocityXActionScript(execChildrenActionScript_1);

		// setXActionScript
		const setXActionScript = new SetXActionScript(execChildrenActionScript_1);

		// setRandomYActionScript
		const setRandomYActionScript = new SetRandomYActionScript(spawnActionScript);

		// emitRandomTickActionScript (components)
		const emitRandomTickActionScriptRandomInArrayComp = new RandomInArrayComp(emitRandomTickActionScript);
		emitRandomTickActionScriptRandomInArrayComp.options = [10000, 15000];

		// spawnActionScript (prefab fields)
		spawnActionScript.objectPrefab = Bomb;
		spawnActionScript.spawnInParentPosition = false;

		// emitEventActionScript (prefab fields)
		emitEventActionScript.eventName = "spawn-bomb";
		emitEventActionScript.eventEmitter = "scene.events";

		// setVelocityXActionScript (prefab fields)
		setVelocityXActionScript.velocityX = 80;

		// setVelocityXActionScript (components)
		const setVelocityXActionScriptActionTargetComp = new ActionTargetComp(setVelocityXActionScript);
		setVelocityXActionScriptActionTargetComp.target = "ARG_1";
		setVelocityXActionScriptActionTargetComp.targetName = "bomb";

		// setXActionScript_1 (prefab fields)
		setXActionScript_1.x = -32;

		// setXActionScript_1 (components)
		const setXActionScript_1ActionTargetComp = new ActionTargetComp(setXActionScript_1);
		setXActionScript_1ActionTargetComp.target = "ARG_1";
		setXActionScript_1ActionTargetComp.targetName = "bomb";

		// setVelocityXActionScript_1 (prefab fields)
		setVelocityXActionScript_1.velocityX = -80;

		// setVelocityXActionScript_1 (components)
		const setVelocityXActionScript_1ActionTargetComp = new ActionTargetComp(setVelocityXActionScript_1);
		setVelocityXActionScript_1ActionTargetComp.target = "ARG_1";
		setVelocityXActionScript_1ActionTargetComp.targetName = "bomb";

		// setXActionScript (prefab fields)
		setXActionScript.x = 400;

		// setXActionScript (components)
		const setXActionScriptActionTargetComp = new ActionTargetComp(setXActionScript);
		setXActionScriptActionTargetComp.target = "ARG_1";
		setXActionScriptActionTargetComp.targetName = "bomb";

		// setRandomYActionScript (components)
		const setRandomYActionScriptActionTargetComp = new ActionTargetComp(setRandomYActionScript);
		setRandomYActionScriptActionTargetComp.target = "ARG_1";
		setRandomYActionScriptActionTargetComp.targetName = "bomb";
		const setRandomYActionScriptRandomBetweenComp = new RandomBetweenComp(setRandomYActionScript);
		setRandomYActionScriptRandomBetweenComp.min = 50;
		setRandomYActionScriptRandomBetweenComp.max = 170;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
