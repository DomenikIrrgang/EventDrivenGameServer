import { checkRequestCallbackArrayExists, addNewRequestCallback } from "./Util";

/**
 * Marks a function to be mounted as an endpoint for POST requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Post(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
		addNewRequestCallback(target, "post", path, target[propertyKey]);
    }
}