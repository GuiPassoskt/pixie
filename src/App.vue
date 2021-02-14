<template>
  <div id="app">
    <component :is="layout">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'main'
export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
