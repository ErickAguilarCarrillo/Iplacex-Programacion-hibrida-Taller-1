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
import { Circulo } from '../../dominio/modelos/circulo.model';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
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
export class CirculoComponent {
  radio: number | null = null;
  perimetro: number | null = null;
  mostrarResultado = false;
  error = '';

  calcularPerimetro(): void {
    this.mostrarResultado = true;
    this.error = '';

    if (this.radio === null || this.radio <= 0) {
      this.perimetro = null;
      this.error = 'Ingresa un radio mayor que cero.';
      return;
    }

    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
  }
}
