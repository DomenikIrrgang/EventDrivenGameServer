import { RouteManager } from "./RouteManager";
import * as Express from "express"

export { FileController } from "./controller/FileController";
export { FeedbackController } from "./controller/FeedbackController";

let express = Express();
let routeManager: RouteManager = new RouteManager();
routeManager.mountRoutes(express);

const server = express.listen(8080, () => {
	console.log("Server is running.");
});