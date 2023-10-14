import express from "express";
import aboutRoutes from "@src/routes/about";

const app = express();
app.use(`/about`, aboutRoutes);

export default app;