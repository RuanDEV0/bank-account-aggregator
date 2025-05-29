import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes.js';
class App {
	constructor() {
		this.server = express();

		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());

		const _filename = fileURLToPath(import.meta.url);
		const _dirname = path.dirname(_filename);
		this.server.use(express.static(path.join(_dirname, '../public')));
	}

	routes() {
		this.server.use(routes);
	}
}

export default new App().server;
