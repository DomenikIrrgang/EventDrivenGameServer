import { App } from "../core/App";
import { Registry } from "./Registry";


class AppRegistry extends Registry<App> {
}

export let appRegistry: AppRegistry = new AppRegistry();