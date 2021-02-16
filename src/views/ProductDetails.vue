<template>
  <!-- Page Content -->
  <!-- Single Starts Here -->
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
                  <img src="@/assets/images/big-01.jpg" class="product-main" />
                </li>
                <!-- <li>
                  <img src="@/assets/images/big-02.jpg" />
                </li>
                <li>
                  <img src="@/assets/images/big-03.jpg" />
                </li>
                <li>
                  <img src="@/assets/images/big-04.jpg" />
                </li> -->
                <!-- items mirrored twice, total of 12 -->
              </ul>
            </div>
            <div id="carousel" class="is-clipped">
              <ul class="is-flex is-flex-direction-row slides">
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-01.jpg"
                    class="product-thumb"
                  />
                </li>
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-02.jpg"
                    class="product-thumb"
                  />
                </li>
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-03.jpg"
                    class="product-thumb"
                  />
                </li>
                <li class="m-1">
                  <img
                    src="@/assets/images/thumb-04.jpg"
                    class="product-thumb"
                  />
                </li>
                <!-- items mirrored twice, total of 12 -->
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
            <form action="" method="get">
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
                <button type="submit" class="button is-dark is-outlined">
                  Adicionar ao Carrinho
                </button>
              </div>
            </form>
            <div class="down-content">
              <div class="categories">
                <h6>
                  Category:
                  <span
                    ><a href="#">Pants</a>,<a href="#">Women</a>,<a href="#"
                      >Lifestyle</a
                    ></span
                  >
                </h6>
              </div>
              <div class="share">
                <h6>
                  Share:
                  <span
                    ><a href="#"><i class="icofont-facebook"></i></a
                    ><a href="#"><i class="icofont-linkedin"></i></a
                    ><a href="#"><i class="icofont-twitter"></i></a
                  ></span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Single Page Ends Here -->
</template>

<script>
export default {
  name: 'ProductDetails'
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
}
</style>