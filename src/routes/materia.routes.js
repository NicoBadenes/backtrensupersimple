import { Router } from "express";
import { 
  getAllMaterias, 
  getMateriaById, 
  createMateria, 
  updateMateria, 
  deleteMateria 
} from "../controllers/materia.controllers.js";

const router = Router();

// Rutas base para materias
router.get("/", getAllMaterias);
router.get("/:id", getMateriaById);
router.post("/", createMateria);
router.put("/:id", updateMateria);
router.delete("/:id", deleteMateria);

export default router;