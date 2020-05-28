import {services} from "@/service/services";
import {FruitService} from "@/service/fruit-service";
import {Poire, Pomme} from "@/model/fruits";
import Vuex from "vuex";
import {Fruits} from "@/store/modules/truits";
import Vue from "vue";

Vue.use(Vuex);

class MockedFruitService implements FruitService {

    fruitsToReturn = [FruitService.pomme, FruitService.poire, FruitService.pomme];

    getOneFruit(): Pomme | Poire {
        return this.fruitsToReturn.splice(0, 1)[0];
    }

    isAPomme(pommeOrPoire: Pomme | Poire): pommeOrPoire is Pomme {
        return pommeOrPoire === FruitService.pomme;
    }
}

describe('fruit.ts', () => {

    services.fruit = new MockedFruitService();
    const store = new Vuex.Store({});
    const fruitsStore = new Fruits({store, name: "fruits"});


    it('Should be initilized wit a first fruit', () => {
        expect(fruitsStore.currentFruit()).toBe(FruitService.pomme);
    });

    it('Should create another fruit', () => {
        fruitsStore.newFruit();
        expect(fruitsStore.currentFruit()).toBe(FruitService.poire);
    });

    it('Should allow to navigate', () => {
        fruitsStore.selectFruit(0);
        expect(fruitsStore.currentFruit()).toBe(FruitService.pomme);
    });

});
