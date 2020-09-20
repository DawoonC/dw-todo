<template>
  <div id="app" class="grey lighten-4">
    <header>
      <Navbar/>
      <Sidebar/>
    </header>

    <main>
      <router-view/>
    </main>

    <footer>
    </footer>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',

  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
header, main, footer {
  padding-left: 300px;

  @media only screen and (max-width: 992px) {
    padding-left: 0;
  }
}
</style>
