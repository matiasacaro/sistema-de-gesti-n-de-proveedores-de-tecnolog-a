// FIX: Removed self-import of Contacto which was causing a conflict.
export interface Contacto {
  nombre: string;
  cargo: string;
  celular: string;
  telefonoAlternativo?: string;
  email: string;
}

export interface Proveedor {
  id: number;
  razonSocial: string;
  cuit: string;
  domicilio: string;
  telefonos: string[];
  emails: string[];
  contactos: Contacto[];
  fechaVencimientoConformidad: string; 
}

export interface Tecnologia {
  id: number;
  proveedorId: number;
  tipoEquipo: string;
  marca: string;
  modelo: string;
  modoUso: 'Fijo' | 'Móvil';
}

export enum TipoTramite {
  INSCRIPCION = 'Inscripción (RP01)',
  RENOVACION = 'Renovación (RP03)',
  AMPLIACION = 'Ampliación (RP04)',
  BAJA = 'Baja (RP05)',
}

export interface Tramite {
  id: number;
  proveedorId: number;
  numeroExpediente: string;
  numeroDisposicion?: string;
  fechaInicio: string;
  fechaFinalizacion?: string;
  tipo: TipoTramite;
  tecnologiasIds: number[];
}

export enum EstadoDocumento {
  VIGENTE = 'Vigente',
  VENCIDO = 'Vencido',
  PENDIENTE = 'Pendiente',
}

export interface Documento {
  id: number;
  proveedorId: number;
  tramiteId?: number;
  nombre: string;
  tipo: string;
  fechaPresentacion: string;
  fechaVencimiento?: string;
  estado: EstadoDocumento;
  archivoUrl?: string; // Mock URL to the file
}