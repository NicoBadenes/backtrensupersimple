import { Router } from "express";
import { inscribirAlumno } from "../controllers/relacion.controllers.js";

const router = Router();

// Ya no hay endpoint de "dicta" porque el profesor se carga al crear/editar la materia.
// Solo dejamos la de cursar para los STUDENT.
router.post("/cursa", inscribirAlumno);

export default router;