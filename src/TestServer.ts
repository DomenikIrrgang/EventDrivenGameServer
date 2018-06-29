import { ServerSettings } from "./decorators/ServerSettings";
import { Server } from "./routing/Server";


@ServerSettings({
	port: 8080
})
export class TestServer extends Server {

}