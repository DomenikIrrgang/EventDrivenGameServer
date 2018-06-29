import { Middleware } from "../middleware/Middleware";

export interface Endpoint {
	path: string;
	method: string;
	middlewares: Middleware[];
    callback: string;
}