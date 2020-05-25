<template>
    <div>
        <div class="all_fruits">
            <div class="fruit_selector" v-bind:class="['fruit--' + fruit.type]" v-for="(fruit, index) in allFruits" v-bind:key="index" v-on:click="selectFruit(index)">
                {{fruit.label}}
            </div>
        </div>


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

    get allFruits() {
        return fruitsStore.fruits;
    }

    get fruit() {
        return fruitsStore.currentFruit();
    }

    changeFruit() {
        fruitsStore.newFruit();
    }

    selectFruit(index: number) {
        fruitsStore.selectFruit(index);
    }

}
</script>


<style>
    .all_fruits {
        display: flex;
        flex-wrap: wrap;
    }

    .fruit_selector {
        width: 150px;
        padding: 10px;
        margin: 10px;
        background-color: aliceblue;
        border: 1px solid grey;
        font-weight: bold;
    }


    .fruit_selector.fruit--poire {
        background-color: lightyellow;
    }

    .fruit_selector.fruit--pomme {
        background-color: greenyellow;
    }

    .fruit_selector:hover {
        cursor: pointer;
        background-color: grey;
        color: white;
    }
</style>
