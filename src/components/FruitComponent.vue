<template>
    <div class="fruit">
        <h1>Fruit : {{fruit.label}}</h1>
        <h1>Calibre : {{ fruit.calibre}}</h1>
        <h1 v-if="isAPomme()">Aoc : {{ fruit.aoc}}</h1>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Poire, Pomme} from "@/model/fruits";
import {services} from "@/service/services";

@Component
export default class FruitComponent extends Vue {
    fruit: Pomme | Poire = services.fruit.getOneFruit();


    isAPomme() {
        return services.fruit.isAPomme(this.fruit);
    }

}
</script>
