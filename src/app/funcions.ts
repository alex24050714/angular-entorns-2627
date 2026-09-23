export function saludar(nom: string): string{
    return 'Hola, ${nom}!';
}

export function esMajorEdat(edat: number): boolean {
    return edat >= 18;
}

export function sumarArray(numeros: number[]): number{
    return numeros.reduce((total, actual) => total + actual, 0);
    //ho he hagut de buscar perque no tenia ni idea :D
}
