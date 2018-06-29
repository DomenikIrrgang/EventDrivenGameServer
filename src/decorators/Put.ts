import { checkEndpointsExist, addEndpoint } from "./Util";
import { MethodEndpointOptions } from "../controller/MethodEndpointOptions";
import { Controller } from "../controller/Controller";
import { EndpointOptions } from "../controller/EndpointOptions";
import { HttpMethod } from "../routing/HttpMethod";

/**
 * Marks a function to be mounted as an endpoint for PUT requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Put(options: MethodEndpointOptions) {
    return function (target: Controller, propertyKey: string, descriptor: PropertyDescriptor) {
        checkEndpointsExist(target);
        let endpointOptions: EndpointOptions = {
            method: HttpMethod.PUT,
            middlewares: options.middlewares,
            path: options.path
        }
        addEndpoint(target, endpointOptions, target[propertyKey]);
    }
}