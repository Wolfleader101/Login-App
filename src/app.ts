import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3302;

app.use(bodyParser.json());

app.listen(`${port}`);

// tslint:disable-next-line:no-console
console.log(`Server up and ready!\nServer on port ${port}`);

app.get("/", (req, res) => {
  res.send("Reply from server");
});
