import { controllerRegistry } from "../registries/ControllerRegistry";

/**
 * Mark a class a controller. A controller needs to be exported in some file in order to be loaded automatically.
 * 
 * @param path Path under which all routes will be available.
 */
export function ControllerSettings(options: ControllerOptions) {
    return (target: any) => {
        target.path = options.path;
        target.middlewares = options.middlewares;
        controllerRegistry.addController(target);
    }
}

export interface ControllerOptions {
    path: string,
    middlewares: any[]
}