<script setup lang="ts"></script>

<template>
    <table>
        <tr>
            <th>ID</th>
            <th>Naam</th>
            <th>Aanwezig</th>
            <th>Minimum</th>
            <th>Bestel</th>
        </tr>
        <tr v-for="product in props.inventoryList" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.actualAmount }}</td>
            <td>{{ product.minimumAmount }}</td>
            <td><input v-model.number="product.minimumAmount - product.actualAmount" type="number" min="1" /></td>
        </tr>
    </table>
</template>
