import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER USAR LA intreficie de producte

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

  /*
  function saluda(nom){
    return nom.toUpperCase();
  }
  saluda(40);
  --> Parameter 'nom' implicitly has an 'any' type.
  
  */



  /*function saluda(nom:string){
    return nom.toUpperCase();
  }
  saluda(40);

  --> Argument of type 'number' is not assignable to parameter of type 'string'.
  */

  //TIPUS BASICS
  nom: string = 'Angular';
  nom2: string = 'Laravel';
  versio: number = 20;
  actiu: boolean = true;

  //ARRAYS TIPATS
  colors:string[] = ['vermell', 'verd', 'blau'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  //TypeScrips infereix el tipus automàticament
  ciutat = 'Lleida';//string
  codiP = 25605;//number

  //objecte de tipus Producte
  producte: Producte = {
    id: 1,
    nom: 'PC',
    preu: 999,
    dispoonible: true,};
}