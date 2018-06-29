import { AppSettings } from "./decorators/AppSettings";
import { FeedbackController } from "./FeedbackController";
import { App } from "./core/App";
import { TestServer } from "./TestServer";

@AppSettings({
	plugins: [],
	server: TestServer,
	middlewares: [],
	controllers: [
		FeedbackController,
	]
})
export class TestApp extends App {

}