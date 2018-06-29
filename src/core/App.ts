import { Controller } from "../controller/Controller";
import { Middleware } from "../middleware/Middleware";
import { Server } from "../routing/Server";
import { routeRegistry } from "../registries/RouteRegistry";
import * as Express from "express"

export class App {
	plugins: any[];
	middleware: Middleware[] = [];
	controllers: Controller[] = [];
	server: Server;

	public setup(): void {
		let express = Express();
		routeRegistry.mountRoutes(express);
		const server = express.listen(this.constructor["server"].port, () => {
			console.log("Server is running.");
		});
	}
}