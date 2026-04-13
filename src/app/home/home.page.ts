import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../figuras/componentes/circulo/circulo.component';
import { TrianguloComponent } from '../figuras/componentes/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonText,
    CirculoComponent,
    TrianguloComponent,
  ],
})
export class HomePage {
  figuraSeleccionada: 'circulo' | 'triangulo' | null = null;
}
