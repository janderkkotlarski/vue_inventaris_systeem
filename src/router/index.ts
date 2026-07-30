import {createMemoryHistory, createRouter} from 'vue-router';

import {routes} from '../domains/inventory/routes.js';

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
