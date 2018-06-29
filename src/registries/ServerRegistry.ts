import { Server } from "../routing/Server";


class ServerRegistry {
	private servers: any[] = [];

	constructor() {}

	public getAllServer(): Server[] {
		return this.servers;
	}

	public addServer(server: Server) {
		this.servers.push(server);
	}
}

export let serverRegistry: ServerRegistry = new ServerRegistry();