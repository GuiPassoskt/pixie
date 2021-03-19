<template>
  <div class="single-product">
    <div class="container">
      <div class="col-md-12">
        <div class="section-heading">
          <h1>Detalhes do Produto</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="product-slider">
            <div id="slider" class="flexslider">
              <ul class="slides">
                <li>
                  <transition name="fade">
                    <ImageProduct :image="image" />
                  </transition>
                </li>
              </ul>
            </div>
            <div id="carousel" class="is-clipped">
              <ul class="is-flex is-flex-direction-row slides">
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-01.jpg"
                    class="product-thumb"
                    @click="nextImage(1)"
                  />
                </li>
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-02.jpg"
                    class="product-thumb"
                    @click="nextImage(2)"
                  />
                </li>
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-03.jpg"
                    class="product-thumb"
                    @click="nextImage(3)"
                  />
                </li>
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-04.jpg"
                    class="product-thumb"
                    @click="nextImage(4)"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="right-content">
            <h4 class="title">Single Product Name</h4>
            <h6 class="price">R$ 55.00</h6>
            <p>
              Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus,
              eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi,
              non placerat nibh. Praesent sit amet diam ultrices, commodo turpis
              id, dignissim leo. Suspendisse mauris massa, porttitor non
              fermentum vel, ullamcorper scelerisque velit.
            </p>
            <span>7 left on stock</span>
            <form>
              <div class="columns mt-3">
                <div class="column is-one-quarter">
                  <label for="quantity" class="label">Quantity:</label>
                </div>
                <div class="column">
                  <input
                    name="quantity"
                    type="number"
                    class="input"
                    id="quantity"
                    min="1"
                    value="1"
                  />
                </div>
              </div>
              <div class="is-flex is-justify-content-flex-end">
                <button
                  type="submit"
                  class="button is-dark is-instagram is-outlined"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </form>
            <div class="down-content">
              <div class="is-flex">
                <h6 class="mr-2">Category:</h6>
                <div class="tags">
                  <span class="tag is-info is-light">
                    <a href="#">Pants</a>
                  </span>
                  <span class="tag is-info is-light">
                    <a href="#">Women</a>
                  </span>
                  <span class="tag is-info is-light">
                    <a href="#">Lifestyle</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageProduct from '@/components/utils/Image'
export default {
  name: 'ProductDetails',
  components: {
    ImageProduct
  },
  data() {
    return {
      image: 1
    }
  },
  methods: {
    nextImage(item) {
      this.image = item
    }
  }
}
</script>

<style lang="scss" scoped>
#carousel {
  max-width: 500px;
  overflow: auto;
}

.product-main {
  border-radius: 20px;
}

.product-thumb {
  border-radius: 20px;
}

.price {
  color: tomato;
  font-size: 1.8rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>