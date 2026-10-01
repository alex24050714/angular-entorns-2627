import { Component } from '@angular/core';
import { Alumne } from '../../interfaces/alumne';
@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  alumne: Alumne = {
    id: 1,
    nom: 'Jan ',
    cognom: 'Altisent Bresco',
    edat: 21,
    cicle: 'DAW'
  };

  get nomComplet(): string{
    return this.alumne.nom + this.alumne.cognom;
  }

  get inicials(): string{
    return this.alumne.nom.charAt(0) + (".") + this.alumne.cognom.charAt(0);
  }

  get generacio(): string{
    if(this.alumne.edat >= 25 && this.alumne.edat <= 40) return 'Milennial';
    if(this.alumne.edat >= 10 && this.alumne.edat <= 24) return 'Gen Z';
    return 'Altre';
  }
}


