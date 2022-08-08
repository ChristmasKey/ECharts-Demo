import VueRouter from "vue-router";

import About from '@/views/About'
import Home from '@/views/Home'
import Tooltip from '@/views/Tooltip'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/tooltip',
            component: Tooltip
        }
    ]
})