<template>
  <div class="loading" v-if="getProductLoading">
    <div class="loadIcon spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <h2 class="text-center mt-4">產品介紹</h2>
  <div class="row justify-content-center px-5 py-4">
    <div class="imgArea rounded col-4 px-4"
    :style="{'background-image':`url(${product.imageUrl})`}"></div>
    <div class="content col-6 px-5 d-flex flex-column justify-content-between">
      <div>
        <h3 class="mb-3">{{product.title}}</h3>
        <p>{{product.description}}</p>
      </div>
      <div>
        <p class="fs-6 text-decoration-line-through mb-1">原價：NT$ {{ product.origin_price }}</p>
        <p class="fs-3">特價：NT$ {{ product.price }}
          <span class="fs-6 mx-1">(每{{product.unit}})</span>
        </p>
        <div class="d-flex justify-content-between align-items-end">
          <div class="qtyArea d-flex align-items-center">
            <p class="mb-0 fs-4">購買數量：</p>
            <button class="px-0 mb-1" type="button" :disabled="tempQty===1"
            @click="changeQty('reduce')">
                <span class="material-icons fs-1 pt-2">arrow_left</span>
            </button>
            <span class="fs-4 productQty">{{tempQty}}</span>
            <button class="px-0 mb-1" type="button" @click="changeQty('add')">
              <span class="material-icons fs-1 pt-2">arrow_right</span>
            </button>
          </div>
          <button type="button" class="btn btn-danger py-2" @click="addCart">
            <span class="spinner-border spinner-border-sm" role="status"
            aria-hidden="true" v-if="cartLoading === id"></span>
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';

export default {
  data() {
    return {
      product: {},
      tempQty: 1,
      emitter: '',
      cartLoading: '',
      getProductLoading: true,
    };
  },
  props: ['id'],
  methods: {
    getProductData() {
      this.getProductLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.getProductLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    changeQty(status) {
      if (status === 'reduce') {
        if (this.tempQty === 1) {
          return;
        }
        this.tempQty -= 1;
      } else {
        this.tempQty += 1;
      }
    },
    addCart() {
      this.cartLoading = this.product.id;
      const obj = {
        data: {
          product_id: this.product.id,
          qty: this.tempQty,
        },
      };
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(url, obj)
        .then((res) => {
          if (res.data.success) {
            swal('加入購物車成功，可以至購物車分頁查看！');
            this.tempQty = 1;
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
