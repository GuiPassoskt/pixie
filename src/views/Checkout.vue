<template>
  <div>
    <div class="shipping container">
      <div class="form-holder">
        <form id="shipping-address-form" action="#" method="post">
          <div class="shipping-main">
            <h3>Invoice Address</h3>
            <div class="columns">
              <div class="col-sm-6">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-8">
                <input
                  type="text"
                  name="address-1"
                  placeholder="Address"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  name="address-2"
                  placeholder="Apt, Suit, etc."
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="postalcode"
                  placeholder="Postal Code"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="region"
                  placeholder="Region"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <select
                  name="country"
                  title="Country"
                  required=""
                  class="country selectpicker"
                >
                  <option value="">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                </select>
              </div>
              <div class="col-sm-12">
                <input id="another-address" type="checkbox" />
                <label for="another-address">Different Shipping Address</label>
              </div>
            </div>
          </div>
          <div class="shipping-alternative">
            <h3>Shipping Address</h3>
            <div class="columns">
              <div class="col-sm-6">
                <input
                  type="text"
                  name="sfirstname"
                  placeholder="First Name"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="slastname"
                  placeholder="Last Name"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="email"
                  name="semail"
                  placeholder="Email Address"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="snumber"
                  placeholder="Phone Number"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-8">
                <input
                  type="text"
                  name="saddress-1"
                  placeholder="Address"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  name="saddress-2"
                  placeholder="Apt, Suit, etc."
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="scity"
                  placeholder="City"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="spostalcode"
                  placeholder="Postal Code"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="sregion"
                  placeholder="Region"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <select
                  title="Country"
                  name="scountry"
                  required=""
                  class="country selectpicker"
                >
                  <option value="">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                </select>
              </div>
            </div>
          </div>
          <div class="payment-method">
            <h3>Payment Method</h3>
            <div class="payment-method">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <img
                    src="https://d19m59y37dris4.cloudfront.net/shirt/2-1-1/img/visa.svg"
                    alt="visa"
                    width="50"
                  />
                </li>
                <li class="list-inline-item">
                  <img
                    src="https://d19m59y37dris4.cloudfront.net/shirt/2-1-1/img/mastercard.svg"
                    alt="mastercard"
                    width="50"
                  />
                </li>
                <li class="list-inline-item">
                  <img
                    src="https://d19m59y37dris4.cloudfront.net/shirt/2-1-1/img/amex.svg"
                    alt="amex"
                    width="40"
                  />
                </li>
              </ul>
            </div>
            <div class="columns">
              <div class="col-sm-6">
                <input
                  type="text"
                  name="cardname"
                  placeholder="Name On Card"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  name="cardnumber"
                  placeholder="Card Number"
                  maxlength="14"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  name="expirymonth"
                  placeholder="Expiry Month"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  name="expiryyear"
                  placeholder="Expiry Year"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  maxlength="3"
                  required=""
                  class="input"
                />
              </div>
              <div class="col-sm-4">
                <button
                  id="shipping-submit"
                  type="submit"
                  class="oder-now btn btn-primary btn-template btn-lg"
                >
                  Order Now <i class="icon-shipping-truck"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout'
}
</script>

<style lang="scss" scoped>
</style>