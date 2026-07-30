<script setup>
import {invisChar} from './components/constants.ts';
</script>

<template>
    <nav>
        <br />

        <RouterLink to="/">Overzicht</RouterLink>
        {{ invisChar }}

        <br />
    </nav>
    <main>
        <br />

        <!-- Needed to display the currently selected page -->
        <RouterView :key="$route.path" />

        <br />
    </main>
</template>
