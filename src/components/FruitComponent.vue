<template>
    <div class="fruit">
        <h1>Fruit : {{fruit.label}}</h1>
        <h1>Calibre : {{ fruit.calibre}}</h1>
        <h1>Aoc : {{ fruit.aoc}}</h1>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Pomme} from "@/model/fruits";

@Component
export default class FruitComponent extends Vue {
    fruit: Pomme = {label: "Pomme", calibre: 5, aoc: true}
}
</script>
