<template>
  <div>
    <div class="container">
      <div class="section-heading">
        <div class="line-dec"></div>
        <h1>Produtos</h1>
      </div>
    </div>
    <div class="is-flex is-justify-content-center mt-4 mb-4">
      <div class="is-flex is-justify-content-space-between">
        <div class="column">
          <div id="filters" class="field is-grouped">
            <p class="control">
              <button class="button is-info is-outlined" data-filter="*">
                Todos os Produtos
              </button>
            </p>
            <p class="control">
              <button class="button is-info is-outlined" data-filter=".new">
                Os Mais Novos
              </button>
            </p>
            <p class="control">
              <button class="button is-info is-outlined" data-filter=".low">
                Menor Preço
              </button>
            </p>
            <p class="control">
              <button class="button is-info is-outlined" data-filter=".high">
                Maior Preço
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns is-flex is-justify-content-center is-flex-wrap-wrap">
        <ProductItem
          v-for="(product, index) in products"
          :item="product"
          :key="index"
        />
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import ProductItem from './ProductItem'
import Pagination from '@/components/utils/Pagination'
import { products } from '../data'
export default {
  name: 'Products',
  components: {
    ProductItem,
    Pagination
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
.info {
  display: flex;
  flex-direction: column;
}
</style>