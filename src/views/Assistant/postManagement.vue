<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4">
          <li class="breadcrumb-item"><a href="#">Home</a></li>

          <li class="breadcrumb-item active" aria-current="page">Post</li>
        </ol>
      </nav>
    </div>
    <div class="px-7">
      <h1 class="font-semibold text-xl py-6">Management Post</h1>
      <div class="flex gap-x-40 pt-10">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="gap-x-2 font-semibold">Total Labels:</p>
          <!-- {{ posts.length }} -->
        </div>
        <!-- <div class="search">
            <div class="search-box">
              <div class="search-field">
                <input placeholder="Search..." class="input" type="text" />
                <div class="search-box-icon">
                  <button class="btn-icon-content">
                    <i class="search-icon">
                      <i class="bi bi-search"></i>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        <div class="absolute right-10">
          <button
            type="button"
            class="button_add ring-offset-2 ring-2 bg-lime-700 ring-lime-300 hover:ring-lime-600 text-sm rounded-md"
            data-toggle="modal"
            data-target="#exampleModalLong"
            data-dismiss="modal"
            data-backdrop="false"
            @click="opentModal('add', 'null')"
          >
            <span class="button__text text-sm">Add</span>
            <span class="button__icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                height="24"
                fill="none"
                class="svg"
              >
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line></svg
            ></span>
          </button>
        </div>
      </div>
      <!-- <div v-show="isSuccess">
          <div>
            <notification-modal>
              <template v-slot:title>Delete this category Successful </template>
            </notification-modal>
          </div>
        </div> -->
      <div class="content_table scroll">
        <div class="pt-10">
          <table
            class="table table-borderless text-yellow-950 font-medium text-center bg-white round-md"
          >
            <thead class="table-light">
              <tr class="text-sm text-center">
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">CreationDate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-sm">
                <!-- <th scope="row">{{ p.PostId }}</th>
                <td>{{ p.Image }}</td>
                <td>{{ p.Title }}</td>
                <td>{{ p.Content }}</td>
                <td>{{ p.CreationDate }}</td>
                <td class="flex gap-x-4">
                  <button
                    class="button_edit ring-offset-2 ring-2 ring-blue-300 hover:ring-blue-600 rounded-md"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="opentModal('edit', p)"
                  >
                    <span class="button__text text-xs">Edit</span>
                    <span class="button__icon bi bi-pencil text-white"></span>
                  </button>

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
                </td> -->
                <modal
                  v-if="modalType == 'add'"
                  @close="isShowAddModal = false"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Add New Post
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <div class="avatar_upload">
                          <img v-if="url" :src="url" alt="Avatar" />
                          <img
                            v-else
                            src="@/assets/images/avatar_default.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div class="avatar_edit">
                          <div class="hidden">
                            <input
                              type="file"
                              name="image"
                              id="imageUpload"
                              accept=".png, .jpg, .jpeg"
                              :maxFileSize="1000000"
                              ref="file"
                              multiple
                              @change="onFileChange"
                            />
                          </div>
                          <label
                            class="bi bi-pencil text-xs"
                            for="imageUpload"
                          ></label>
                        </div>
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Title</label
                        >
                        <input
                          v-model="postTitle"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Content</label
                        >
                        <input
                          v-model="postContent"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Author</label
                        >
                        <input
                          v-model="postAuthor"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >CreationDate</label
                        >
                        <input
                          v-model="postCD"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        @click="HandleAdd"
                      >
                        Add
                      </span>
                    </div>
                  </template>
                </modal>
                <modal
                  v-if="modalType == 'edit'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Edit This Label
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="py-3 pr-36 text-sm">
                      <div class="grid grid-cols-12 gap-x-10">
                        <label
                          for="exampleInputEmail1"
                          class="col-span-4 form-label text-semibold text-base pt-2 border-none"
                          >Name Lable</label
                        >
                        <input
                          v-model="nameLabelModal"
                          type="text"
                          class="col-span-8 form-control"
                          id="exampleInpuName1"
                          aria-describedby="nameHelp"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        @click.prevent="HandleUpdate"
                      >
                        Update
                      </span>
                    </div>
                  </template>
                </modal>
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
                    <!-- <button
                        type="button"
                        class="btn btn-primary my-8"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        @click="opentModal('notification', w)"
                        @click.prevent="HandleDelete"
                      >
                        Yes
                      </button> -->
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
export default {
  components: {
    modal,
  },
  data() {
    return {
      modalType: null,
      posts: [],
      namePostModal: null,
      idPostModal: null,
      isSuccess: false,
      file: "",
    };
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    async getAllPosts() {
      try {
        const response = await axios.get("Assistant/shop-data/posts");
        this.posts = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async opentModal(type, l) {
      this.modalType = type;
      this.namePostModal = l.postlName;
      this.idPostModal = l.postId;
    },
    closeModal() {
      this.modalType = null;
    },
    onFileChange(event) {
      this.file = event.target.files;
    },
    async HandleAdd() {
      try {
        const response = await axios.post("assistant/shop-data/posts/add", {
          PostTitle: this.PostTitle,
          PostImage: this.file,
          PosContent: this.posContent,
          Author: this.postAuthor,
          CreationDate: this.postCD,
        });
        if (response.status === 201) {
          this.modalType = null;
          alert("Add was successful!");
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async HandleUpdate() {
      try {
        const response = await axios.put(
          "Assistant/shop-data/posts?labelId=" +
            this.idLabelModal +
            "&labelName=" +
            this.nameLabelModal +
            "/edit"
        );
        if (response.status === 200) {
          this.modalType = null;
          alert("Update was successful!");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async HandleDelete() {
      try {
        const response = await axios.delete(
          "Assistant/shop-data/posts/" + this.idLabelModal + "/remove"
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
