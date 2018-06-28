import { Router, Request, Response } from "express";
import { controllerManager } from "../controller/ControllerManager";
import { RequestCallback } from "../decorators/Util";
import { NextFunction } from "express-serve-static-core";

/**
 * Handles all route related processes.
 * 
 */
export class RouteManager {

	/**
	 * Mounts all controller that have been registered (a controller needs to be exported somewhere in a loaded file in order to be registered).
	 * 
	 * @param router Express Router the routes will be mounted on.
	 */
	public mountRoutes(router: Router): void {
		for (let controller of controllerManager.getAllController()) {
			for (let route of controller.prototype.requestCallbacks) {
				router[route.method]("/" + controller.basePath + "/" + route.path, (request: Request, response: Response, next: NextFunction) => {
					this.handleMiddleware(route, request, response).then(next);
				}, (request: Request, response: Response) => {
					route.callback(request, response);
				});
			}
		}
	}

	private handleMiddleware(route, request: Request, response: Response) {
		return new Promise<void>((resolve, reject) => {
            resolve()
        });
	}
}

class RouteResolver {
	constructor(private route: RequestCallback) {}

	
}