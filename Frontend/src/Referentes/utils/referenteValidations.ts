// src/Referentes/utils/referenteValidations.ts

import type { Referente } from '../types';

export interface ValidationError {
  field: string;
  message: string;
}

export const validarReferente = (
  data: any,
  referentesExistentes?: Referente[],
  referenteIdActual?: number
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Nombre
  if (!data.nombre?.trim()) {
    errors.push({ field: 'nombre', message: 'El nombre es obligatorio' });
  } else if (data.nombre.trim().length < 2) {
    errors.push({ field: 'nombre', message: 'El nombre debe tener al menos 2 caracteres' });
  }

  // Apellido
  if (!data.apellido?.trim()) {
    errors.push({ field: 'apellido', message: 'El apellido es obligatorio' });
  } else if (data.apellido.trim().length < 2) {
    errors.push({ field: 'apellido', message: 'El apellido debe tener al menos 2 caracteres' });
  }

  // DNI
  if (!data.dni?.trim()) {
    errors.push({ field: 'dni', message: 'El DNI es obligatorio' });
  } else if (!/^\d{7,8}$/.test(data.dni.trim())) {
    errors.push({ field: 'dni', message: 'El DNI debe tener 7 u 8 dígitos numéricos' });
  } else if (referentesExistentes) {
    // Validar duplicado de DNI (excluir el ID actual si es actualización)
    const dniExistente = referentesExistentes.some(
      (r) => r.dni === data.dni.trim() && r.id !== referenteIdActual
    );
    if (dniExistente) {
      errors.push({ field: 'dni', message: 'Este DNI ya está registrado' });
    }
  }

  // Correo
  if (!data.correo?.trim()) {
    errors.push({ field: 'correo', message: 'El correo es obligatorio' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo.trim())) {
    errors.push({ field: 'correo', message: 'El correo no es válido' });
  } else if (referentesExistentes) {
    // Validar duplicado de correo
    const correoExistente = referentesExistentes.some(
      (r) => r.correo === data.correo.trim() && r.id !== referenteIdActual
    );
    if (correoExistente) {
      errors.push({ field: 'correo', message: 'Este correo ya está registrado' });
    }
  }

  // Teléfono
  if (!data.telefono?.trim()) {
    errors.push({ field: 'telefono', message: 'El teléfono es obligatorio' });
  } else if (!/^\d{7,15}$/.test(data.telefono.trim())) {
    errors.push({ field: 'telefono', message: 'El teléfono debe tener entre 7 y 15 dígitos' });
  }

  // Club
  if (!data.clubId || data.clubId === 0) {
    errors.push({ field: 'clubId', message: 'Debe seleccionar un club' });
  }

  // Categoría
  if (!data.categoria?.trim()) {
    errors.push({ field: 'categoria', message: 'Debe seleccionar una categoría' });
  } else if (!['Masculino', 'Femenino'].includes(data.categoria)) {
    errors.push({ field: 'categoria', message: 'Categoría inválida' });
  }

  return errors;
};
