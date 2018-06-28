class ControllerManager {
	private controllers: any[] = [];

	constructor() {}

	public getAllController(): any[] {
		return this.controllers;
	}

	public addController(controller: any) {
		this.controllers.push(controller);
	}
}

export let controllerManager: ControllerManager = new ControllerManager();