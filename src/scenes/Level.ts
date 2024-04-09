
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { MakeObjectColliderActionScript } from "@phaserjs/editor-scripts-arcade";
import { DestroyActionScript } from "@phaserjs/editor-scripts-core";
import { ActionTargetComp } from "@phaserjs/editor-scripts-core";
import { ConsoleLogActionScript } from "@phaserjs/editor-scripts-core";
import RightChickSpawner from "./RightChickSpawner";
import LeftChickSpawner from "./LeftChickSpawner";
import BombSpawner from "./BombSpawner";
import { OnEventScript } from "@phaserjs/editor-scripts-core";
import { SpawnActionScript } from "@phaserjs/editor-scripts-core";
import { IfBodyTouchingScript } from "@phaserjs/editor-scripts-arcade";
import { EmitEventActionScript } from "@phaserjs/editor-scripts-core";
import { PlaySoundActionScript } from "@phaserjs/editor-scripts-audio";
import { SetVelocityYActionScript } from "@phaserjs/editor-scripts-arcade";
import { SetBodyEnableActionScript } from "@phaserjs/editor-scripts-arcade";
import { PlaySpriteAnimationActionScript } from "@phaserjs/editor-scripts-core";
import { AddToParentActionScript } from "@phaserjs/editor-scripts-core";
import { SetYActionScript } from "@phaserjs/editor-scripts-core";
import { AssignOpComp } from "@phaserjs/editor-scripts-core";
import { OnWorldBoundsCollideEventScript } from "@phaserjs/editor-scripts-arcade";
import { GetGameObjectFromBodyActionScript } from "@phaserjs/editor-scripts-arcade";
import { AudioLoopConfigComp } from "@phaserjs/editor-scripts-audio";
/* START-USER-IMPORTS */
import Chicken from "./Chicken";
import DeadChicken from "./DeadChicken";
import Egg from "./Egg";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bg_png
		const bg_png = this.add.tileSprite(0, 0, 384, 240, "atlas", "bg.png");
		bg_png.setOrigin(0, 0);

		// destroyBars
		const destroyBars = this.add.container(0, 0);

		// destroyBar2
		const destroyBar2 = this.add.rectangle(-139, -31, 38, 285) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		destroyBar2.setOrigin(0, 0);
		this.physics.add.existing(destroyBar2, false);
		destroyBar2.body.moves = false;
		destroyBar2.body.setSize(38, 285, false);
		destroyBar2.isFilled = true;
		destroyBars.add(destroyBar2);

		// destroyBar1
		const destroyBar1 = this.add.rectangle(496, -31, 38, 285) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		destroyBar1.setOrigin(0, 0);
		this.physics.add.existing(destroyBar1, false);
		destroyBar1.body.moves = false;
		destroyBar1.body.setSize(38, 285, false);
		destroyBar1.isFilled = true;
		destroyBars.add(destroyBar1);

		// onAwakeScript_2
		const onAwakeScript_2 = new OnAwakeScript(destroyBars);

		// makeObjectColliderActionScript_3
		const makeObjectColliderActionScript_3 = new MakeObjectColliderActionScript(onAwakeScript_2);

		// destroyActionScript_4
		const destroyActionScript_4 = new DestroyActionScript(makeObjectColliderActionScript_3);

		// consoleLogActionScript
		const consoleLogActionScript = new ConsoleLogActionScript(makeObjectColliderActionScript_3);

		// bombs
		const bombs = this.add.container(0, 0);

		// eggs
		const eggs = this.add.container(0, 0);

		// chicks
		const chicks = this.add.container(0, 0);

		// chickSpawner
		const chickSpawner = new RightChickSpawner(this, 445, 192);
		this.add.existing(chickSpawner);

		// chickSpawner_1
		const chickSpawner_1 = new LeftChickSpawner(this, -59, 192);
		this.add.existing(chickSpawner_1);

		// chickSpawner_2
		const chickSpawner_2 = new LeftChickSpawner(this, -59, 48);
		this.add.existing(chickSpawner_2);

		// chickSpawner_3
		const chickSpawner_3 = new RightChickSpawner(this, 445, 48);
		this.add.existing(chickSpawner_3);

		// chickSpawner_4
		const chickSpawner_4 = new LeftChickSpawner(this, -59, 96);
		this.add.existing(chickSpawner_4);

		// chickSpawner_5
		const chickSpawner_5 = new RightChickSpawner(this, 445, 96);
		this.add.existing(chickSpawner_5);

		// chickSpawner_6
		const chickSpawner_6 = new RightChickSpawner(this, 445, 144);
		this.add.existing(chickSpawner_6);

		// chickSpawner_7
		const chickSpawner_7 = new LeftChickSpawner(this, -59, 144);
		this.add.existing(chickSpawner_7);

		// bombSpawner
		const bombSpawner = new BombSpawner(this, 113, -24);
		this.add.existing(bombSpawner);

		// chickenSpawner
		const chickenSpawner = this.add.image(180, -25, "atlas", "chicken1.png");

		// onEventScript_1
		const onEventScript_1 = new OnEventScript(chickenSpawner);

		// spawnActionScript
		const spawnActionScript = new SpawnActionScript(onEventScript_1);

		// makeObjectColliderActionScript
		const makeObjectColliderActionScript = new MakeObjectColliderActionScript(spawnActionScript);

		// bodyTouchingFilterScript
		const bodyTouchingFilterScript = new IfBodyTouchingScript(makeObjectColliderActionScript);

		// emitEventActionScript_2
		const emitEventActionScript_2 = new EmitEventActionScript(bodyTouchingFilterScript.elseActions);

		// playSoundActionScript_1
		const playSoundActionScript_1 = new PlaySoundActionScript(bodyTouchingFilterScript.thenActions);

		// setVelocityYActionScript_2
		const setVelocityYActionScript_2 = new SetVelocityYActionScript(bodyTouchingFilterScript.thenActions);

		// setBodyEnableActionScript_2
		const setBodyEnableActionScript_2 = new SetBodyEnableActionScript(bodyTouchingFilterScript.thenActions);

		// playSpriteAnimationActionScript_2
		const playSpriteAnimationActionScript_2 = new PlaySpriteAnimationActionScript(bodyTouchingFilterScript.thenActions);

		// destroyActionScript_1
		const destroyActionScript_1 = new DestroyActionScript(playSpriteAnimationActionScript_2);

		// spawnActionScript_2
		const spawnActionScript_2 = new SpawnActionScript(bodyTouchingFilterScript.thenActions);

		// addToParentActionScript_1
		const addToParentActionScript_1 = new AddToParentActionScript(spawnActionScript_2);

		// setYActionScript
		const setYActionScript = new SetYActionScript(spawnActionScript_2);

		// makeObjectColliderActionScript_1
		const makeObjectColliderActionScript_1 = new MakeObjectColliderActionScript(spawnActionScript);

		// playSpriteAnimationActionScript
		const playSpriteAnimationActionScript = new PlaySpriteAnimationActionScript(makeObjectColliderActionScript_1);

		// destroyActionScript_2
		const destroyActionScript_2 = new DestroyActionScript(playSpriteAnimationActionScript);

		// setBodyEnableActionScript
		const setBodyEnableActionScript = new SetBodyEnableActionScript(makeObjectColliderActionScript_1);

		// playSoundActionScript_2
		const playSoundActionScript_2 = new PlaySoundActionScript(makeObjectColliderActionScript_1);

		// makeObjectColliderActionScript_2
		const makeObjectColliderActionScript_2 = new MakeObjectColliderActionScript(spawnActionScript);

		// emitEventActionScript_3
		const emitEventActionScript_3 = new EmitEventActionScript(makeObjectColliderActionScript_2);

		// playSpriteAnimationActionScript_1
		const playSpriteAnimationActionScript_1 = new PlaySpriteAnimationActionScript(makeObjectColliderActionScript_2);

		// destroyActionScript
		const destroyActionScript = new DestroyActionScript(playSpriteAnimationActionScript_1);

		// setBodyEnableActionScript_1
		const setBodyEnableActionScript_1 = new SetBodyEnableActionScript(makeObjectColliderActionScript_2);

		// onWorldBoundsCollideEventScript_1
		const onWorldBoundsCollideEventScript_1 = new OnWorldBoundsCollideEventScript(this);

		// getGameObjectFromBodyActionScript
		const getGameObjectFromBodyActionScript = new GetGameObjectFromBodyActionScript(onWorldBoundsCollideEventScript_1);

		// setVelocityYActionScript_3
		const setVelocityYActionScript_3 = new SetVelocityYActionScript(getGameObjectFromBodyActionScript);

		// onEventScript_3
		const onEventScript_3 = new OnEventScript(this);

		// emitEventActionScript_4
		const emitEventActionScript_4 = new EmitEventActionScript(onEventScript_3);

		// spawnActionScript_3
		const spawnActionScript_3 = new SpawnActionScript(onEventScript_3);

		// destroyActionScript_3
		const destroyActionScript_3 = new DestroyActionScript(onEventScript_3);

		// onEventScript
		const onEventScript = new OnEventScript(this);

		// addToParentActionScript
		const addToParentActionScript = new AddToParentActionScript(onEventScript);

		// onEventScript_2
		const onEventScript_2 = new OnEventScript(this);

		// addToParentActionScript_2
		const addToParentActionScript_2 = new AddToParentActionScript(onEventScript_2);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// emitEventActionScript_1
		const emitEventActionScript_1 = new EmitEventActionScript(onAwakeScript);

		// playSoundActionScript
		const playSoundActionScript = new PlaySoundActionScript(onAwakeScript);

		// collider
		this.physics.add.collider(chicks.list, chicks.list);

		// makeObjectColliderActionScript_3 (prefab fields)
		makeObjectColliderActionScript_3.collideWith = chicks;

		// destroyActionScript_4 (components)
		const destroyActionScript_4ActionTargetComp = new ActionTargetComp(destroyActionScript_4);
		destroyActionScript_4ActionTargetComp.target = "ARG_2";
		destroyActionScript_4ActionTargetComp.targetName = "chick";

		// consoleLogActionScript (prefab fields)
		consoleLogActionScript.message = "destroy chick";

		// onEventScript_1 (prefab fields)
		onEventScript_1.eventName = "spawn-chicken";
		onEventScript_1.eventEmitter = "scene.events";

		// spawnActionScript (prefab fields)
		spawnActionScript.objectPrefab = Chicken;

		// makeObjectColliderActionScript (prefab fields)
		makeObjectColliderActionScript.collideWith = chicks;
		makeObjectColliderActionScript.overlapOnly = true;

		// makeObjectColliderActionScript (components)
		const makeObjectColliderActionScriptActionTargetComp = new ActionTargetComp(makeObjectColliderActionScript);
		makeObjectColliderActionScriptActionTargetComp.target = "ARG_1";
		makeObjectColliderActionScriptActionTargetComp.targetName = "player";

		// bodyTouchingFilterScript (prefab fields)
		bodyTouchingFilterScript.down = true;

		// bodyTouchingFilterScript (components)
		const bodyTouchingFilterScriptActionTargetComp = new ActionTargetComp(bodyTouchingFilterScript);
		bodyTouchingFilterScriptActionTargetComp.target = "ARG_1";
		bodyTouchingFilterScriptActionTargetComp.targetName = "player";

		// emitEventActionScript_2 (prefab fields)
		emitEventActionScript_2.eventName = "kill-chicken";
		emitEventActionScript_2.eventEmitter = "scene.events";

		// playSoundActionScript_1 (prefab fields)
		playSoundActionScript_1.audioKey = "pop_egg";

		// setVelocityYActionScript_2 (prefab fields)
		setVelocityYActionScript_2.velocityY = -80;

		// setVelocityYActionScript_2 (components)
		const setVelocityYActionScript_2ActionTargetComp = new ActionTargetComp(setVelocityYActionScript_2);
		setVelocityYActionScript_2ActionTargetComp.target = "ARG_1";
		setVelocityYActionScript_2ActionTargetComp.targetName = "player";

		// setBodyEnableActionScript_2 (components)
		const setBodyEnableActionScript_2ActionTargetComp = new ActionTargetComp(setBodyEnableActionScript_2);
		setBodyEnableActionScript_2ActionTargetComp.target = "ARG_2";
		setBodyEnableActionScript_2ActionTargetComp.targetName = "chick";

		// playSpriteAnimationActionScript_2 (prefab fields)
		playSpriteAnimationActionScript_2.animationKey = "explosion";
		playSpriteAnimationActionScript_2.ignoreIfPlaying = true;

		// playSpriteAnimationActionScript_2 (components)
		const playSpriteAnimationActionScript_2ActionTargetComp = new ActionTargetComp(playSpriteAnimationActionScript_2);
		playSpriteAnimationActionScript_2ActionTargetComp.target = "ARG_2";
		playSpriteAnimationActionScript_2ActionTargetComp.targetName = "chick";

		// destroyActionScript_1 (components)
		const destroyActionScript_1ActionTargetComp = new ActionTargetComp(destroyActionScript_1);
		destroyActionScript_1ActionTargetComp.target = "ARG_2";
		destroyActionScript_1ActionTargetComp.targetName = "chick";

		// spawnActionScript_2 (prefab fields)
		spawnActionScript_2.objectPrefab = Egg;

		// spawnActionScript_2 (components)
		const spawnActionScript_2ActionTargetComp = new ActionTargetComp(spawnActionScript_2);
		spawnActionScript_2ActionTargetComp.target = "ARG_2";
		spawnActionScript_2ActionTargetComp.targetName = "chick";

		// addToParentActionScript_1 (prefab fields)
		addToParentActionScript_1.parentContainer = eggs;

		// addToParentActionScript_1 (components)
		const addToParentActionScript_1ActionTargetComp = new ActionTargetComp(addToParentActionScript_1);
		addToParentActionScript_1ActionTargetComp.target = "ARG_1";
		addToParentActionScript_1ActionTargetComp.targetName = "egg";

		// setYActionScript (prefab fields)
		setYActionScript.y = 8;

		// setYActionScript (components)
		const setYActionScriptAssignOpComp = new AssignOpComp(setYActionScript);
		setYActionScriptAssignOpComp.operator = "+=";
		const setYActionScriptActionTargetComp = new ActionTargetComp(setYActionScript);
		setYActionScriptActionTargetComp.target = "ARG_1";

		// makeObjectColliderActionScript_1 (prefab fields)
		makeObjectColliderActionScript_1.collideWith = eggs;
		makeObjectColliderActionScript_1.overlapOnly = true;

		// makeObjectColliderActionScript_1 (components)
		const makeObjectColliderActionScript_1ActionTargetComp = new ActionTargetComp(makeObjectColliderActionScript_1);
		makeObjectColliderActionScript_1ActionTargetComp.target = "ARG_1";
		makeObjectColliderActionScript_1ActionTargetComp.targetName = "player";

		// playSpriteAnimationActionScript (prefab fields)
		playSpriteAnimationActionScript.animationKey = "explosion";

		// playSpriteAnimationActionScript (components)
		const playSpriteAnimationActionScriptActionTargetComp = new ActionTargetComp(playSpriteAnimationActionScript);
		playSpriteAnimationActionScriptActionTargetComp.target = "ARG_2";
		playSpriteAnimationActionScriptActionTargetComp.targetName = "egg";

		// destroyActionScript_2 (components)
		const destroyActionScript_2ActionTargetComp = new ActionTargetComp(destroyActionScript_2);
		destroyActionScript_2ActionTargetComp.target = "ARG_2";
		destroyActionScript_2ActionTargetComp.targetName = "egg";

		// setBodyEnableActionScript (components)
		const setBodyEnableActionScriptActionTargetComp = new ActionTargetComp(setBodyEnableActionScript);
		setBodyEnableActionScriptActionTargetComp.target = "ARG_2";
		setBodyEnableActionScriptActionTargetComp.targetName = "egg";

		// playSoundActionScript_2 (prefab fields)
		playSoundActionScript_2.audioKey = "egg";

		// makeObjectColliderActionScript_2 (prefab fields)
		makeObjectColliderActionScript_2.collideWith = bombs;

		// makeObjectColliderActionScript_2 (components)
		const makeObjectColliderActionScript_2ActionTargetComp = new ActionTargetComp(makeObjectColliderActionScript_2);
		makeObjectColliderActionScript_2ActionTargetComp.target = "ARG_1";
		makeObjectColliderActionScript_2ActionTargetComp.targetName = "player";

		// emitEventActionScript_3 (prefab fields)
		emitEventActionScript_3.eventName = "kill-chicken";
		emitEventActionScript_3.eventEmitter = "scene.events";

		// playSpriteAnimationActionScript_1 (prefab fields)
		playSpriteAnimationActionScript_1.animationKey = "bomb-explosion";
		playSpriteAnimationActionScript_1.ignoreIfPlaying = false;

		// playSpriteAnimationActionScript_1 (components)
		const playSpriteAnimationActionScript_1ActionTargetComp = new ActionTargetComp(playSpriteAnimationActionScript_1);
		playSpriteAnimationActionScript_1ActionTargetComp.target = "ARG_2";
		playSpriteAnimationActionScript_1ActionTargetComp.targetName = "bomb";

		// destroyActionScript (components)
		const destroyActionScriptActionTargetComp = new ActionTargetComp(destroyActionScript);
		destroyActionScriptActionTargetComp.target = "ARG_2";
		destroyActionScriptActionTargetComp.targetName = "bomb";

		// setBodyEnableActionScript_1 (components)
		const setBodyEnableActionScript_1ActionTargetComp = new ActionTargetComp(setBodyEnableActionScript_1);
		setBodyEnableActionScript_1ActionTargetComp.target = "ARG_2";
		setBodyEnableActionScript_1ActionTargetComp.targetName = "bomb";

		// onWorldBoundsCollideEventScript_1 (prefab fields)
		onWorldBoundsCollideEventScript_1.up = false;
		onWorldBoundsCollideEventScript_1.down = true;
		onWorldBoundsCollideEventScript_1.left = false;
		onWorldBoundsCollideEventScript_1.right = false;

		// setVelocityYActionScript_3 (prefab fields)
		setVelocityYActionScript_3.velocityY = -80;

		// setVelocityYActionScript_3 (components)
		const setVelocityYActionScript_3ActionTargetComp = new ActionTargetComp(setVelocityYActionScript_3);
		setVelocityYActionScript_3ActionTargetComp.target = "ARG_1";

		// onEventScript_3 (prefab fields)
		onEventScript_3.eventName = "kill-chicken";
		onEventScript_3.eventEmitter = "scene.events";

		// emitEventActionScript_4 (prefab fields)
		emitEventActionScript_4.eventName = "spawn-chicken";
		emitEventActionScript_4.eventEmitter = "scene.events";

		// spawnActionScript_3 (prefab fields)
		spawnActionScript_3.objectPrefab = DeadChicken;

		// spawnActionScript_3 (components)
		const spawnActionScript_3ActionTargetComp = new ActionTargetComp(spawnActionScript_3);
		spawnActionScript_3ActionTargetComp.target = "ARG_1";
		spawnActionScript_3ActionTargetComp.targetName = "player";

		// destroyActionScript_3 (components)
		const destroyActionScript_3ActionTargetComp = new ActionTargetComp(destroyActionScript_3);
		destroyActionScript_3ActionTargetComp.target = "ARG_1";
		destroyActionScript_3ActionTargetComp.targetName = "player";

		// onEventScript (prefab fields)
		onEventScript.eventName = "spawn-chick";
		onEventScript.eventEmitter = "scene.events";

		// addToParentActionScript (prefab fields)
		addToParentActionScript.parentContainer = chicks;

		// addToParentActionScript (components)
		const addToParentActionScriptActionTargetComp = new ActionTargetComp(addToParentActionScript);
		addToParentActionScriptActionTargetComp.target = "ARG_1";
		addToParentActionScriptActionTargetComp.targetName = "chick";

		// onEventScript_2 (prefab fields)
		onEventScript_2.eventName = "spawn-bomb";
		onEventScript_2.eventEmitter = "scene.events";

		// addToParentActionScript_2 (prefab fields)
		addToParentActionScript_2.parentContainer = bombs;

		// addToParentActionScript_2 (components)
		const addToParentActionScript_2ActionTargetComp = new ActionTargetComp(addToParentActionScript_2);
		addToParentActionScript_2ActionTargetComp.target = "ARG_1";
		addToParentActionScript_2ActionTargetComp.targetName = "bomb";

		// emitEventActionScript_1 (prefab fields)
		emitEventActionScript_1.eventName = "spawn-chicken";
		emitEventActionScript_1.eventEmitter = "scene.events";

		// playSoundActionScript (prefab fields)
		playSoundActionScript.audioKey = "flappy_chicken";

		// playSoundActionScript (components)
		new AudioLoopConfigComp(playSoundActionScript);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
