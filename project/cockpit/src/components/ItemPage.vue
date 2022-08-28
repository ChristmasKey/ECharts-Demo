<template>
    <div class="item">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "ItemPage"
    }
</script>

<style scoped>
    .item {
        height: 5.125rem;
        border: 1px solid red;
        margin: 0.25rem;
        background-color: rgba(253, 237, 253, 0.7);
    }
</style>