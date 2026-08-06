import Overview from './pages/OverView.vue';
import Create from './pages/CreAte.vue';
import Edit from './pages/EdIt.vue';
import Order from './pages/OrDer.vue';

export const routes = [
    {path: '/', component: Overview, name: 'inventory.overview'},
    {path: '/create', component: Create, name: 'inventory.create'},
    {path: '/edit/:id', component: Edit, name: 'inventory.edit'},
    {path: '/order', component: Order, name: 'inventory.order'},
];
