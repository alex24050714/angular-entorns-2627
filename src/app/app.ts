import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
  //Objectiu de la sessió 2: Veure la diferéncia entre JS i TS --> TS = JS + tipus.
  //Els tipus no canvien com funciona el codi --> Ajuden a detectar errors abans d'executar.
  // " undefined is not a function?" --> AIXÒ ES EL QUE VOLEM EVITAR!!!!

  function name(nom:string){
    return nom.toUpperCase();
  }
  saluda(42) {
}
