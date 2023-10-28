<template>
  <div class="all">
    <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item">
            <router-link to="customerIndex" class="text-gray-500"
              >Home
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="#"> Shopping Guide</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div class="content px-28 max-md:px-4">
      <div>
        <h1 class="font-semibold py-3 text-xl">
          Instructions for purchasing, shipping, and payment
        </h1>
        <span class="text-base">
          Customers can buy furniture from Luan Len furniture in the following
          forms:
        </span>
        <div class="py-3">
          <h2 class="py-3 font-semibold">
            1. Go directly to the Luan Len Furniture store to view and purchase:
          </h2>
          <ul class="text-base list-outside list-disc px-3">
            <li>
              <div class="flex gap-x-2">
                <p class="">Address:</p>
                <p>
                  Quang Xa village - Quang Hung commune - Phu Cu ward - Hung Yen
                  District
                </p>
              </div>
            </li>
            <li>
              <span
                >The store is large and has a lot of living room furniture
                products (living room tables and chairs, sofas, clocks, TV
                shelves), altar room furniture (altar room models, altar
                cabinets, couplet books), room furniture. dining (table and
                chair set, collapsible), Bedroom furniture (wardrobe, bed,
                makeup shelf)</span
              >
            </li>
            <li>
              <span
                >Customers can easily view and experience testing products,
                compare designs, receive detailed advice on materials and
                designs from designers with many years of experience in the
                profession...</span
              >
            </li>
            <li>
              <span
                >Opening hours are from <b>8:00 am - 18:00 pm</b> every day of
                the week.</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="py-3">
        <h2 class="font-medium py-3 font-semibold">
          2. Buy Online on website, phone
        </h2>
        <ul class="leading-9 text-base list-outside list-disc px-3">
          <li>
            Dear customers, you can view our products and place orders directly
            on our website: L&L.com. The website provides detailed information
            about each product, including images, prices, detailed descriptions,
            and available quantities. In addition, the website also has a
            standout feature that allows you to mix and match furniture
            according to your preferences, helping you find the most suitable
            products for your home.
          </li>
          <li>
            After placing your order, it will be reviewed by the shop owner, and
            the order status will be updated. Due to a high volume of orders,
            there may be situations where we are unable to accept your order,
            but we will make every effort to improve this situation, and we
            appreciate your understanding.
          </li>
          <li>
            After the order is confirmed, we will proceed with a simple and
            convenient delivery and payment process."
          </li>
        </ul>
      </div>
      <div class="pt-3">
        <h2 class="font-medium py-3 font-semibold">
          3. Transportation and Installation
        </h2>
        <ul class="list-outside list-disc px-3">
          <li>
            <h4 class="font-semibold pt-2">Home delivery and installation</h4>
            <span
              >L&L accepts home installation and delivery in the province of
              Hung Yen's districts. Our speedy, elegant, and expert installation
              guarantees that we are a leader in full installation services.
              Typically, L&L oversees and trains delivery and installation
              personnel; they are not employed by middlemen, therefore they are
              well-versed in the abilities and specifications needed for product
              shipping and installation. Get delivery whenever it's convenient
              for you, quick delivery in as little as 30 minutes, based on the
              details of each product and your address - please get in touch
              with us for guidance.</span
            >
          </li>
          <li>
            <h4 class="font-semibold pt-4">Nationwide shipping</h4>
            <span
              >L&L takes truck transportation for clients in outlying provinces.
              Products are packaged with care to ensure their safety during
              long-distance transportation. After the product is disassembled,
              personnel will install it, making sure everything is finished when
              they get it.</span
            >
          </li>
        </ul>
      </div>
      <div class="pt-3">
        <h3 class="pt-3 font-semibold">4. Flexible Payment</h3>
        <span>
          Customers can pay in cash, bank transfer or e-wallets. Cash payment is
          applicable when purchasing at the store or delivering and installing
          to your home</span
        >
        <span>Payment Online VNPAY: L&L Furniture account numbers:</span>
        <ul class="leading-6 list-outside list-disc px-3">
          <li>Bank: Teckcombank</li>
          <li>Branch: Me Tri branch</li>
          <li>Number Account: 19036987159011</li>
          <li>Account: owner Luu Thi Minh</li>
        </ul>
        <span
          >The money transfer content write "name + phone number" for us to
          conveniently check to avoid confusion with other customers.</span
        >
        <span
          >If you have any questions, please contact, hotline: 0398677620</span
        >
        <span>Thank you!</span>
      </div>
      <div class="py-3">
        <h3 class="pt-3 font-semibold">5. Guarantee</h3>
        <span>
          A three-year product warranty is offered by L&L following the date of
          purchase. If termites infest the wood, or if the paint ages or cracks
          while in use, there will be a free warranty. With 12 years of
          experience and a guaranteed reputation, L&L will make sure you have
          the greatest possible shopping experience.
        </span>
        <span>Free consultation and ordering by phone 24/7</span>
        <span>Zalo: +84 98677620</span>
        <span class="text-red-500 font-semibold"
          >Thank you for loving and always supporting L&L</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
span,
li {
  font-weight: 500;
}
span {
  display: block;
  margin-block-start: 1em;
  text-align: justify;
  word-wrap: break-word;
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
}
li {
  /* margin-block-start: 1em; */
  text-align: justify;
  word-wrap: break-word;
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
}
.moon h1,
.moon h2,
.moon h3 {
  /* color: #dd973c; */
  color: #fad5a6;
}
</style>
