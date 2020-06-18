<template>
  <div id="app">
    <Layout :siderFixed="true">
      <Sidebar></Sidebar>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'app',

  components: {
    Sidebar,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
