<template>
  <div class="py-4">
    <h2 class="text-center">產品列表</h2>
    <div class="productListArea row gx-4 mb-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="item in products" :key="item.id">
          <div class="card">
            <div class="imgArea rounded-top"
            :style="{'background-image':`url(${item.imageUrl})`}"></div>
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text text-decoration-line-through mb-2">原價：NT${{item.origin_price}}</p>
              <p class="card-text fs-4">
                特價：NT${{item.price}}<span class="fs-6 mx-2">(每{{item.unit}})</span>
              </p>
            </div>
            <div class="d-grid p-0 bg-white btnArea">
              <button type="button" class="btn btn-outline-warning rounded-0"
              @click="goToProduct(item.id)">詳細內容</button>
              <button type="button"
              class="btn btn-danger rounded-0 rounded-bottom py-2" @click="addCart(item.id)">
              <span class="spinner-border spinner-border-sm"
                  role="status" aria-hidden="true"
                  v-if="cartLoading === item.id"></span>加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="loading" v-if="getProductsLoading">
    <div class="loadIcon spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  data() {
    return {
      products: [],
      cartLoading: '',
      getProductsLoading: true,
    };
  },
  methods: {
    getProductData() {
      this.getProductsLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.getProductsLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    goToProduct(productId) {
      this.$router.push(`/product/${productId}`);
    },
    addCart(productId, qty = 1) {
      this.cartLoading = productId;
      const obj = {
        data: {
          product_id: productId,
          qty,
        },
      };
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(url, obj)
        .then((res) => {
          if (res.data.success) {
            swal('加入購物車成功，可以至購物車分頁查看！');
            this.cartLoading = '';
          } else {
            swal('加入購物車失敗，請稍後再嘗試！');
            this.cartLoading = '';
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  created() {
    this.getProductData();
  },
};
</script>
