<template>
  <div id="v-carousel">
    <div class="card-carousel-wrapper">
      <div
        class="card-carousel--nav__left"
        @click="moveCarousel(-1)"
        :disabled="atHeadOfList"
      ></div>
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div
            class="card-carousel-cards"
            :style="{
              transform: 'translateX' + '(' + currentOffset + 'px' + ')'
            }"
          >
            <div class="card-item m-2" v-for="item in items" :key="item.name">
              <router-link to="/">
                <div class="info">
                  <img
                    :src="require(`@/${item.image}`)"
                    :style="{ background: setBg(item.id) }"
                  />

                  <p class="product-title">{{ item.name }}</p>
                  <h6 class="mt-2 mb-2">{{ item.price }}</h6>
                  <button class="button is-dark is-outlined">
                    Adicionar ao carrinho
                  </button>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card-carousel--nav__right"
        @click="moveCarousel(1)"
        :disabled="atEndOfList"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel2',
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      items: [
        {
          id: 1,
          name: 'Kin Khao',
          price: 10.59,
          image: 'assets/images/product-07.jpg'
        },
        {
          id: 2,
          name: 'Jū-Ni',
          price: 10.59,
          image: 'assets/images/product-08.jpg'
        },
        {
          id: 3,
          name: 'Delfina',
          price: 10.59,
          image: 'assets/images/product-07.jpg'
        },
        {
          id: 4,
          name: 'San Tung',
          price: 10.59,
          image: 'assets/images/product-08.jpg'
        },
        {
          id: 5,
          name: 'Anchor Oyster Bar',
          price: 10.59,
          image: 'assets/images/product-07.jpg'
        },
        {
          id: 6,
          name: 'Locanda',
          price: 10.59,
          image: 'assets/images/product-08.jpg'
        },
        {
          id: 7,
          name: 'Garden Creamery',
          price: 10.59,
          image: 'assets/images/product-07.jpg'
        }
      ]
    }
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      )
    },
    atHeadOfList() {
      return this.currentOffset === 0
    }
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    },
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
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: gray;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 1000px;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid var(--royal);
    border-right: 2px solid var(--royal);
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
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
}
</style>