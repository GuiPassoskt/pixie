<template>
  <div>
    <Subscribe />
    <div class="footer">
      <div class="logo">
        <img src="@/assets/images/header-logo.png" alt="logo" />
      </div>
      <div class="footer-menu">
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Help' }">Help</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Privacy Policy' }"
              >Privacy Policy</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'How It Works' }"
              >How It Works ?</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Contact Us' }">Contact Us</router-link>
          </li>
        </ul>
      </div>
      <div class="social-icons mt-6">
        <ul class="is-flex">
          <li>
            <router-link :to="{ name: '' }">
              <i class="fa fa-facebook"></i>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: '' }">
              <i class="fa fa-twitter"></i>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: '' }">
              <i class="fa fa-linkedin"></i>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: '' }">
              <i class="fa fa-rss"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="sub-footer">
      <p>
        Copyright &copy; 2019 Company Name - Design:
        <a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a>
      </p>
    </div>
  </div>
</template>

<script>
import Subscribe from './Subscribe'
export default {
  name: 'Footer',
  components: {
    Subscribe
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .logo {
    margin-bottom: 30px;
  }
  .footer-menu ul {
    display: flex;
    li a {
      color: #7a7a7a;
      font-size: 0.8rem;
      text-transform: uppercase;
      margin: 10px;
    }
  }
  .social-icons ul {
    li a {
      margin: 10px;
      padding: 10px 15px;
      background-color: #ccc;
      border-radius: 50%;
      color: #7a7a7a;
      text-align: center;
    }
  }
}
.sub-footer {
  border-top: 1px solid #eee;
  text-align: center;
  font-size: 12px;
  width: 100vw;
  color: #7a7a7a;
  padding: 20px;
}
</style>