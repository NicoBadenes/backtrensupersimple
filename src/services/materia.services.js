import { pool } from "../database.js";

// OBTENER TODAS LAS MATERIAS (sin borrar)
export const getAllMateriasService = async () => {
  const query = "SELECT id, name, description, professor_id, created_at, updated_at FROM subjects WHERE deleted_at IS NULL";
  const { rows } = await pool.query(query);
  return rows;
};

// OBTENER MATERIA POR ID
export const getMateriaByIdService = async (id) => {
  const query = "SELECT id, name, description, professor_id, created_at, updated_at FROM subjects WHERE id = $1 AND deleted_at IS NULL";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// CREAR MATERIA (Ahora incluye professor_id opcional)
export const createMateriaService = async (name, description, professor_id) => {
  const query = `
    INSERT INTO subjects (name, description, professor_id) 
    VALUES ($1, $2, $3) 
    RETURNING id, name, description, professor_id
  `;
  const { rows } = await pool.query(query, [name, description, professor_id || null]);
  return rows[0];
};

// ACTUALIZAR MATERIA (Modificar nombre, descripción o cambiar el profesor)
export const updateMateriaService = async (id, name, description, professor_id) => {
  const query = `
    UPDATE subjects 
    SET name = COALESCE($1, name), 
        description = COALESCE($2, description),
        professor_id = COALESCE($3, professor_id)
    WHERE id = $4 AND deleted_at IS NULL
    RETURNING id, name, description, professor_id, updated_at
  `;
  const { rows } = await pool.query(query, [name, description, professor_id, id]);
  return rows[0];
};

// BORRADO LÓGICO DE MATERIA
export const deleteMateriaService = async (id) => {
  const query = `
    UPDATE subjects 
    SET deleted_at = NOW() 
    WHERE id = $1 AND deleted_at IS NULL
    RETURNING id, name, deleted_at
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};