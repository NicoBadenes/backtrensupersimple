// configuración de express
import materiaRoutes from "./routes/materia.routes.js";
import relacionesRoutes from "./routes/relacion.routes.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/user.routers.js";
import healthRoutes from "./routes/health.routes.js";
import swaggerDocs from "./swagger.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

swaggerDocs(app);

app.use("/users", userRoutes);
app.use("/health", healthRoutes);
app.use("/materias", materiaRoutes);
app.use("/relaciones", relacionesRoutes);


export default app;