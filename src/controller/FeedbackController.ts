import { Controller, Get } from "./Controller";
import { Request, Response } from "express";

@Controller("feedback")
export class FeedbackController {

	@Get(":id")
	public getFeedback(request: Request, response: Response): void {
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