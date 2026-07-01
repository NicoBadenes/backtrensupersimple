import * as materiaService from "../services/materia.services.js";

export const getAllMaterias = async (req, res) => {
  try {
    const materias = await materiaService.getAllMateriasService();
    res.status(200).json(materias);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener materias", details: error.message });
  }
};

export const getMateriaById = async (req, res) => {
  try {
    const materia = await materiaService.getMateriaByIdService(req.params.id);
    if (!materia) {
      return res.status(404).json({ error: "Materia no encontrada" });
    }
    res.status(200).json(materia);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la materia", details: error.message });
  }
};

export const createMateria = async (req, res) => {
  try {
    // Acá agarramos el professor_id que manda el cliente
    const { name, description, professor_id } = req.body;
    const newMateria = await materiaService.createMateriaService(name, description, professor_id);
    res.status(201).json(newMateria);
  } catch (error) {
    res.status(500).json({ error: "Error al crear materia", details: error.message });
  }
};

export const updateMateria = async (req, res) => {
  try {
    const { name, description, professor_id } = req.body;
    const updatedMateria = await materiaService.updateMateriaService(req.params.id, name, description, professor_id);
    if (!updatedMateria) {
      return res.status(404).json({ error: "Materia no encontrada o ya eliminada" });
    }
    res.status(200).json(updatedMateria);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar materia", details: error.message });
  }
};

export const deleteMateria = async (req, res) => {
  try {
    const deletedMateria = await materiaService.deleteMateriaService(req.params.id);
    if (!deletedMateria) {
      return res.status(404).json({ error: "Materia no encontrada o ya eliminada" });
    }
    res.status(200).json({ message: "Materia eliminada correctamente", materia: deletedMateria });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar materia", details: error.message });
  }
};