<template>
  <div>
    <div class="nav pt-36 mb-2 max-md:pt-24">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
          <li class="breadcrumb-item font-semibold text-yellow-950">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active font-medium" aria-current="page">
            Help Question
          </li>
        </ol>
      </nav>
    </div>
    <div class="max-md:mx-4">
      <div class="mx-28 mb-4">
        <h1 class="font-bold text-lg text-yellow-950 my-4">
          Frequently Asked Questions
        </h1>
        <div>
          <h2 class="font-semibold text-yellow-950 mt-10">
            1. [New Member] Why can't I register to create a Shopee account
            using my phone number?
          </h2>
          <div class="pl-10">
            <div class="mt-2">
              <span>
                In the case that you cannot use your phone number to create a
                new L&L account, it may be because this phone number is
                currently associated with an existing L & L account.
              </span>
              <span
                >Under L&L regulations, <b>a number of phones</b> can only link
                or create <b>a single L & L account</b></span
              >
              <span
                >For the purpose of securing your information and avoiding
                system abuse, L&L may refuse to request an account registration
                with a telephone number or a phone number change for your
                account.</span
              >
            </div>

            <div class="mt-6">
              <h3 class="font-semibold text-yellow-900">
                a. If the account currently linking the phone number is yours
              </h3>
              <span
                >Please check again whether you have previously owned another
                L&L account and/or whether you (or your family/family) have used
                this phone number to link to another L & L account.
              </span>
            </div>
            <div class="mt-6">
              <h3 class="font-semibold text-yellow-900">
                b. If the account is currently associated with a phone number
                that is not yours
              </h3>
              <span
                >Your phone number may have been used to link to an L&L account
                by the previous owner of this phone number. Therefore, the
                information on L&L's system may not be correct with the current
                number owner's information.
              </span>
            </div>
          </div>

          <h2 class="font-semibold text-yellow-950 mt-10">
            2. [Payment/Refund] Buyers Frequently Asked Questions
          </h2>
          <div class="pl-10">
            <div class="mt-6">
              <h3 class="font-semibold text-yellow-900">
                2.1 The buyer may cancel the order only if:
              </h3>
              <span
                >The order is in confirmation status (Seller has not confirmed
                the order) When the order is in waiting condition (the seller is
                packing and preparing to deliver to the shipping unit)
              </span>
            </div>
            <div class="mt-6">
              <h3 class="font-semibold text-yellow-900">
                2.2 The buyer cannot cancel the order if:
              </h3>
              <span
                >Order Delivery System no longer displays buttons Cancel Order
              </span>
            </div>
            <div class="mt-6">
              <div class="flex gap-x-1">
                <i class="bi bi-exclamation-triangle-fill text-yellow-600"></i>
                <p class="font-semibold text-red-600">Note:</p>
              </div>
              <span
                >After the order has been successfully cancelled, the money will
                be refunded to you according to Shopee's Policy depending on the
                payment method you have chosen</span
              >
              <span
                >If your cancelled order is not up to date, please contact
                Shopee Support for advice and support.</span
              >
            </div>
          </div>
          <h2 class="font-semibold text-yellow-950 mt-10">
            3. [Transportation information] How long will the order be
            delivered?
          </h2>
          <div class="pl-10">
            <div class="mt-6 list-inside list-disc">
              <ul class="list-inside list-disc">
                <li>
                  The shipping unit will contact you 2-3 times for delivery. If
                  you are not present at the receiving address when the employee
                  contacts you, you can renegotiate the delivery time with your
                  employee accordingly, but not more than 05 days from the first
                  contact.
                </li>
                <li>
                  If the order is in the same province/city, but has not yet
                  been delivered to you: Please understand, orders will have to
                  be shipped between warehouses. L&L and the Shipping Unit are
                  still trying to deliver to you
                </li>
                <li>
                  In case you need to receive the goods in a short time, you can
                  consider the option of Speed Shipping (provided by GHN
                  carriers). For International orders, please check the order
                  itinerary and expected delivery time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-6 h-56 bg-gray-50">
        <div class="text-center font-bold text-yellow-950 py-6">
          <h3>Would you like to find any more information?</h3>
          <div
            class="grid grid-cols-2 gap-x-4 py-10 mx-64 justify-items-center px-20"
          >
            <div
              class="flex gap-x-3 h-10 text-slate-900 ring-1 ring-yellow-950 items-center px-24 rounded-md"
            >
              <i class="bi bi-telephone-inbound"></i>
              <h4 class="font-semibold text-sm">0398677620</h4>
            </div>
            <div
              class="flex gap-x-3 h-10 text-slate-900 ring-1 ring-yellow-950 items-center px-10 rounded-md"
            >
              <i class="bi bi-envelope-arrow-up"></i>
              <h4 class="font-semibold text-sm">minhltgch20250@fpt.edu.vn</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
span {
  display: block;
  margin-block-start: 1em;
  text-align: justify;
  word-wrap: break-word;
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
}
.list-inside li {
  margin-block-start: 1em;
  text-align: justify;
  word-wrap: break-word;
  font-weight: 500;
  font-size: 15px;
  line-height: 28px;
}
.moon .font-bold.text-lg.text-yellow-950.my-4,
.moon .font-semibold.text-yellow-950.mt-10,
.moon .font-semibold.text-yellow-900 {
  color: wheat;
}
</style>
