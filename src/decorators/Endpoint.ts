import { EndpointOptions } from "../controller/EndpointOptions";
import { Controller } from "../controller/Controller";
import { checkEndpointsExist, addEndpoint } from "./Util";

/**
 * Marks a function to be mounted as an endpoint for DELETE requests.
 * 
 * @param path Path under which the endpoint will be mounted. (ControllerPath + "/" + path)
 */
export function Endpoint(options: EndpointOptions) {
    return function (target: Controller, propertyKey: string, descriptor: PropertyDescriptor) {
        addEndpoint(target, options, propertyKey);
    }
}