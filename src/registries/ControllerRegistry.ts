import { Controller } from "../controller/Controller";
import { Registry } from "./Registry";


class ControllerRegistry extends Registry<Controller> {

}

export let controllerRegistry: ControllerRegistry = new ControllerRegistry();