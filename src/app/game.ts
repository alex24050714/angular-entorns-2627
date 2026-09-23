import { Jocs } from './models/jocs'

export class Cistella {

    private llistaJocs: Jocs[];
    private jocsTriats: Jocs[];
    usuari: string;
    preuT: number = 0;

    constructor(usuari: string, cataleg: Jocs[] = []){
        this.usuari = usuari;
        this.llistaJocs = cataleg;
        this.jocsTriats = [];
    }

    afegirJoc(joc: Jocs): string{
        this.jocsTriats.push(joc);
        return 'Joc afegit a la llista!: ' + joc.nom;
    }

    preuTotal(joc: Jocs): number{
        this.preuT = this.preuT + joc.preu;
        return this.total;
    } 

    get quantitatJocs(): number {
        return this.jocsTriats.length;
    }
}
