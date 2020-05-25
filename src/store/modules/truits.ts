import {Action, Module, Mutation, VuexModule} from "vuex-class-modules";
import {services} from "@/service/services";

@Module
export class Fruits extends VuexModule {
    // state
    fruit = services.fruit.getOneFruit();

    @Mutation
    newFruit() {
        this.fruit = services.fruit.getOneFruit();
    }

}
