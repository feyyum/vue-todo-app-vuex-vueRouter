import { createRouter, createWebHashHistory } from "vue-router";

import Home from './components/Home'
import New from './components/New'
import Details from './components/Details'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/newItem",
        name: "newItem",
        component: New,
    },
    {
        path: "/:id",
        name: "itemDetails",
        component: Details,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;