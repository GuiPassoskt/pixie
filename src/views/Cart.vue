<template>
  <div class="container">
    <div class="section-heading">
      <div class="line-dec"></div>
      <h1>Meu Carrinho</h1>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <section class="cart mb-6">
      <div class="container">
        <div class="columns">
          <div class="column is-full">
            <div class="grid grid-header">
              <div>Produto</div>
              <div>Preço</div>
              <div>Quantidade</div>
              <div>Total</div>
            </div>
            <div class="grid grid-product mt-2">
              <div class="is-flex is-justify-content-space-between">
                <img
                  src="~@/assets/images/product-07.jpg"
                  alt="t-shirt"
                  class="product-image mb-2"
                />

                <div
                  class="is-flex is-flex-direction-column is-justify-content-center"
                >
                  <h3 class="is-size-4 has-text-weight-semibold">
                    Elegant Gray
                  </h3>
                  <p class="has-text-grey">X-Large</p>
                </div>
              </div>
              <div class="flex-center">
                <h3 class="is-size-5">R$70.00</h3>
              </div>
              <div class="flex-center">
                <div class="flex-quantity">
                  <button
                    class="button is-dark is-small is-outlined"
                    @click="remover"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    type="text"
                    class="input is-dark is-small"
                    v-model="quantidade"
                    style="width: 80px; text-align: center"
                  />
                  <button
                    class="button is-dark is-small is-outlined"
                    @click="adicionar"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>

              <div class="flex-center">
                <h3>Total:</h3>
                <h2 class="text-primary">R$70.00</h2>
              </div>
            </div>
            <div class="grid">
              <span></span>
              <span></span>
              <span></span>
              <span class="total">
                <strong class="is-size-4">Total:</strong>
                <strong class="has-text-info is-size-4"> R$ 70.00 </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      quantidade: 1
    }
  },
  methods: {
    adicionar() {
      this.quantidade++
    },
    remover() {
      if (this.quantidade != 0) {
        this.quantidade--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.grid-header {
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding: 15px;
  font-weight: 400;
  font-size: 1.3rem;
  div {
    text-align: center;
  }
}
.grid-product {
  border-bottom: 1px solid;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
}
.product-image {
  max-width: 100px;
  border-radius: 5px;
}
.total {
  text-align: center;
}
</style>