// src/RegistroPagos/types/index.ts

export interface Club {
  id: number;
  nombre: string;
}

export interface Pago {
  id: number;
  clubId: number;
  club?: Club;
  tipo: 'cuota' | 'arbitraje' | 'multa' | 'otro';
  monto: number;
  estado: 'pendiente' | 'pagado' | 'vencido';
  fecha: string;
  observaciones?: string;
  motivo?: string;
  fechaCreacion?: string;
  fechaActualizacion?: string;
}

export interface CreatePagoDto {
  clubId: number;
  tipo: 'cuota' | 'arbitraje' | 'multa' | 'otro';
  monto: number;
  estado?: 'pendiente' | 'pagado' | 'vencido';
  observaciones?: string;
  motivo?: string;
}

export interface UpdatePagoDto {
  clubId?: number;
  tipo?: 'cuota' | 'arbitraje' | 'multa' | 'otro';
  monto?: number;
  estado?: 'pendiente' | 'pagado' | 'vencido';
  observaciones?: string;
  motivo?: string;
}
