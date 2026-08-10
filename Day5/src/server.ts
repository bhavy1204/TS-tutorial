import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "devlopment",
};

app.listen(config.port, () => {
  console.log(`Server up and running at ${config.port}`);
});
