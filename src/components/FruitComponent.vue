<template>
    <div>
        <input type="button" value="un autre" v-on:click="changeFruit">

        <div class="fruit">
            <h1>Fruit : {{fruit.label}}</h1>
            <h1>Calibre : {{ fruit.calibre}}</h1>
            <h1 v-if="isAPomme()">Aoc : {{ fruit.aoc}}</h1>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {services} from "@/service/services";
import {fruitsStore} from "@/store";

@Component
export default class FruitComponent extends Vue {

    isAPomme() {
        return services.fruit.isAPomme(this.fruit);
    }

    get fruit() {
        return fruitsStore.fruit;
    }

    changeFruit() {
        fruitsStore.newFruit();
    }

}
</script>
