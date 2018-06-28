import { controllerManager } from "../controller/ControllerManager";

/**
 * Mark a class a controller. A controller needs to be exported in some file in order to be loaded automatically.
 * 
 * @param path Path under which all routes will be available.
 */
export function Controller(path: string) {
    return (target: any) => {
        target.basePath = path;
        target.isController = true;
        controllerManager.addController(target);
    }
}