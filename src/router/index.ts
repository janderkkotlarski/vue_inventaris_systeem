import {createMemoryHistory, createRouter} from 'vue-router';

import {routes} from '../domains/inventory/routes.ts';

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
