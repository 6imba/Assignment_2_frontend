import { createWebHistory,createRouter } from "vue-router";
import userRoutes from './userRoutes.js'

const routes = userRoutes

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;