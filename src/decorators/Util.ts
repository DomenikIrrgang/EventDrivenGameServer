import { Controller } from "../controller/Controller";
import { EndpointOptions } from "../controller/EndpointOptions";

export function addEndpoint(target: any, options: EndpointOptions, callback: string) {
    checkEndpointsExist(target);
    target.__proto__.endpoints.push({
        method: options.method,
        middlewares: options.middlewares,
        path: options.path,
        callback: callback
    })
}

export function checkEndpointsExist(target: any) {
    if (target.__proto__.endpoints === undefined) {
        target.__proto__.endpoints = [];
    }
}