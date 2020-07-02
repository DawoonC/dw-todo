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
