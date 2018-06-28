import { checkRequestCallbackArrayExists, addNewRequestCallback } from "./Util";

/**
 * Marks a function to be mounted as an endpoint for GET requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Get(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
		addNewRequestCallback(target, "get", path, target[propertyKey]);
		console.log("get called");
    }
}