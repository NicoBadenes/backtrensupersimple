import * as relacionesService from "../services/relaciones.services.js";

export const inscribirAlumno = async (req, res) => {
  try {
    const { student_id, subject_id } = req.body;
    const inscripcion = await relacionesService.inscribirAlumnoService(student_id, subject_id);
    res.status(201).json({ message: "Alumno inscripto exitosamente", data: inscripcion });
  } catch (error) {
    // Manejo específico del error si violan el constraint unique_student_subject
    if (error.code === '23505') { 
      return res.status(400).json({ error: "El alumno ya está inscripto en esta materia" });
    }
    res.status(500).json({ error: "Error al inscribir alumno", details: error.message });
  }
};