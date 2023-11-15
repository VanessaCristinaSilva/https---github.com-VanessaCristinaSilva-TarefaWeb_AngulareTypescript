import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-media',
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css']
})

export class CalculadoraMediaComponent {
  ac1!: number;
  ac2!: number;
  ag!: number;
  af!: number;
  media!: number;
  resultado!: string;

  calcular() {
    this.media = 
      (this.ac1 * 0.15) +
      (this.ac2 * 0.30) +
      (this.ag * 0.10) +
      (this.af * 0.45);

    this.resultado = this.media >= 5 ? 'O Aluno foi Aprovado.' : 'O Aluno foi Reprovado';
  }
}

