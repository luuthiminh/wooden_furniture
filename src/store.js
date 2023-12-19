import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      count: 0,
      furnitures: [],
      searchFurniture: [],
      searchMaterial: [],
      searchRepos: [],
      furnitureOrder: [],
      customizeFurnitureIdList: [],
      order: [],
      customOrder: 0,
      cartId: [],
      provinceCode: 0,
      districtCode: 0,
      wardCode: 0,
      methodDeliveries: [],
      shipCost: 0,
      urlPaymentOline: "",
      address: [],
      checkOutNow: [],
      checkOutCart: [],
      cartIdList: [],
      urls: [],
      provinces: [],
      districts: [],
      wards: [],
      valuesProvince: [],
      valuesDistrict: [],
      valuesWard: [],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setSearchFurniture(state, results) {
      state.searchFurniture = results;
    },
    setSearchMaterial(state, results) {
      state.searchMaterial = results;
    },
    setSearchReposAssistant(state, results) {
      state.searchRepos = results;
    },
    handleCartId(state, or) {
      if (or.isSelected) {
        state.furnitureOrder.push(or.customizeFurnitureId);
        state.customizeFurnitureIdList.push(or.customizeFurnitureId);
      } else {
        state.furnitureOrder.splice(or);
        state.customizeFurnitureIdList.splice(or);
      }
    },
    handleCartIdtoCart(state, furniture) {
      if (furniture.isSelected) {
        state.furnitureOrder.push(furniture.furnitureId);
        state.cartIdList.push(furniture.cartDetailId);
      } else {
        state.furnitureOrder.splice(furniture);
        state.cartIdList.splice(furniture);
      }
      console.log(state.cartIdList);
    },
    setCheckOutOrder(state, results) {
      state.order = results;
    },
    setCheckOutOrderNow(state, results) {
      state.checkOutNow = results;
    },
    setCheckOutOrderCart(state, results) {
      state.checkOutCart = results;
    },
    setSumCustomOrder(state, results) {
      state.customOrder = results;
    },
    setProvinceCode(state, results) {
      state.provinceCode = results;
    },
    setDistrictCode(state, results) {
      state.districtCode = results;
    },
    setWardCode(state, results) {
      state.wardCode = results;
    },
    setMethodDeleveries(state, results) {
      state.methodDeliveries = results;
    },
    setShipCost(state, results) {
      state.shipCost = results;
    },
    setUrlPaymentOnline(state, results) {
      state.urlPaymentOline = results;
    },
    setAddess(state, results) {
      state.address = results;
    },
    getAllFurnitures(state, results) {
      state.furnitures = results;
    },
    getProvices(state, results) {
      state.provinces = results;
    },
    getDistricts(state, results) {
      state.districts = results;
    },
    getWards(state, results) {
      state.wards = results;
    },
    setValueProvince(state, results) {
      state.valuesProvince = results;
    },
    setValueDistrict(state, results) {
      state.valuesDistrict = results;
    },
    setValueWard(state, results) {
      state.valuesWard = results;
    },
  },
  actions: {
    async getFurnitures({ commit }) {
      try {
        const response = await axios.get("customer/furnitures");
        commit("getAllFurnitures", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async searchFurnitures({ commit }, { keyword }) {
      try {
        const response = await axios.get(
          "customer/furnitures/search?keyword=" + keyword
        );
        if (response.status === 200) {
          commit("setSearchFurniture", response.data);
        }
      } catch (error) {
        console.error("Search Error:", error);
      }
    },
    async searchMaterialAssistant({ commit }, { keyword }) {
      try {
        const response = await axios.get(
          "assistant/shop-data/materials/search?searchString=" + keyword
        );
        if (response.status === 200) {
          commit("setSearchMaterial", response.data);
        }
      } catch (error) {
        console.error("Search Error:", error);
      }
    },
    async searchReposAssistant({ commit }, { keyword }) {
      try {
        const response = await axios.get(
          "assistant/warehouse/repositories/search?searchString=" + keyword
        );
        if (response.status === 200) {
          commit("setSearchReposAssistant", response.data);
        }
      } catch (error) {
        console.error("Search Error:", error);
      }
    },
    async handleCheckOut({ commit, state, dispatch }) {
      for (let i = 0; i < state.customizeFurnitureIdList.length; i++) {
        if (i === state.customizeFurnitureIdList.length) {
          state.cartId = state.cartId.concat(
            `customizeFurnitureIdList=${state.customizeFurnitureIdList[i]}`
          );
        } else {
          state.cartId = state.cartId.concat(
            `customizeFurnitureIdList=${state.customizeFurnitureIdList[i]}&`
          );
        }
      }
      try {
        const response = await axios.get(
          `customer/checkout-customize-furniture?${state.cartId}`
        );
        if (response.status === 200) {
          commit("setCheckOutOrder", response.data);
          commit("setSumCustomOrder", response.data.items);
          let deliveryAddress = response.data.deliveryAddress;
          let address = deliveryAddress.split(",");
          let ward = address[1].trim();
          let district = address[2].trim();
          let province = address[3].trim();
          await dispatch("getProvinceCode", province);
          await dispatch("getDistrictCode", district);
          await dispatch("getWardCode", ward);
          await dispatch("getAvailableServices");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async handleCheckOutOtherAddress(
      { commit, state, dispatch },
      { province, district, ward }
    ) {
      for (let i = 0; i < state.customizeFurnitureIdList.length; i++) {
        if (i === state.customizeFurnitureIdList.length) {
          state.cartId = state.cartId.concat(
            `customizeFurnitureIdList=${state.customizeFurnitureIdList[i]}`
          );
        } else {
          state.cartId = state.cartId.concat(
            `customizeFurnitureIdList=${state.customizeFurnitureIdList[i]}&`
          );
        }
      }
      try {
        const response = await axios.get(
          `customer/checkout-customize-furniture?${state.cartId}`
        );
        if (response.status === 200) {
          commit("setCheckOutOrder", response.data);
          commit("setSumCustomOrder", response.data.items);
          await dispatch("getProvinceCode", province);
          await dispatch("getDistrictCode", district);
          await dispatch("getWardCode", ward);
          await dispatch("getAvailableServices");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async handleCheckOutNow({ commit, dispatch }, { fur, quantity }) {
      try {
        const response = await axios.get(
          "customer/checkout-now?furnitureSpecificationId=" +
            fur.furnitureSpecificationId +
            "&quantity=" +
            quantity
        );
        if (response.status === 200) {
          commit("setCheckOutOrderNow", response.data);
          // commit("setSumCustomOrder", response.data.items);
          let deliveryAddress = response.data.deliveryAddress;
          let address = deliveryAddress.split(",");
          let ward = address[1].trim();
          let district = address[2].trim();
          let province = address[3].trim();
          await dispatch("getProvinceCode", province);
          await dispatch("getDistrictCode", district);
          await dispatch("getWardCode", ward);
          await dispatch("getAvailableServices");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async HandleCheckoutCart({ commit, state, dispatch }) {
      for (let i = 0; i < state.cartIdList.length; i++) {
        if (i === state.cartIdList.length) {
          state.cartId = state.cartId.concat(
            `cartIdList=${state.cartIdList[i]}`
          );
        } else {
          state.cartId = state.cartId.concat(
            `cartIdList=${state.cartIdList[i]}&`
          );
        }
      }
      try {
        const response = await axios.get(
          `customer/checkout-via-cart?${state.cartId}`
        );
        if (response.status === 200) {
          commit("setCheckOutOrderCart", response.data);
          commit("setSumCustomOrder", response.data.items);
          let deliveryAddress = response.data.deliveryAddress;
          let address = deliveryAddress.split(",");
          let ward = address[1].trim();
          let district = address[2].trim();
          let province = address[3].trim();
          await dispatch("getProvinceCode", province);
          await dispatch("getDistrictCode", district);
          await dispatch("getWardCode", ward);
          await dispatch("getAvailableServices");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getProvinceCode({ commit }, province) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
          }
        );

        let provinceList = response.data.data;
        let proviceCode = 0;
        for (let i = 0; i < provinceList.length; i++) {
          if (provinceList[i].ProvinceName === province) {
            proviceCode = provinceList[i].ProvinceID;
            break;
          }
        }
        console.log(proviceCode);
        commit("setProvinceCode", proviceCode);
      } catch (error) {
        console.error(error);
      }
    },
    async getDistrictCode({ commit, state }, district) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              province_id: state.provinceCode,
            },
          }
        );

        let districtList = response.data.data;
        let districtCode = 0;
        for (let i = 0; i < districtList.length; i++) {
          if (districtList[i].DistrictName === district) {
            districtCode = districtList[i].DistrictID;
            break;
          }
        }
        console.log(districtCode);
        commit("setDistrictCode", districtCode);
      } catch (error) {
        console.error(error);
      }
    },
    async getWardCode({ commit, state }, ward) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              district_id: state.districtCode,
            },
          }
        );

        let wardList = response.data.data;
        let wardCode = 0;
        for (let i = 0; i < wardList.length; i++) {
          if (wardList[i].WardName === ward) {
            wardCode = wardList[i].WardCode;
            break;
          }
        }
        commit("setWardCode", wardCode);
        console.log(wardCode);
      } catch (error) {
        console.error(error);
      }
    },
    async getAvailableServices({ commit, state }) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              shop_id: 4710217,
              from_district: 2194,
              to_district: state.districtCode,
            },
          }
        );
        commit("setMethodDeleveries", response.data);
      } catch (e) {
        console.error(e);
      }
    },
    async CalculateDeliveryFee({ commit, state }, e) {
      let service_id = e.target.value;
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
              shop_id: 4710217,
            },
            params: {
              from_district_id: 2194,
              from_ward_code: "220710",
              service_id: service_id,
              to_district_id: state.districtCode,
              to_ward_code: state.wardCode,
              height: 50,
              length: 20,
              width: 20,
              weight: 50,
              coupon: null,
            },
          }
        );
        commit("setShipCost", response.data.data.service_fee);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    },
    async getProvices({ commit }) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
          }
        );
        commit("getProvices", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async handleDistrict({ commit }, { e, province }) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              province_id: province,
            },
          }
        );
        commit("getDistricts", response.data);
        commit(
          "setValueProvince",
          e.target.options[e.target.options.selectedIndex].text
        );
      } catch (error) {
        console.error(error);
      }
    },
    async handleWard({ commit }, { e, district }) {
      try {
        const response = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
          {
            headers: {
              token: "8644b872-8774-11ee-96dc-de6f804954c9",
            },
            params: {
              district_id: district,
            },
          }
        );
        commit("getWards", response.data);
        commit(
          "setValueDistrict",
          e.target.options[e.target.options.selectedIndex].text
        );
      } catch (error) {
        console.error(error);
      }
    },
    HandleChooseWard({ commit }, e) {
      commit(
        "setValueWard",
        e.target.options[e.target.options.selectedIndex].text
      );
    },
  },
});
export default store;
