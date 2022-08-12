import VueRouter from "vue-router";

import About from '@/views/About'
import Home from '@/views/Home'
import Tooltip from '@/views/Tooltip'
import Legend from '@/views/Legend'
import BarGraph from '@/views/BarGraph'
import HorizontalBar from '@/views/HorizontalBar'

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
        },
        {
            path: '/legend',
            component: Legend
        },
        {
            path: '/barGraph',
            component: BarGraph
        },
        {
            path: '/horizontalBar',
            component: HorizontalBar
        }
    ]
})