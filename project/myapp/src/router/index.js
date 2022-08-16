import VueRouter from "vue-router";

import About from '@/views/About'
import Home from '@/views/Home'
import Tooltip from '@/views/Tooltip'
import Legend from '@/views/Legend'
import BarGraph from '@/views/BarGraph'
import HorizontalBar from '@/views/HorizontalBar'
import PieGraph from '@/views/PieGraph'
import LineGraph from '@/views/LineGraph'
import MultiLineGraph from '@/views/MultiLineGraph'
import ScatterGraph from '@/views/ScatterGraph'

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
        },
        {
            path: '/pieGraph',
            component: PieGraph
        },
        {
            path: '/lineGraph',
            component: LineGraph
        },
        {
            path: '/multiLine',
            component: MultiLineGraph
        },
        {
            path: '/scatterGraph',
            component: ScatterGraph
        }
    ]
})