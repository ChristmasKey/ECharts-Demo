<template>
    <div>
        <header>
            <h1>SpringStone 数据驾驶舱</h1>
        </header>
        <!--大容器-->
        <section class="container">
            <!--左容器-->
            <section class="itemLeft">
                <!--使用组件-->
                <ItemPage>
                    <ChartLT/>
                </ItemPage>
                <ItemPage>
                    <ChartLB/>
                </ItemPage>
            </section>
            <!--中容器-->
            <section class="itemCenter"></section>
            <!--右容器-->
            <section class="itemRight">
                <ItemPage>
                    <ChartRT/>
                </ItemPage>
                <ItemPage>
                    <ChartRB/>
                </ItemPage>
            </section>
        </section>
    </div>
</template>

<script>
    import ItemPage from "@/components/ItemPage";
    import ChartLT from "@/components/ChartLT";
    import ChartLB from "@/components/ChartLB";
    import ChartRT from "@/components/ChartRT";
    import ChartRB from "@/components/ChartRB";
    import {inject} from "vue"

    export default {
        name: "HomePage",
        components: {
            ChartRB,
            ChartRT,
            ChartLB,
            ChartLT,
            ItemPage
        },
        setup() {
            let $echarts = inject("echarts")
            console.log("测试使用echarts", $echarts)
        }
    }
</script>

<style scoped lang="less">
    header {
        height: 1rem;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);

        h1 {
            font-size: 0.375rem;
            color: #fff;
            text-align: center;
            line-height: 1rem;
        }
    }

    .container {
        min-width: 1200px;
        max-width: 2048px;
        margin: 0 auto;
        padding: 0.125rem 0.125rem 0;
        display: flex;

        .itemLeft, .itemRight {
            flex: 3;
        }

        .itemCenter {
            flex: 5;
        }
    }
</style>