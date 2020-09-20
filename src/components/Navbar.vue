<template>
  <div>
    <nav class="top-nav green darken-1">
      <div class="container">
        <div class="nav-wrapper">
          <div class="row">
            <div class="col s12 m10 offset-m1">
              <h1 class="header">
                {{ title }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <a
        href="#"
        data-target="sidebar"
        class="top-nav sidenav-trigger full hide-on-large-only"
      >
        <i class="material-icons">menu</i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'navbar',

  computed: {
    ...mapGetters('todos', [
      'todoListsById',
    ]),

    title() {
      return this.todoListsById[this.$route.params.id]?.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  @media only screen and (min-width: 993px) {
    height: 110px;
  }

  .container {
    width: 100%;
  }

  .nav-wrapper {
    @media only screen and (max-width: 992px) {
      text-align: center;
    }
  }

  .header {
    margin: 0;
    padding-top: 22px;

    @media only screen and (max-width: 992px) {
      font-size: 2.2rem;
      padding-top: 14px;
    }

    @media only screen and (max-width: 600px) {
      padding-top: 12px;
    }
  }

  &.sidenav-trigger {
    position: absolute;
    text-align: center;
    height: 48px;
    width: 48px;
    top: 28px;
    left: 0;
    float: none;
    margin-left: 1.5rem;
    color: #fff;
    font-size: 36px;
    z-index: 2;

    @media only screen and (max-width: 992px) {
      top: 9px;
    }

    @media only screen and (max-width: 600px) {
      top: 4px;
    }

    i {
      font-size: 32px;
    }
  }
}
</style>
