<script setup lang="ts">
import {invisChar} from './components/constants.ts';

import {routes} from './domains/inventory/routes.ts';

const routesType = typeof routes;
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

        {{ routesType }}
    </main>
</template>
