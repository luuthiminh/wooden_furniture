import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      count: 0,
      furnitrues: [],
      searchFurnitrue: [],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    // updateSearchTerm(state, term) {
    //   state.searchTerm = term;
    // },
    // updateSearchResults(state, results) {
    //   state.searchResults = results;
    // },
    // updateLoadingState(state, loading) {
    //   state.loading = loading;
    // },
    // updateError(state, error) {
    //   state.error = error;
    // },
    setSearchFurniture(state, results) {
      state.furnitrues = results;
    },
  },
  actions: {
    async searchBooks({ commit }, { keyword }) {
      try {
        const response = await axios.get(
          "customer/furnitures/search?keyword=" + keyword
        );
        if (response.status === 200) {
          this.searchFurnitrue = response.data;
        }

        commit("updateSearchResults", this.searchFurnitrue);
      } catch (error) {
        console.error("Lỗi khi tìm kiếm sách:", error);
      }
    },
  },
});
export default store;
