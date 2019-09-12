<template>
  <div id="app" class="container">
    <top-header></top-header>
    <top-bar></top-bar>
    <!-- <div id="nav">
      <router-link :to="{ name: 'book-list'}">Home</router-link> |
      <router-link :to="{ name: 'book-detail', params: { id: 12 }}">Books</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
  import TopHeader from '@/layouts/top-header.vue';
  import TopBar from '@/layouts/top-bar.vue';

  export default {
    name: 'App',
    components: {
      TopHeader,
      TopBar,
    },
  }
</script>


<style lang="scss">
#app {
  font-family: 'sarabun', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.nav {
  font-family: 'IBM Plex Thai', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>
