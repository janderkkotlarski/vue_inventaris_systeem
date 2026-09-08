<script setup lang="ts">
import {invisChar} from '../../../components/library';
</script>

<template>
    <nav>
        <br />

        <RouterLink :to="{name: 'inventory.overview'}">Overzicht</RouterLink>
        {{ invisChar }}
        <RouterLink :to="{name: 'inventory.create'}">Nieuw product</RouterLink>
        {{ invisChar }}
        <RouterLink :to="{name: 'inventory.order'}">Bestellen</RouterLink>

        <br />
    </nav>
</template>
