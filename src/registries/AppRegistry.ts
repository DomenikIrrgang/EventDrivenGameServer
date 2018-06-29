import { App } from "../core/App";


class AppRegistry {
	private apps: App[] = [];

	constructor() {}

	public getAllAps(): App[] {
		return this.apps;
	}

	public addApp(app: App) {
		this.apps.push(app);
	}
}

export let appRegistry: AppRegistry = new AppRegistry();