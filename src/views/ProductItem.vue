<template>
  <div :id="item.id" class="card-item m-3 column is-one-quarter">
    <router-link :to="{ name: 'Product Details', params: { id: item.id } }">
      <div class="info">
        <img
          :src="require(`@/${item.image}`)"
          :alt="item.name"
          :style="{ background: setBg(item.id) }"
        />
        <div class="product-title">{{ item.name }}</div>
        <h6 class="mt-2 mb-2">{{ item.price }}</h6>
        <button class="button is-dark is-outlined">
          Adicionar ao carrinho
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    setBg(item) {
      if (item % 2 == 0) {
        return '#dbdbdb'
      } else {
        return '#e1d7d5'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  text-align: center;
  a {
    .info {
      .product-title {
        color: #363636;
        font-size: 16px;
        font-weight: 700;
      }
      img {
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        height: 300px;
        object-fit: contain;
        background-color: #000;
      }
      strong {
        color: #000;
      }
      h6 {
        color: tomato;
      }
      button {
        text-transform: uppercase;
        font-size: 0.8rem;
      }
    }
  }
}
</style>