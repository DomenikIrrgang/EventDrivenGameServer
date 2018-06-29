import { Middleware } from "../middleware/Middleware";
import { appRegistry } from "../registries/AppRegistry";
import { Server } from "../routing/Server";

/**
 * Mark a class a server. A server needs to be exported in some file in order to be loaded automatically.
 * 
 * @param path Path under which all routes will be available.
 */
export function AppSettings(options: AppOptions) {
    return (target: any) => {
		target.prototype.plugins = options.plugins;
		target.prototype.middlewares = options.middlewares;
		target.prototype.controllers = options.controllers;
		target.prototype.server = options.server;
        appRegistry.registerItem(target);
    }
}

export interface AppOptions {
	plugins: any[];
	middlewares: Middleware[];
	controllers: any[];
	server: any;
}