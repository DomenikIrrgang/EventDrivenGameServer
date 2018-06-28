import { Request, Response } from "express";
import { Controller } from "../decorators/Controller";
import { Get } from "../decorators/Get";
import { ExpressRequest } from "../decorators/Request";

@Controller("feedback")
export class FeedbackController {

	constructor() {
		console.log("feedback erstellt");
	}

	@Get(":id")
	public getFeedback(@ExpressRequest request: Request, response: Response): void {
		response.send(request.params.id);
	}

	@Get("")
	public getAllFeedback(request: Request, response: Response): void {
		response.send([
			1,
			2,
			3
		]);
	}
}