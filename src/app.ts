import dotenv from "dotenv";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();
const port = process.env.SERVER_PORT;

const app: express.Application = express();

app.use(bodyParser.json());

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // render the index template
  res.render("index");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server up and ready!\nServer on port ${port}`);
});
