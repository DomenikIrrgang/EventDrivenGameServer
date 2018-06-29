import { serverRegistry } from "../registries/ServerRegistry";

/**
 * Mark a class a server. A server needs to be exported in some file in order to be loaded automatically.
 * 
 * @param path Path under which all routes will be available.
 */
export function ServerSettings(options: ServerOptions) {
    return (target: any) => {
		target.prototype.port = options.port;
        serverRegistry.registerItem(target);
    }
}

export interface ServerOptions {
	port: number;
}