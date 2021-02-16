<template>
  <div>
    <Header />
    <transition name="fade">
      <slot></slot>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
  name: 'Main',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
