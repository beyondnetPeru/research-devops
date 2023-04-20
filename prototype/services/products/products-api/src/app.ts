import express, { Application, Request, Response } from "express";

const app: Application = express();

const PORT: number = 3002;

app.use("/", (req: Request, res: Response): void => {
  res.send("Listeing products...");
});

app.listen(PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", PORT);
});
