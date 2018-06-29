import { Controller } from "../controller/Controller";
import { EndpointOptions } from "../controller/EndpointOptions";

export function addEndpoint(target: Controller, options: EndpointOptions, callback: Function) {
    target.endpoints.push({
        method: options.method,
        middlewares: options.middlewares,
        path: options.path,
        callback: callback
    })
}

export function checkEndpointsExist(target: Controller) {
    if (target.endpoints === undefined) {
        target.endpoints = [];
    }
}