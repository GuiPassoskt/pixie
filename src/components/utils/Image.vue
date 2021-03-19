<template>
  <img
    :src="require(`@/assets/images/big-0${image}.jpg`)"
    class="product-main"
  />
</template>

<script>
export default {
  name: 'ImageProduct',
  props: {
    image: {}
  }
}
</script>

<style lang="scss" scoped>
.product-main {
  border-radius: 20px;
}
</style>