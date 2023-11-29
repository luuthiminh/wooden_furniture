<template>
  <div class="">
    <div class="nav">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4 px-4 font-semibold">
          <li class="breadcrumb-item"><a href="#">Home</a></li>

          <li class="breadcrumb-item active font-medium" aria-current="page">
            Post
          </li>
        </ol>
      </nav>
    </div>
    <div class="px-7">
      <h1 class="font-semibold text-xl py-6">Management Post</h1>
      <div class="flex gap-x-40 pt-10">
        <div class="flex items-center gap-x-4 text-sm">
          <p class="gap-x-2 font-semibold">Total Posts:</p>
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
        <div class="absolute right-0">
          <alert-Error v-if="isAlertError">
            <template v-slot:message>{{ messageError }}</template></alert-Error
          >
          <alert-success v-if="isAlertSuccess">
            <template v-slot:message>{{ messageSuccess }}</template>
          </alert-success>
          <alert-wanning v-if="isAlertWanning">
            <template v-slot:message>{{ messageWanning }}</template>
          </alert-wanning>
        </div>
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
                <!-- <modal
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
                </modal> -->
                <modal
                  v-if="modalType == 'add'"
                  @close="modalType == null"
                  data-target="#myModal"
                >
                  <template v-slot:title>
                    <div
                      class="flex items-center text-base font-semibold text-yellow-950"
                    >
                      Add New Material
                    </div>
                  </template>
                  <template v-slot:body>
                    <div class="text-sm text-left">
                      <div class="mx-4 mb-6 mt-2">
                        <div class="">
                          <label class="col-form-label fw-medium">Image</label>
                          <div class="">
                            <div class="flex">
                              <div class="avatar_upload py-3">
                                <img v-if="url" :src="url" alt="image" />

                                <label v-else for="imageUpload" class="ml-14">
                                  <img
                                    src="@/assets/images/assistant/image_default.jpeg"
                                    alt="Avatar"
                                  />
                                </label>
                              </div>

                              <div class="avatar_edit">
                                <div class="hidden">
                                  <input
                                    type="file"
                                    name="avatar"
                                    id="imageUpload"
                                    accept=".png, .jpg, .jpeg"
                                    :maxFileSize="1000000"
                                    ref="file"
                                    @change="onFileChange"
                                    required
                                  />
                                </div>
                                <label
                                  class="bi bi-pencil text-xs"
                                  for="imageUpload"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label class="col-form-label fw-medium">Title</label>
                          <div class="">
                            <input
                              v-model="title"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="mt-3">
                          <label class="col-form-label fw-medium"
                            >Content</label
                          >
                          <div class="">
                            <input
                              v-model="content"
                              type="text"
                              class="form-control border-none bg-neutral-100"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                        </div>

                        <div class="mt-3">
                          <label
                            for="exampleInputEmail1"
                            class="col-form-label font-medium"
                            >Type</label
                          >
                          <select
                            required
                            v-model="type"
                            class="form-select text-sm"
                            aria-label="Default select example"
                          >
                            <option selected>Choose type</option>
                            <option value="TIP">Tip</option>
                            <option value="NEW">News</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-slot:footer>
                    <div class="bg-yellow-900 rounded-md">
                      <span
                        type="button"
                        class="btn text-white"
                        data-dismiss="modal"
                        @click.prevent="HandleAddPost"
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
import alertError from "@/components/AlertError.vue";
import alertSuccess from "@/components/AlertSuccess.vue";
import alertWanning from "@/components/AlertWanning.vue";
export default {
  components: {
    modal,
    alertError,
    alertSuccess,
    alertWanning,
  },
  data() {
    return {
      modalType: null,
      posts: [],
      namePostModal: null,
      idPostModal: null,
      isSuccess: false,
      file: "",
      url: "",
      arrayUrl: [],
      isAlertSuccess: false,
      isAlertError: false,
      isAlertWanning: false,
      messageError: null,
      messageSuccess: null,
      messageWanning: null,
    };
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    async getAllPosts() {
      try {
        const response = await axios.get("assistant/shop-data/posts");
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
      this.file = event.target.files[0];
      if (this.file) {
        this.url = URL.createObjectURL(this.file);
      }
    },
    async HandleAddPost() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("type", this.type);
      formData.append("image", this.file);
      try {
        const response = await axios.post(
          "assistant/shop-data/posts/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          this.modalType = null;
          this.messageSuccess = "Add new post successful!";
          setTimeout(() => {
            this.isAlertSuccess = false;
          }, 5000);
          this.getAllPosts();
        }
        console.log(response.data);
      } catch (error) {
        this.isAlertError = true;
        this.messageError = error.response.data.message;
        setTimeout(() => {
          this.isAlertError = false;
        }, 5000);
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
