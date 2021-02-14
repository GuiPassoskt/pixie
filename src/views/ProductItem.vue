<template>
  <div :id="item.id" class="card-item m-3 column is-one-quarter">
    <router-link :to="{ name: 'Product Details', params: { id: item.id } }">
      <div class="info">
        <img :src="require(`@/${item.image}`)" :alt="item.name" />
        <strong>{{ item.name }}</strong>
        <h6>{{ item.price }}</h6>
        <button class="button">Adicionar ao carrinho</button>
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
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  text-align: center;
  a {
    .info {
      img {
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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