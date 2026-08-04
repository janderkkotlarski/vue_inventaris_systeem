import Overview from './pages/OverView.vue';
import Create from './pages/CreAte.vue';
import Edit from './pages/EdIt.vue';

export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/edit/:id', component: Edit},
];
