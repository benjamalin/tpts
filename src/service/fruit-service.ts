import {Poire, Pomme, TypeDeFruit} from "@/model/fruits";

export class FruitService {

    pomme: Pomme = {label: "Pomme Gala", calibre: 4, aoc: true, type: TypeDeFruit.pomme};
    poire: Poire = {label: "Poire Whiliams", calibre: 2, type: TypeDeFruit.poire};

    getOneFruit(): Pomme | Poire {
        return Math.random() > 0.5 ? this.pomme : this.poire
    }

    isAPomme(pommeOrPoire: Pomme | Poire): pommeOrPoire is Pomme {
        return pommeOrPoire.type === TypeDeFruit.pomme;
    }

}
