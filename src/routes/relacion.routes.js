import { Router } from "express";
import { inscribirAlumno } from "../controllers/relacion.controllers.js";

const router = Router();

/**
 * @openapi
 * /relaciones/cursa:
 *   post:
 *     summary: Inscribir un alumno en una materia
 *     tags: [Relaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [student_id, subject_id]
 *             properties:
 *               student_id:
 *                 type: integer
 *               subject_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Alumno inscrito correctamente
 *       400:
 *         description: Ya estaba inscrito
 */
router.post("/cursa", inscribirAlumno);

export default router;