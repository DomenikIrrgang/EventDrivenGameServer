import { controllerRegistry } from "../registries/ControllerRegistry";
import { Controller } from "../controller/Controller";

/**
 * Mark a class a controller. A controller needs to be exported in some file in order to be loaded automatically.
 * 
 * @param path Path under which all routes will be available.
 */
export function ControllerSettings(options: ControllerOptions) {
    return (target: any) => {
        target.prototype.path = options.path;
        target.prototype.middlewares = options.middlewares;
        controllerRegistry.registerItem(target);
    }
}

export interface ControllerOptions {
    path: string,
    middlewares: any[]
}