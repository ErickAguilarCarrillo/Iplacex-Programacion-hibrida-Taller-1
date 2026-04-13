import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../../dominio/modelos/triangulo-escaleno.model';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
  ],
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  perimetro: number | null = null;
  mostrarResultado = false;
  error = '';

  calcularPerimetro(): void {
    this.mostrarResultado = true;
    this.error = '';

    if (!this.esEntradaValida()) {
      this.perimetro = null;
      this.error = 'Ingresa lados validos para un triangulo escaleno.';
      return;
    }

    const triangulo = new TrianguloEscaleno(this.ladoA!, this.ladoB!, this.ladoC!);
    this.perimetro = triangulo.calcularPerimetro();
  }

  private esEntradaValida(): boolean {
    const lados = [this.ladoA, this.ladoB, this.ladoC];
    if (lados.some((lado) => lado === null || lado <= 0)) {
      return false;
    }

    const [a, b, c] = lados as number[];
    const cumpleDesigualdad = a + b > c && a + c > b && b + c > a;
    const esEscaleno = a !== b && a !== c && b !== c;
    return cumpleDesigualdad && esEscaleno;
  }
}
