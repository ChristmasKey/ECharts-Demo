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
import Grid from '@/views/Grid'
import KLineGraph from '@/views/KLineGraph'
import RadarGraph from '@/views/RadarGraph'
import FunnelGraph from '@/views/FunnelGraph'
import GaugeGraph from '@/views/GaugeGraph'
import RelationGraph from '@/views/RelationGraph'
import DataZoom from '@/views/DataZoom'
import TreeGraph from '@/views/TreeGraph'

export default new VueRouter({
    routes: [
        {
            path: '/tree',
            component: TreeGraph
        },
        {
            path: '/dataZoom',
            component: DataZoom
        },
        {
            path: '/relation',
            component: RelationGraph
        },
        {
            path: '/gauge',
            component: GaugeGraph
        },
        {
            path: '/funnel',
            component: FunnelGraph
        },
        {
            path: '/radar',
            component: RadarGraph
        },

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
        },
        {
            path: '/grid',
            component: Grid
        },
        {
            path: '/kLine',
            component: KLineGraph
        }
    ]
})