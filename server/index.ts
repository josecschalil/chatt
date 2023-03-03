import logger from "./utils/logger";
import express, { Request, Response, Express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import next from "next";
import socket from "./socket";

const port = 3000
const nextApp = next({dev: true});
const handle = nextApp.getRequestHandler();

 nextApp.prepare().then(() => {
  const app: Express = express();
  const httpServer = createServer(app)
  const io = new Server(httpServer)
  app.get("/test", (req: Request, res: Response) => {
    res.send("OK!");
  });
  app.get("*", (req, res) => {
    return handle(req, res);
  });
  httpServer.listen(port, () => {
    logger.info(`🚀 Server is listening port ${port}🚀`)
    socket({io})
  });
});
