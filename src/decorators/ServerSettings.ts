import { serverRegistry } from "../registries/ServerRegistry";
import { Middleware } from "../middleware/Middleware";
import { Controller } from "../controller/Controller";

/**
 * Mark a class a server. A server needs to be exported in some file in order to be loaded automatically.
 * 
 * @param path Path under which all routes will be available.
 */
export function ServerSettings(options: ServerOptions) {
    return (target: any) => {
		target.port = options.port;
        serverRegistry.addServer(target);
    }
}

export interface ServerOptions {
	port: number;
}