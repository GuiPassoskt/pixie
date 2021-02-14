<template>
  <div>
    <Banner />
    <div class="featured-items mb-4">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Featured Items</h1>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="is-flex is-justify-content-center">
            <ProductItem
              :item="product"
              v-for="(product, index) in products"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/banner'
import ProductItem from './ProductItem'
import { products } from '../data/destaques'
export default {
  name: 'Home',
  components: {
    Banner,
    ProductItem
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.products = products
  }
}
</script>

<style lang="scss" scoped>
</style>