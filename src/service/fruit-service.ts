import {Poire, Pomme, TypeDeFruit} from "@/model/fruits";

export class FruitService {

    public static pomme: Pomme = {label: "Pomme Gala", calibre: 4, aoc: true, type: TypeDeFruit.pomme};
    public static poire: Poire = {label: "Poire Whiliams", calibre: 2, type: TypeDeFruit.poire};

    getOneFruit(): Pomme | Poire {
        return Math.random() > 0.5 ? FruitService.pomme : FruitService.poire
    }

    isAPomme(pommeOrPoire: Pomme | Poire): pommeOrPoire is Pomme {
        return pommeOrPoire.type === TypeDeFruit.pomme;
    }

}
