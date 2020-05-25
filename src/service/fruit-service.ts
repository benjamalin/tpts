import {Poire, Pomme} from "@/model/fruits";

export class FruitService {

    pomme: Pomme = {label: "Pomme", calibre: 4, aoc: true};
    poire: Poire = {label: "Poire", calibre: 2};

    getOneFruit(): Pomme | Poire {
        return Math.random() > 0.5 ? this.pomme : this.poire
    }

    isAPomme(pommeOrPoire: Pomme | Poire): pommeOrPoire is Pomme {
        return pommeOrPoire.label === "Pomme";
    }

}
