// src/Referentes/types/index.ts

export interface Club {
  id: number;
  nombre: string;
}

export interface Referente {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  correo: string;
  telefono: string;
  clubId: number;
  club: Club;
  categoria: 'Masculino' | 'Femenino';
  fechaCreacion?: string;
  fechaActualizacion?: string;
}

export interface CreateReferenteDto {
  nombre: string;
  apellido: string;
  dni: string;
  correo: string;
  telefono: string;
  clubId: number;
  categoria: 'Masculino' | 'Femenino';
}

export interface UpdateReferenteDto {
  nombre?: string;
  apellido?: string;
  dni?: string;
  correo?: string;
  telefono?: string;
  clubId?: number;
  categoria?: 'Masculino' | 'Femenino';
}
