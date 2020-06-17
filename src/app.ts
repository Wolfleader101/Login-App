import dotenv from "dotenv";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();
const port = process.env.SERVER_PORT;

const app: express.Application = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/www"));

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server up and ready!\nServer on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile("www/index.html", { root: __dirname });
});
