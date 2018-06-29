import { Router, Request, Response } from "express";
import { controllerRegistry } from "../registries/ControllerRegistry";
import { NextFunction } from "express-serve-static-core";
import { Endpoint } from "../controller/Endpoint";
import { injector } from "../injection/Injector";

/**
 * Handles all route related processes.
 * 
 */
class RouteRegistry {

	/**
	 * Mounts all controller that have been registered (a controller needs to be exported somewhere in a loaded file in order to be registered).
	 * 
	 * @param router Express Router the routes will be mounted on.
	 */
	public mountRoutes(router: Router): void {
		for (let controllerDefinition of controllerRegistry.getRegisteredItems()) {
			let controller = injector.getInstance(controllerDefinition);
			for (let endpoint of controller.endpoints) {
				router[endpoint.method]("/" + controller.path + "/" + endpoint.path, (request: Request, response: Response, next: NextFunction) => {
					this.handleMiddleware(endpoint, request, response).then(next);
				}, (request: Request, response: Response) => {
					controller[endpoint.callback](request, response);
				});
			}
		}
	}

	private handleMiddleware(endpoint: Endpoint, request: Request, response: Response) {
		return new Promise<void>((resolve, reject) => {
            resolve()
        });
	}
}

export let routeRegistry: RouteRegistry = new RouteRegistry();