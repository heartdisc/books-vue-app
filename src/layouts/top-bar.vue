<template>

    <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
            <router-link class="p-2 text-muted" :to="{ name: 'book-list'}">หน้าแรก</router-link>
            <router-link class="p-2 text-muted" :to="{ name: 'book-detail', params: { id: 12 }}">หนังสือ</router-link>
            <a class="p-2 text-muted" href="#">Technology</a>
            <a class="p-2 text-muted" href="#">Design</a>
            <a class="p-2 text-muted" href="#">Culture</a>
            <a class="p-2 text-muted" href="#">Business</a>
            <a class="p-2 text-muted" href="#">Politics</a>
            <a class="p-2 text-muted" href="#">Opinion</a>
        </nav>
    </div>

</template>

<script>
    export default {
        name: 'TopBar',
    }
</script>

<style lang="scss" scoped>

</style>