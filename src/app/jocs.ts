export class Jocs {
    id: number;
    nom: string;
    preu: number;
    stock: boolean;
    vendidos: number
    descripcio ?: string;

    constructor(id: number, nom: string, preu: number, stock: boolean, vendidos: number, descripcio ?: string){
        this.id = id;
        this.nom = nom;
        this.preu = preu;
        this.stock = stock;
        this.vendidos = vendidos;
        this.descripcio = descripcio;
    }
}