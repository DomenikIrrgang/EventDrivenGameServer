import { Controller } from "../controller/Controller";


class ControllerRegistry {
	private controllers: any[] = [];

	constructor() {}

	public getAllController(): Controller[] {
		return this.controllers;
	}

	public addController(controller: Controller) {
		this.controllers.push(controller);
	}
}

export let controllerRegistry: ControllerRegistry = new ControllerRegistry();