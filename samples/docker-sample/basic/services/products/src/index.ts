import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3005, () => {
  console.log("PRODUCTS-SERVICE: Listening on port 3005!");
});
