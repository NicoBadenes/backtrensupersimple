//configuración de express
import materiaRoutes from "./routes/materia.routes.js";
import relacionesRoutes from "./routes/relacion.routes.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/user.routers.js";

import healthRoutes from "./routes/health.routes.js";

// const spec = swaggerJSDoc(options);

// import usuarios from "./router/users";
// import materias from "./router/materias";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/health", healthRoutes);
app.use("/materias", materiaRoutes);
app.use("/relaciones", relacionesRoutes);


//Rutas
// app.use("/users", usuarios);
// app.use("/materias", materias);

//documentacion
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(spec));



export default app;