import { controllerManager } from "./ControllerManager";

export function Controller(path: string) {
    return (target: any) => {
        target.basePath = path;
        target.isController = true;
        controllerManager.addController(target);
    }
}

export function Get(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
        addNewRequestCallback(target, "get", path, target[propertyKey]);
    }
}

export function Post(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
        addNewRequestCallback(target, "post", path, target[propertyKey]);
    }
}

export function Delete(path: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        checkRequestCallbackArrayExists(target);
        addNewRequestCallback(target, "delete", path, target[propertyKey]);
    }
}

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