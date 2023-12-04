<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4">
          <li class="breadcrumb-item font-semibold"><a href="#">Home</a></li>

          <li class="breadcrumb-item font-medium active" aria-current="page">
            Feedback
          </li>
        </ol>
      </nav>
    </div>
    <div class="px-7">
      <h1 class="font-semibold text-xl py-6">All Feedback</h1>
      <div class="flex gap-x-40 pt-10">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="gap-x-2 font-semibold">Total Feedbacks:</p>
          {{ feedbacks.length }}
        </div>
      </div>
      <div class="content_table scroll">
        <div class="pt-10">
          <table
            v-if="feedbacks.length"
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Order ID</th>
                <th scope="col">Furniture Specification Name</th>
                <th scope="col">Content</th>
                <th scope="col">Vote Star</th>
                <th scope="col">CreationDate</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody v-for="f in feedbacks" :key="f.feedbackId">
              <tr class="text-sm">
                <th scope="row">{{ f.feedbackId }}</th>
                <td>{{ f.customerName }}</td>
                <td>{{ f.orderId }}</td>
                <td>{{ f.furnitureSpecificationName }}</td>
                <td>{{ f.content }}</td>
                <td>{{ f.voteStar }}</td>
                <td>{{ f.creationDate }}</td>
                <td>
                  <button
                    class="button_delete ring-offset-2 ring-2 ring-red-300 hover:ring-red-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('delete', l)"
                  >
                    <span class="button__text text-xs">Delete</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path
                          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                          x1="80"
                          x2="432"
                          y1="112"
                          y2="112"
                        ></line>
                        <path
                          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="256"
                          x2="256"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="184"
                          x2="192"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="328"
                          x2="320"
                          y1="176"
                          y2="400"
                        ></line></svg
                    ></span>
                  </button>
                </td>
                <modal
                  v-if="modalType == 'delete'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div class="flex items-center text-lg font-semibold">
                      Delete
                    </div>
                  </template>
                  <template v-slot:body>
                    <p class="text-base py-3">
                      Are you sure detete <b> {{ nameLabelModal }}</b
                      >?
                    </p>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-red-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        @click="HandleDelete"
                      >
                        Delete
                      </span>
                    </div>
                  </template>
                </modal>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import modal from "@/components/ModalPage.vue";
import { format } from "date-fns";
export default {
  components: {
    modal,
  },
  data() {
    return {
      modalType: null,
      feedbacks: [],
      nameLabelModal: null,
      idLabelModal: null,
      isSuccess: false,
    };
  },
  created() {
    this.getAllFeedback();
  },
  methods: {
    async getAllFeedback() {
      try {
        const response = await axios.get("assistant/feedbacks");
        this.feedbacks = response.data;
        for (let i = 0; i < this.feedbacks.length; i++) {
          const date = new Date(this.feedbacks[i].creationDate);
          this.feedbacks[i].creationDate = format(date, "dd/MM/yyyy");
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type) {
      this.modalType = type;
    },
    closeModal() {
      this.modalType = null;
    },
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "Assistant/shop-data/labels/remove/" + this.idLabelModal
        );
        if (response.status === 204) {
          this.modalType = null;
          this.isSuccess = true;
          alert("Delete was successful!");
        } else {
          this.isSuccess = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
tr {
  border-bottom: 1px solid #ededed;
}
.table {
  font-size: 0.9rem !important;
}
th {
  font-weight: 600;
}
td {
  padding-top: 0.7em;
  padding-bottom: 0.7em;
}

.search {
  --input-line: #cccccc;
  --input-text-color: #808080;
  --input-text-hover-color: transparent;
  --input-border-color: #808080;
  --input-border-hover-color: #999999;
  --border-radius: 5px;
  --transition-cubic-bezier: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 20em;
}

.search-box {
  height: 35px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background: var(--input-bg-color);
  box-shadow: 0 0 2px rgb(0 0 0 / 26%);
  transition: var(--transition-cubic-bezier);
}

.search-box:hover {
  border-color: var(--input-border-hover-color);
}

/*Section input*/
.search-field {
  position: relative;
  width: 100%;
  height: 100%;
  left: -5px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: transparent;
  font-size: 1rem;
  padding-right: 0px;
  color: var(--input-line);
  background: var(--input-bg-color);
  border-right: 2px solid var(--input-border-color);
  outline: none;
}

.input::-webkit-input-placeholder {
  color: var(--input-text-color);
}

.input::-moz-input-placeholder {
  color: var(--input-text-color);
}

.input::-ms-input-placeholder {
  color: var(--input-text-color);
}

.input:focus::-webkit-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-moz-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-ms-input-placeholder {
  color: var(--input-text-hover-color);
}

/*Search button*/
.search-box-icon {
  width: 52px;
  height: 35px;
  position: absolute;
  top: -6px;
  right: -21px;
  background: transparent;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
}

.search-box-icon:hover {
  background: var(--input-border-color);
}

.btn-icon-content {
  width: 52px;
  height: 35px;
  top: -6px;
  right: -21px;
  border: none;
  cursor: pointer;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
}

.btn-icon-content:hover {
  opacity: 0.8;
}

.search-icon {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 7px;
  right: 15px;
}
.form-control,
.form-select {
  border: none;
  background-color: #dde4e794;
}
</style>
