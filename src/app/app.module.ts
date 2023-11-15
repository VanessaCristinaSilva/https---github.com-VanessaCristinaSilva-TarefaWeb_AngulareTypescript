import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraMediaComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent,
    FormsModule,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}