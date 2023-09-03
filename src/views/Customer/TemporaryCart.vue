<template>
  <div class="bg-neutral-50">
    <div class="pt-28 px-40">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-neutral-50 text-xs">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">All Product</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sofa</li>
        </ol>
      </nav>
      <div>
        <div class="py-2 text-xl font-semibold">
          <h4>Shopping Cart</h4>
        </div>
        <div class="card">
          <div class="row grid grid-cols-7 gap-x-4">
            <div class="col-span-5 cart">
              <div class="title">
                <div class="row">
                  <div class="col align-self-center text-right text-muted">
                    3 items
                  </div>
                </div>
              </div>
              <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                  <div class="col-2">
                    <img
                      class="img-fluid"
                      src="@/assets/images/category/sofa/sofa_1.png"
                    />
                  </div>
                  <div class="col">
                    <div class="row text-muted">Shirt</div>
                    <div class="row">Cotton T-shirt</div>
                  </div>
                  <div class="col">
                    <a href="#">-</a><a href="#" class="border">1</a
                    ><a href="#">+</a>
                  </div>
                  <div class="col">
                    $ 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="row main align-items-center">
                  <div class="col-2">
                    <img
                      class="img-fluid"
                      src="@/assets/images/category/sofa/sofa_2.png"
                    />
                  </div>
                  <div class="col">
                    <div class="row text-muted">Shirt</div>
                    <div class="row">Cotton T-shirt</div>
                  </div>
                  <div class="col">
                    <a href="#">-</a><a href="#" class="border">1</a
                    ><a href="#">+</a>
                  </div>
                  <div class="col">
                    $ 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                  <div class="col-2">
                    <img
                      class="img-fluid"
                      src="@/assets/images/category/sofa/sofa_3.png"
                    />
                  </div>
                  <div class="col">
                    <div class="row text-muted">Shirt</div>
                    <div class="row">Cotton T-shirt</div>
                  </div>
                  <div class="col">
                    <a href="#">-</a><a href="#" class="border">1</a
                    ><a href="#">+</a>
                  </div>
                  <div class="col">
                    $ 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div class="back-to-shop">
                <a href="#">&leftarrow;</a
                ><span class="text-muted">Back to shop</span>
              </div>
            </div>
            <div class="col-span-2 summary border border-1-black">
              <div>
                <h5 class="font-semibold text-base">Summary</h5>
              </div>
              <hr />
              <div class="row pt-4">
                <div class="col" style="padding-left: 0">ITEMS 3</div>
                <div class="col text-right">$ 132.00</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option class="text-muted">Standard-Delivery- $5.00</option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div
                class="row"
                style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0"
              >
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right">$ 137.00</div>
              </div>
              <router-link to="cartProduct">
                <button class="btn btn_checkout">ORDER</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.table .sub {
  border-right: 1px solid #ccc;
}
.table .plus {
  border-left: 1px solid #ccc;
}
body {
  background: #ddd;
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
}
.title {
  margin-bottom: 5vh;
}
.card {
  border-radius: 8px;
  border: transparent;
}
@media (max-width: 767px) {
  .card {
    margin: 3vh auto;
  }
}
.cart {
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
@media (max-width: 767px) {
  .cart {
    padding: 4vh;
    border-bottom-left-radius: unset;
    border-top-right-radius: 1rem;
  }
}
.summary {
  /* background-color: #ddd; */
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 4vh;
  color: rgb(65, 65, 65);
}
@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
  }
}
.summary .col-2 {
  padding: 0;
}
.summary .col-10 {
  padding: 0;
}
.row {
  margin: 0;
}
.title b {
  font-size: 1.5rem;
}
.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}
.col-2,
.col {
  padding: 0 1vh;
}
a {
  padding: 0 1vh;
}
.close {
  margin-left: auto;
  font-size: 0.7rem;
}
.col-md-4.summary {
  font-size: 14px;
}
.back-to-shop {
  margin-top: 4.5rem;
}
h5 {
  margin-top: 2vh;
}
hr {
  margin-top: 1.25rem;
}
form {
  padding: 2vh 0;
}
select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
.btn {
  background-color: rgb(57, 55, 55);
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 5px;
}
.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none;
}
.btn:hover {
  color: white;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}
#code {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.253),
      rgba(255, 255, 255, 0.185)
    ),
    url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}
</style>
