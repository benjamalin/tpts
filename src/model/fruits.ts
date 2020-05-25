export interface Pomme {
    label: string;
    calibre: number;
    aoc: boolean;
    type: TypeDeFruit.pomme;
}

export interface Poire {
    label: string;
    calibre: number;
    type: TypeDeFruit.poire;
}

export enum TypeDeFruit {
    pomme = "pomme",
    poire = "poire"
}
