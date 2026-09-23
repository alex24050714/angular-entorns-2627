import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER USAR LA intreficie de producte
import { Producte as ProducteClass } from './producte'; //Importem la classe Producte amb un alias per evitar conflictes amb la interfície Producte
import { Jocs } from './models/jocs'
import { Jocs as JocsClass } from './jocs';

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
  
  producte2: Producte = {
    id: 2,
    nom: 'Ivan',
    preu: 5,
    dispoonible: false,
  };

  productes: Producte[] = [this.producte, this.producte2];
  
  p1 = new ProducteClass('Teclat', 89.99);
  constructor() {
    console.log(this.p1.toString());
    console.log(this.p1.preuAmbIva);
    console.log(this.p1.toString());
  }

  //1. AFEGIU UN METODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
  //2. MÉTODE descomptre() que retorni el preu amb un 10% de rebaixa
  //3. creeu un nou producte i mostreu el descomptre per consola
  //4. cerqueu la manera de mostrar el descompte amb un popup (alert) i amb un prompt

  jocs: Jocs [] = [
  {
    id: 1,
    nom: 'Zelda',
    preu: 59.99,
    stock: true,
    vendidos: 12.000,
    descripcio: 'Patata'
  },

  {
    id: 2,
    nom: 'Pokemon',
    preu: 49.99,
    vendidos: 50.000,
    stock: false,
  },

  {
    id: 3,
    nom: 'Spider-man',
    preu: 79.99,
    stock: true,
    vendidos: 100.000,
    descripcio: 'GOTY',
  },

  {
    id: 4,
    nom: 'GTA VI',
    preu: 99.99,
    stock: true,
    vendidos: 90.000,
    descripcio: 'Criminal'
  },

  {
    id: 5,
    nom: 'Pokemon Champions',
    preu: 0.00,
    stock: true,
    vendidos: 1,
    descripcio: 'Sol el jugue el jan perque es masoca',
  },

  {
    id: 6,
    nom: 'Dragon Ball Xenoverse 3',
    preu: 69.99,
    stock: true,
    vendidos: 70.000,
  }]
  getActiu(): boolean{
      return true;
  }

    findById(id: number): Jocs | undefined{
        return this.jocs.find(joc => joc.id === id);
    }

    formatarElement(element: Jocs): string{
        return `ID: ${element.id}, Nom: ${element.nom}, Preu: ${element.preu}, Stock: ${element.stock}, Vendidos: ${element.vendidos}, Descripcio: ${element.descripcio}`;
    }

}