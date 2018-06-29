import { Middleware } from "../middleware/Middleware";

export interface MethodEndpointOptions {
	path: string;
	middlewares: Middleware[];
}