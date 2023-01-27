import "reflect-metadata";
import express from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import { routingControllerOptions } from "./configs/RoutingConfig";
import bodyParser from "body-parser";
import Container from "typedi";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setDatabase();
    this.setMiddlewares();
  }

  private setDatabase() {}

  private setMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded());
  }

  public async createExpressServer(port: number) {
    try {
      useContainer(Container);
      useExpressServer(this.app, routingControllerOptions);

      this.app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
