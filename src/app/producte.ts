//Primera classe
export class Producte{
    nom: string;
    preu: number;

    constructor(nom: string, preu: number){
        this.nom = nom;
        this.preu = preu;
    }

    //metode normal
    toString(): string{
        return `${this.nom} - ${this.preu}`;
    }

    //getter i setter
    get preuAmbIva(): number{
        return this.preu * 1.21;
    }

    
}
