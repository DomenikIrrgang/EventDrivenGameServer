import { Server } from "../routing/Server";
import { Registry } from "./Registry";


class ServerRegistry extends Registry<Server> {
}

export let serverRegistry: ServerRegistry = new ServerRegistry();