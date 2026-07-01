import { Router } from "express";
import {
  getAllMaterias,
  getMateriaById,
  createMateria,
  updateMateria,
  deleteMateria,
} from "../controllers/materia.controllers.js";

const router = Router();

/**
 * @openapi
 * /materias:
 *   get:
 *     summary: Obtener todas las materias
 *     tags: [Materias]
 *     responses:
 *       200:
 *         description: Lista de materias
 */
router.get("/", getAllMaterias);

/**
 * @openapi
 * /materias/{id}:
 *   get:
 *     summary: Obtener una materia por ID
 *     tags: [Materias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Materia encontrada
 *       404:
 *         description: Materia no encontrada
 */
router.get("/:id", getMateriaById);

/**
 * @openapi
 * /materias:
 *   post:
 *     summary: Crear una materia
 *     tags: [Materias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, description]
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               professor_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Materia creada
 */
router.post("/", createMateria);

/**
 * @openapi
 * /materias/{id}:
 *   put:
 *     summary: Actualizar una materia
 *     tags: [Materias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               professor_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Materia actualizada
 *       404:
 *         description: Materia no encontrada
 */
router.put("/:id", updateMateria);

/**
 * @openapi
 * /materias/{id}:
 *   delete:
 *     summary: Eliminar una materia
 *     tags: [Materias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Materia eliminada
 *       404:
 *         description: Materia no encontrada
 */
router.delete("/:id", deleteMateria);

export default router;