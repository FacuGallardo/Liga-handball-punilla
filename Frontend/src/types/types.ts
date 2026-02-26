// Club types
export interface Club {
  id: number;
  nombre: string;
  activo?: boolean;
}

// Player types
export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  clubId: number;
  club: Club;
  categoria: string;
  telefono?: string;
  vencimiento?: string;
  carnetUrl?: string;
  fichaMedicaUrl?: string;
  estado?: string;
}

// Payment types
export type TipoPago = "cuota" | "arbitraje" | "multa" | "otro";

export interface Pago {
  id: number;
  tipo: TipoPago;
  club: string;
  monto: number;
  comprobante: string;
  comprobanteArchivo?: string;
  fecha: string;
  estado: "pendiente" | "pagado" | "validado" | "invalido";
  categoria?: "Masculino" | "Femenino" | "Ambos";
  partidoId?: number;
  cantidadJugadores?: number;
  motivo?: string;
}

// Referent types
export interface Referente {
  id: number;
  nombre: string;
  apellido: string;
  telefono?: string;
  email?: string;
  rol?: string;
  clubId?: number;
}

// Generic fixture/partido types
export interface Partido {
  id: number;
  equipoLocal: string;
  equipoVisita: string;
  fecha: string;
  horaInicio: string;
  cancha: string;
  categoria: string;
  resultado?: string;
}

// Club Payload for forms
export interface ClubPayload {
  logoUrl: string;
  nombre?: string;
  categoria?: "masculino" | "femenino";
  correo?: string;
  telefono?: string;
  localidadId?: number;
  fechaRegistro?: string;
}
