import { TestApp } from "./TestApp";
import { App } from "./core/App";

let app: App = new TestApp();

app.setup(() => {
	console.log("Server is running.");
});