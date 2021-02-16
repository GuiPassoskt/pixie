<template>
  <div>
    <Banner />
    <div class="container is-flex is-justify-content-space-around mb-2">
      <div class="is-flex is-align-items-center is-grey">
        <i class="icofont-truck-alt"></i>
        <div>
          <h4 class="is-uppercase has-text-weight-bold">Frete Grátis</h4>
          <p class="has-text-weight-light">Para compras acima de R$100,00</p>
        </div>
      </div>
      <div class="is-flex is-align-items-center is-grey">
        <i class="icofont-bill-alt"></i>
        <div>
          <h4 class="is-uppercase has-text-weight-bold">
            Garantia de Devolução
          </h4>
          <p class="has-text-weight-light">100% de garantia de devolução</p>
        </div>
      </div>
      <div class="is-flex is-align-items-center is-grey">
        <i class="icofont-support"></i>
        <div>
          <h4 class="is-uppercase has-text-weight-bold">Suporte Online 24/7</h4>
          <p class="has-text-weight-light">Suporte ao cliente.</p>
        </div>
      </div>
    </div>

    <div class="featured-items mb-4">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Destaques</h1>
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
.is-grey {
  background-color: #dcdcdc;
  padding: 20px;
  border-radius: 20px;
  i {
    font-size: 2.5rem;
    margin: 10px;
  }
}
</style>