import { App } from "./app";

try {
  const app = new App();
  const port: number = 3001;

  app.createExpressServer(port);
} catch (error) {
  console.error(error);
}
