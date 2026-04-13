import { FiguraGeometrica } from './figura-geometrica.model';

export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(
    private readonly ladoA: number,
    private readonly ladoB: number,
    private readonly ladoC: number,
  ) {
    super();
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
