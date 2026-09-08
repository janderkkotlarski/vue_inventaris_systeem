<script setup lang="ts">
import {invisChar} from './components/library.ts';
</script>

<template>
    <!-- TODO: de navigatie kun je nog in een eigen vue component stoppen -->
    <nav>
        <br />

        <RouterLink :to="{name: 'inventory.overview'}">Overzicht</RouterLink>
        {{ invisChar }}
        <RouterLink :to="{name: 'inventory.create'}">Nieuw product</RouterLink>
        {{ invisChar }}
        <RouterLink :to="{name: 'inventory.order'}">Bestellen</RouterLink>

        <br />
    </nav>
    <main>
        <br />

        <!-- Needed to display the currently selected page -->
        <RouterView :key="$route.path" />

        <br />
    </main>
</template>
