import { Controller } from "../controller/Controller";
import { Middleware } from "../middleware/Middleware";
import { Server } from "../routing/Server";
import { routeRegistry } from "../registries/RouteRegistry";
import * as Express from "express"
import { injector } from "../injection/Injector";

export class App {
	plugins: any[];
	middleware: Middleware[];
	controllers: Controller[];
	server: Server;

	public setup(callback: Function): void {
		let express = Express();
		let server = injector.getInstance(this.server);
		routeRegistry.mountRoutes(express);
		express.listen(server.port, callback);
	}
}