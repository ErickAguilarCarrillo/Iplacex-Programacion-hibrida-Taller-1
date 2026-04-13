import { FiguraGeometrica } from './figura-geometrica.model';

export class Circulo extends FiguraGeometrica {
  constructor(private readonly radio: number) {
    super();
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}
