import 'dotenv/config';
import express, { Express } from 'express';
import { errors } from 'celebrate';
import routes from './routes/task.routes';
import 'reflect-metadata';

class App {
  public server: Express;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errorHandlers();
  }
  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
  errorHandlers() {
    this.server.use(errors());
  }
}

export default new App().server;
