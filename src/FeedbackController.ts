import { Request, Response } from "express";
import { ControllerSettings } from "./decorators/ControllerSettings";
import { Controller } from "./controller/Controller";
import { Get } from "./decorators/Get";
import { ExpressRequest } from "./decorators/Request";
import { Endpoint } from "./decorators/Endpoint";
import { HttpMethod } from "./routing/HttpMethod";

@ControllerSettings({
	path: "feedback",
	middlewares: []
})
export class FeedbackController extends Controller {

	constructor() {
		super();
	}

	@Get({
		middlewares: [],
		path: ":id"
	})
	public getFeedback(@ExpressRequest request: Request, response: Response): void {
		response.send(request.params.id);
	}

	@Endpoint({
		method: HttpMethod.GET,
		middlewares: [],
		path: ""
	})
	public getAllFeedback(request: Request, response: Response): void {
		response.send([
			1,
			2,
			3
		]);
	}
}