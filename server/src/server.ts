import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect("mongodb+srv://pedrolages:P1t0.R3sco@pitorescodev-ydxsn.gcp.mongodb.net/PitorescoDev?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connected!"));

app.listen(3333);

console.log("running app on 3333.");
