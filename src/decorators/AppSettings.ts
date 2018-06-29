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
		target.plugins = options.plugins;
		target.middlewares = options.middlewares;
		target.controllers = options.controllers;
		target.server = options.server;
        appRegistry.addApp(target);
    }
}

export interface AppOptions {
	plugins: any[];
	middlewares: Middleware[];
	controllers: any[];
	server: any;
}