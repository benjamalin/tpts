import {Poire, Pomme} from "@/model/fruits";

export class FruitService {

    pomme = {label: "pomme", calibre: 4, aoc: true};
    poire = {label: "poire", calibre: 2};

    getOneFruit(): Pomme | Poire {
        return Math.random() > 0.5 ? this.pomme : this.poire
    }

    isAPomme(pommeOrPoire: Pomme | Poire): pommeOrPoire is Pomme {
        return pommeOrPoire.label === "pomme";
    }

}
