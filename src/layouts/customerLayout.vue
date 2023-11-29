<template>
  <header-cus class="" />
  <div v-show="isNavBar">
    <div class="bg-black h-96 w-32"></div>
  </div>
  <!-- <div v-if="furnitureSearch.length">
    <search-result :furnitureSearch="furnitureSearch"></search-result>
  </div> -->
  <!-- <div v-else> -->
  <slot />
  <!-- </div> -->
  <footer>
    <div class="footer w-full">
      <div class="background w-full">
        <div
          class="grid grid-cols-4 text-center gap-52 pt-3 mx-32 max-sm:grid max-sm:grid-cols-2 max-sm:gap-10 max-sm:mx-3 max-md:gap-10 max-md:mx-3"
        >
          <div>
            <i class="fa-solid fa-truck-fast text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">FreeShip</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
          <div>
            <i class="fa-solid fa-headphones text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">Delivery</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
          <div>
            <i class="fa-solid fa-shield-halved text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">Support</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
          <div>
            <i class="fa-solid fa-gift text-2xl"></i>
            <br />
            <p class="my-1 font-semibold">Gift</p>
            <p class="text-sm">within a radius of 30km</p>
          </div>
        </div>
        <div
          class="grid grid-cols-2 gap-2 max-sm:block max-sm:px-5 max-sm:mt-10 max-md:mt-10"
        >
          <div id="map">
            <iframe
              class="w-11/12 h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7462.013833373825!2d106.19338085869137!3d20.750513747007744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313595ac6b092eff%3A0x85dd1b5c537027d0!2zUXVhbmcgSMawbmcsIFBow7kgQ-G7qyBEaXN0cmljdCwgSHVuZyBZZW4sIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1692044358229!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="info_contact leading-10 mt-11">
            <h1 class="font-semibold text-lg text">Shop Information</h1>
            <span class="font-semibold">Address: </span>
            <span>Quang Hung-Phu cu-Hung Yen</span>
            <br />
            <span class="font-semibold">Tel: </span>
            <span>0398677620</span>
            <br />
            <span class="font-semibold">Email: </span>
            <span>minhltgch200250@fpt.edu.vn</span>
            <br />
            <span class="font-semibold">Facebook: </span>
            <span>
              https://www.facebook.com/groups/677935762658362/user/100052778502317/
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
// import axios from "axios";
import HeaderCus from "@/components/HeaderCustomer.vue";

export default {
  components: {
    HeaderCus,
  },
  data() {
    return {
      keyword: "",
      furnitureSearch: [],
      notifications: [],
    };
  },
  created() {
    // this.getAllAnnouncements();
  },
  methods: {
    // async search() {
    //   try {
    //     const response = await axios.get(
    //       "customer/furnitures/search?keyword=" + this.keyword
    //     );
    //     if (response.status === 200) {
    //       this.furnitureSearch = response.data;
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     // alert("Furniture not found!");
    //   }
    // },
    // clear() {
    //   this.keyword = "";
    //   this.furnitureSearch = "";
    // },
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
    handleLogout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    handelBell() {
      this.isBell = !this.isBell;
    },
    // async getAllAnnouncements() {
    //   try {
    //     const response = await axios.get("customer/announcements");
    //     if (response.status === 200) {
    //       this.notifications = response.data;
    //       console.log(this.allAnnouncements);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     // alert("Furniture not found!");
    //   }
    // },
    // darkMode() {
    //   if (localStorage.theme === "dark") {
    //     this.isDark = true;
    //   } else if (localStorage.theme === "light") {
    //     this.isDark = false;
    //   }
    // },
  },
  mounted() {},
};
</script>
<style scoped>
.header {
  background-color: white;
}
.moon .header {
  background-color: #3e3d3d;
  /* background-color: #3b3a3a; */
}
.footer {
  position: relative;
  color: rgb(220, 210, 210);
  background: rgba(0, 0, 0, 0.7);
}
.footer h1 {
  color: rgb(220, 210, 210);
}
.footer::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: url("@/assets/images/footer.png");
  background-size: cover;
  opacity: 0.3;
  height: 27rem;
}
.textContent p {
  text-align: justify;
}
/* message */
</style>
