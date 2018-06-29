import { Endpoint } from "./Endpoint";
import { Middleware } from "../middleware/Middleware";

export class Controller {
	path: string;
	middlewares: Middleware[];
	endpoints: Endpoint[];
}