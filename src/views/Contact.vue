<template>
  <div class="contact-page">
    <div class="container">
      <div class="col-md-12">
        <div class="section-heading">
          <div class="line-dec"></div>
          <h1>Contact Us</h1>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
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
                      <label class="label">Name:</label>
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
                      <label class="label">Subject:</label>
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
                      <label class="label">Message:</label>
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
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="share">
                      <h6>
                        You can also keep in touch on:
                        <span
                          ><a href="#"><i class="fa fa-facebook"></i></a
                          ><a href="#"><i class="fa fa-linkedin"></i></a
                          ><a href="#"><i class="fa fa-twitter"></i></a
                        ></span>
                      </h6>
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
  span a {
    margin: 10px;
    padding: 10px 15px;
    background-color: #ccc;
    border-radius: 50%;
    color: #7a7a7a;
    text-align: center;
  }
}
</style>