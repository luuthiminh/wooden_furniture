<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 ml-4 font-medium">
          <li class="breadcrumb-item text-sm font-semibold">
            <router-link to="/indexAssistant">Home</router-link>
          </li>
          <li class="breadcrumb-item text-sm active" aria-current="page">
            Manage Furniture
          </li>
        </ol>
      </nav>
    </div>
    <div class="font-semibold text-lg ml-4 pt-4">All Furniture</div>
    <div class="content_table pt-6 px-6 scroll">
      <div class="py-4">
        <table
          v-if="searchResults.length"
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead class="table-light">
            <tr class="text-sm text-center">
              <th scope="col">Furniture</th>
              <th></th>
              <th scope="col">Collection</th>
              <th scope="col">Category</th>
              <th scope="col">Label</th>
              <th scope="col">Sold</th>
              <th scope="col">Appropriate Room</th>
              <th scope="col">Vote Star</th>
              <th scope="col">Avaliable</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody v-if="searchResults.length">
            <tr
              class="text-sm"
              v-for="furniture in searchResults"
              :key="furniture.furnitureId"
            >
              <td class="img">
                <img :src="furniture.image" alt="furniture" class="w-20" />
              </td>
              <td class="text-start">
                <span class="font-semibold block">{{
                  furniture.furnitureName
                }}</span>
                <span class="text-xs">{{ furniture.furnitureId }}</span>
              </td>
              <td>{{ furniture.collection }}</td>
              <td>{{ furniture.category }}</td>
              <td>{{ furniture.label }}</td>
              <td>{{ furniture.sold }}</td>
              <td>{{ furniture.appropriateRoom }}</td>
              <td>{{ furniture.voteStar }}</td>
              <td>{{ furniture.available }}</td>
              <td>{{ furniture.price }}</td>
            </tr>
          </tbody>
        </table>
        <table
          v-else
          class="table table-borderless text-yellow-950 font-medium text-center"
        >
          <thead class="table-light">
            <tr class="text-sm text-center">
              <th scope="col">Furniture</th>
              <th></th>
              <th scope="col">Collection</th>
              <th scope="col">Category</th>
              <th scope="col">Label</th>
              <th scope="col">Sold</th>
              <th scope="col">Appropriate Room</th>
              <th scope="col">Vote Star</th>
              <th scope="col">Avaliable</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody v-if="furnitures.length">
            <tr
              class="text-sm"
              v-for="furniture in furnitures"
              :key="furniture.furnitureId"
            >
              <td class="img">
                <img :src="furniture.image" alt="furniture" class="w-20" />
              </td>
              <td class="text-start">
                <span class="font-semibold block">{{
                  furniture.furnitureName
                }}</span>
                <span class="text-xs">{{ furniture.furnitureId }}</span>
              </td>
              <td>{{ furniture.collection }}</td>
              <td>{{ furniture.category }}</td>
              <td>{{ furniture.label }}</td>
              <td>{{ furniture.sold }}</td>
              <td>{{ furniture.appropriateRoom }}</td>
              <td>{{ furniture.voteStar }}</td>
              <td>{{ furniture.available }}</td>
              <td>{{ furniture.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  components: {
    // modal,
  },
  data() {
    return {
      isShowFurnitureSpecification: false,
      isEditModal: false,
      furnitureModel: [],
      isAddFurniture: false,
    };
  },
  created() {
    this.$store.dispatch("getFurnitures");
  },
  methods: {},
  computed: {
    furnitures() {
      return this.$store.state.furnitures;
    },
    searchResults() {
      return this.$store.state.searchFurniture;
    },
  },
};
</script>
<style scoped>
.button {
  --main-focus: #2d8cf0;
  --font-color: #dedede;
  --bg-color-sub: #222;
  --bg-color: #323232;
  --main-color: #dedede;
  position: relative;
  width: 140px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
}

.button,
.button__icon,
.button__text {
  transition: all 0.3s;
}

.button .button__text {
  transform: translateX(20px);
  color: var(--font-color);
  font-weight: 600;
}

.button .button__icon {
  position: absolute;
  transform: translateX(96px);
  height: 100%;
  width: 39px;
  background-color: var(--bg-color-sub);
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 20px;
  stroke: var(--main-color);
}

.button:hover {
  background: var(--bg-color);
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

.button:active {
  transform: translate(3px, 3px);
  box-shadow: 0px 0px var(--main-color);
}

.button_addfurniture {
  background-color: rgb(8, 129, 8);
}
.button_addfurniture:hover {
  background-color: rgb(17, 156, 17);
}

.modal_uploadfile {
  border-radius: 1em;
  box-shadow: 0px 100px 48px -60px rgba(0, 0, 0, 0.1);
  color: rgb(15, 14, 14);
  max-width: 359px;
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  border: 1px solid #c7c3c3;
}

.modal_uploadfile .content > *,
.modal_uploadfile > * {
  padding: 0.6em;
}

.modal_uploadfile .title {
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.2;
  display: flex;
  justify-content: center;
}

.modal_uploadfile .message {
  line-height: 1.2;
  text-align: center;
  font-size: 89%;
}

.modal_uploadfile .actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.modal_uploadfile .upload-btn {
  height: 10%;
  background-color: transparent;
  border: 0.125rem dashed hsla(223, 10%, 50%, 0.4);
  flex: 1;
  padding: 0.375rem 2rem;
}

.modal_uploadfile .upload-btn:hover {
  background-color: hsla(223, 10%, 60%, 0.2);
}

.modal_uploadfile .result {
  margin-top: 4px;
  background-color: rgba(0, 140, 255, 0.062);
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 1em;
  margin-bottom: 10px;
}

.modal_uploadfile .file-uploaded {
  font-weight: 300;
}

.modal_uploadfile .file-uploaded::before {
  position: absolute;
  content: "X";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(26, 7, 1, 0.212);
  height: 27px;
  width: 27px;
  border-radius: 50%;
  right: 10px;
  top: 5px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}

.modal_uploadfile .file-uploaded:hover::before {
  background-color: rgba(233, 40, 6, 0.664);
}

/* table */
tr {
  border-bottom: 1px solid #ededed;
}
.table {
  font-size: 0.9rem !important;
}
th {
  font-weight: 600;
}
.avatar {
  width: 61px;
  margin-top: -8px;
}
td {
  padding-top: 3em;
  padding-bottom: 1em;
}
.user {
  margin-top: -10px;
}
.td_action {
  padding-top: 2.2em;
}
.pt-6.px-6.scroll {
  overflow: scroll;
  height: 35em;
  overflow-x: hidden;
}
.pt-6.px-6.scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
.pt-6.px-6.scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.pt-6.px-6.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
td img {
  margin-top: -18px;
}
</style>
