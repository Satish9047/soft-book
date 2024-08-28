import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(cors());
