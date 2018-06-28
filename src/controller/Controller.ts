import { controllerManager } from "./ControllerManager";

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

/**
 * Marks a function to be mounted as an endpoint for GET requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Get(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
        addNewRequestCallback(target, "get", path, target[propertyKey]);
    }
}

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

/**
 * Marks a function to be mounted as an endpoint for DELETE requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Delete(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
        addNewRequestCallback(target, "delete", path, target[propertyKey]);
    }
}

/**
 * Marks a function to be mounted as an endpoint for PUT requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Put(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
        addNewRequestCallback(target, "put", path, target[propertyKey]);
    }
}

function addNewRequestCallback(target, method: string, path: string, callback: (request, response) => void) {
    target.requestCallbacks.push({
        method,
        path,
        callback
    })
}

function checkRequestCallbackArrayExists(target) {
    if (target.requestCallbacks === undefined) {
        target.requestCallbacks = [];
    }
}

export interface RequestCallback {
    path: string;
    method: string;
    callback: (request, response) => void;
}