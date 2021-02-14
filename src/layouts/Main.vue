<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from '@/components/common/Footer'
export default {
  name: "Main",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
 
</style>
