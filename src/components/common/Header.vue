<template>
  <div>
    <PreHeader />
    <nav class="border-bottom">
      <div class="flex-logo">
        <router-link :to="{ name: 'Home' }" class="nav-brand">
          <!-- <img src="@/assets/images/header-logo.png" alt="logo" v-if="1 == 2" /> -->
          <span class="logo"> Alforje </span>
        </router-link>
      </div>
      <div class="container is-flex is-justify-content-space-between">
        <ul class="is-flex is-justify-content-center">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'products' }" class="nav-link">
              Produtos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">
              Sobre
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link">
              Contato
            </router-link>
          </li>
        </ul>
        <div class="is-flex is-align-content-center">
          <router-link class="button is-white" :to="{ name: 'Cart' }">
            <i class="is-size-3 has-text-black icon-cart-1"></i>
            <span class="itens-cart">1</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import PreHeader from './PreHeader'
export default {
  name: 'Header',
  components: {
    PreHeader
  }
}
</script>

<style lang="scss" scoped>
.flex-logo {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #f2f2f2;
}
ul > li > a {
  text-transform: uppercase;
  font-weight: 500;
  color: #333;
}
.router-link-exact-active {
  color: #3a8bcd !important;
}
.nav-item {
  margin: 10px 20px;
}
.border-bottom {
  border-bottom: 1px solid #f2f2f2;
}
.logo {
  color: #000;
  font-size: 32px;
  font-family: 'Kaushan Script', cursive;
  font-family: 'Bad Script', cursive;
}
.icofont-cart {
  line-height: normal;
}
.itens-cart {
  background: var(--royal);
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  position: absolute;
  top: -6px;
  right: 5px;
}
</style>
