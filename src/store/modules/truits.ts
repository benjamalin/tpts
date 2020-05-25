import {Action, Module, Mutation, VuexModule} from "vuex-class-modules";
import {services} from "@/service/services";

@Module
export class Fruits extends VuexModule {
    // state
    fruits = [services.fruit.getOneFruit()];

    index = 0;

    @Mutation
    newFruit() {
        this.fruits.push(services.fruit.getOneFruit());
    }

    @Mutation
    selectFruit(index: number){
        this.index=index;
    }

    currentFruit(){
        return this.fruits[this.index];
    }
}
