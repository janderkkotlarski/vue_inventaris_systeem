<script setup lang="ts">
import {invisChar} from './components/constants.ts';
</script>

<template>
    <nav>
        <br />

        <RouterLink :to="{name: 'inventory.overview'}">Overzicht</RouterLink>
        {{ invisChar }}
        <RouterLink :to="{name: 'inventory.create'}">Nieuw product</RouterLink>

        <br />
    </nav>
    <main>
        <br />

        <!-- Needed to display the currently selected page -->
        <RouterView :key="$route.path" />

        <br />
    </main>
</template>
