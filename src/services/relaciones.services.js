import { pool } from "../database.js";

export const inscribirAlumnoService = async (student_id, subject_id) => {
  const query = `
    INSERT INTO enrollments (student_id, subject_id) 
    VALUES ($1, $2) 
    RETURNING id, student_id, subject_id, created_at
  `;
  const { rows } = await pool.query(query, [student_id, subject_id]);
  return rows[0];
};