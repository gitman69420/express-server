import express from "express";
import * as dotenv from "dotenv";
import routes from "@src/routes";
import port from "@src/configs/port";

dotenv.config();
const app = express();

// routes
app.use("/", routes);
app.listen(port, () => console.log(`Server has started on port ${port}`));