import { Router } from "express";
import { controllerManager } from "./controller/ControllerManager";

/**
 * Handles all route related processes.
 * 
 */
export class RouteManager {

	/**
	 * Mounts all controller that have been registered (a controller needs to be exported somewhere in a loaded file in order to be registered).
	 * 
	 * @param router Exress Router the routes will be mounted on.
	 */
	public mountRoutes(router: Router): void {
		for (let controller of controllerManager.getAllController()) {
			for (let route of controller.prototype.requestCallbacks) {
				router[route.method]("/" + controller.basePath + "/" + route.path, route.callback);
			}
		}
	}
}