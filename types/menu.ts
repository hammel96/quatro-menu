export interface Product {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen?: string;
  destacado?: boolean;
  orden?: number;
}

export type MenuData = Record<string, Product[]>;
