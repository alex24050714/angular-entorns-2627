/* Aquest fitxer conté la lógica: propietats, metodes, getters...*/
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjetes', /* Per usarlo al HTML d'altres components, com un etiqueta HTML personalitzada*/
  imports: [],
  templateUrl: './tarjetes.html',
  styleUrl: './tarjetes.css',
})
export class Tarjetes {
    nom: String = 'Ordinador Gamer Pro';
    preu: number = 1299;
    estoc: number = 5;

    producte: Producte = {
      id: 1,
      nom: '',
      preu: 1299,
      estoc: 5,
      categoria: 'Informàtica',
    };

    /* Getter --> és un tipus especial de propietat calculada. En lloc de guardar un valor, el CALCULA cada
      cop que s'accedeix. get nomDelGetter(): TipusRetorn {
        return calcul;
      }
        
        AL TEMPLATE s'usa com una PROPIETAT, sense parentesis {{nomDelGetter}}
        */

    //Getter1: preu amb IVA del 21%
    get preuAmbIva(): number {
      return this.producte.preu * 1.21;
    }

    //Getter2: estat de disponibilitat en text
    get estatDisponibilitat(): string{
      if(this.producte.estoc === 0) return 'Esgotat';
      if(this.producte.estoc < 3) return 'Últimes unitats';
      return 'Disponible';
    }
}
/* interpolacio de dades
  Permet conectar les dades del TS a l'html
  Permet incrustar expressions TS dins l'HTML, angular avalua l'expressio i mostra el resultat com a text

  {{nomPropietat}} --> mostra el valor d'una propietat de la classe
  {{2 + 3}} --> mostra 5
  {{text.toUpperCase()}} --> mostra el text amb majuscules
  {{edat >= 18 ? 'Major d\ 'edat' : Menor d\ 'edat}} --> operador ternari

  amb {{nom}} --> el valor pot canviar i l'HTML s'actualitzarà automàticament, Hardcoded és per sempre estàtic

*/