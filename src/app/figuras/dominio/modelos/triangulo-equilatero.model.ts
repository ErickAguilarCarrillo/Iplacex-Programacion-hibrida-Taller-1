import { FiguraGeometrica } from './figura-geometrica.model';

export class TrianguloEquilatero extends FiguraGeometrica {
  constructor(private readonly lado: number) {
    super();
  }

  calcularPerimetro(): number {
    return 3 * this.lado;
  }
}
