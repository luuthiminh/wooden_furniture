<template>
  <div class="px-3">
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent text-sm pt-4">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">All Product</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sofa</li>
        </ol>
      </nav>
    </div>
    <div class="border border-gray-900 bg-white mb-6 rounded-md">
      <div class="header h-10 px-6 pt-3 pb-10">
        <p class="font-medium">Add New Furniture</p>
      </div>
      <hr />
      <div class="py-3 px-4 text-sm">
        <form @submit.prevent="">
          <div class="grid grid-cols-2 gap-x-4">
            <div>
              <label for="exampleInputEmail1" class="form-label"
                >Name Furniture</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label">Price</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-4 mt-3">
            <div>
              <label for="exampleInputEmail1" class="form-label"
                >Collection</label
              >
              <select
                class="form-select text-sm"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label">Label</label>
              <select
                class="form-select text-sm"
                aria-label="Default select example"
              >
                <option selected>Choose a label</option>
                <option value="1">New</option>
                <option value="2">Hot Sale</option>
              </select>
            </div>
          </div>
          <div class="mt-3">
            <label for="exampleInputEmail1" class="form-label"
              >Appropriate Room</label
            >
            <select
              class="form-select text-sm"
              aria-label="Default select example"
            >
              <option selected>Choose room</option>
              <option value="1">Bed Room</option>
              <option value="2">Hot Sale</option>
            </select>
          </div>
          <div class="mt-3">
            <label for="exampleInputEmail1" class="form-label">Sold</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div class="flex gap-x-3 mt-3">
            <label for="exampleInputEmail1" class="form-label mt-10"
              >Image</label
            >
            <div class="img flex">
              <img
                class="image_default pr-10"
                src="@/assets/images/image_default.jpg"
                alt="furniture"
              />
              <input type="file" id="myFile" class="mt-10" name="filename" />
              <!-- <input type="submit" /> -->
            </div>
          </div>
          <button type="submit" class="btn my-8">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.btn {
  background-color: #302924;
  /* --input-bg-color: #283542; */
  color: white;
  padding: 0.4rem 1.5rem 0.4rem 1.5rem;
  border-radius: 5px;
  font-weight: 400;
  transform: translateX(57em);
}
.image_default {
  width: 20%;
}
</style>
