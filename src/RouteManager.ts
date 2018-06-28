import { Router } from "express";
import { controllerManager } from "./controller/ControllerManager";

export class RouteManager {
	public mountRoutes(router: Router): void {
		for (let controller of controllerManager.getAllController()) {
			for (let route of controller.prototype.requestCallbacks) {
				router[route.method]("/" + controller.basePath + "/" + route.path, route.callback);
			}
		}
	}
}