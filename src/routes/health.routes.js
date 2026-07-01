import { Router } from "express";
import { health, healthDB } from "../controllers/health.controllers.js";

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check general
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API disponible
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
router.get("/", health);

/**
 * @openapi
 * /health/db:
 *   get:
 *     summary: Health check de base de datos
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Base de datos conectada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
router.get("/db", healthDB);

export default router;