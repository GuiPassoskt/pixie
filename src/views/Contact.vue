<template>
  <div class="contact-page mb-4">
    <div class="container">
      <div class="columns">
        <div class="section-heading">
          <div class="line-dec"></div>
          <h1>Contato</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div id="map">
            <!-- How to change your own map point
                           1. Go to Google Maps
                           2. Click on your location point
                           3. Click "Share" and choose "Embed map" tab
                           4. Copy only URL and paste it within the src="" field below
                    -->

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.022689063645!2d-43.98554678546982!3d-19.965548044570788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6962ce8a89cb5%3A0xe21458b5b4186c5e!2sR.%20Ophil%20Ribeiro%2C%20410%20-%20Palmeiras%2C%20Belo%20Horizonte%20-%20MG%2C%2030580-020!5e0!3m2!1spt-BR!2sbr!4v1613405443485!5m2!1spt-BR!2sbr"
              width="100%"
              height="500px"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="column">
          <div class="right-content">
            <div class="container">
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="field">
                      <label class="label">Nome:</label>
                      <input
                        name="name"
                        type="text"
                        class="input"
                        id="name"
                        placeholder="Your name..."
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="field">
                      <label class="label">E-mail:</label>
                      <input
                        name="email"
                        type="text"
                        class="input"
                        id="email"
                        placeholder="Your email..."
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="field">
                      <label class="label">Assunto:</label>
                      <input
                        name="subject"
                        type="text"
                        class="input"
                        id="subject"
                        placeholder="Subject..."
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="field">
                      <label class="label">Mensagem:</label>
                      <textarea
                        name="message"
                        rows="6"
                        class="input"
                        id="message"
                        placeholder="Your message..."
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="field">
                      <button type="submit" class="button mt-3 mb-3">
                        Enviar
                      </button>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="share">
                      <h6>
                        Pode nos contactar também por nossas redes sociais:
                      </h6>
                      <div class="mt-4">
                        <a href="#"><i class="icofont-facebook"></i></a>
                        <a href="#"><i class="icofont-linkedin"></i></a>
                        <a href="#"><i class="icofont-twitter"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.share {
  div a {
    margin: 10px;
    padding: 10px 15px;
    background-color: #ccc;
    border-radius: 50%;
    color: #7a7a7a;
    text-align: center;
  }
}
</style>