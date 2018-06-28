import { Request, Response } from "express";
import { Controller } from "../decorators/Controller";
import { Get } from "../decorators/Get";

@Controller("file")
export class FileController {

	@Get(":id")
	public getFile(request: Request, response: Response): void {
		response.send(request.params.id);
	}

	@Get("")
	public getAllFiles(request: Request, response: Response): void {
		response.send([
			"readme.txt",
			"ihavenoideawhatiamdoing.exe",
			"maybethisworks.jar"
		]);
	}
}