import { Middleware } from "../middleware/Middleware";
import { HttpMethod } from "../routing/HttpMethod";

export interface EndpointOptions {
	path: string;
	method: HttpMethod;
	middlewares: Middleware[];
}