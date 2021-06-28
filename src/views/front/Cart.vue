<template>
  <div class="loading" v-if="getProductLoading">
    <div class="loadIcon spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="cartList mb-5 mt-4" v-if="cartData.final_total!==0">
    <h2 class="text-center">購物車列表</h2>
    <div class="d-flex justify-content-end mb-2">
      <button type="button" class="btn btn-outline-danger"
      @click="deleteProduct('deleteAll', item)">清空購物車</button>
    </div>
    <table class="productList table table-striped table-hover">
      <thead>
        <tr>
          <th width="5%" scope="col">刪除</th>
          <th width="45%" scope="col" class="productTitle">品名</th>
          <th width="15%" scope="col">單價</th>
          <th width="20%" scope="col">數量/單位</th>
          <th width="15%" scope="col">總價</th>
        </tr>
      </thead>
      <tbody>
        <tr class="align-middle" v-for="item in cartData.carts" :key="item.id">
          <td><button type="button" class="deleteCartOne d-flex align-items-center"
          @click="deleteProduct('deleteOne', item)">
            <span class="material-icons">delete_forever</span></button>
          </td>
          <td class="productTitle">{{item.product.title}}</td>
          <td>{{item.product.price}}</td>
          <td>
            <div class="qtyArea d-flex align-items-center">
              <button type="button" class="mx-0 p-0 pt-1"
              @click="changeQty('reduce', item, item.qty)">
                <span class="material-icons fs-3">arrow_left</span>
              </button>
              <span class="productQty">{{item.qty}}</span>
              <button type="button" class="mx-0 p-0 pt-1" @click="changeQty('add', item, item.qty)">
                <span class="material-icons fs-3">arrow_right</span>
              </button>
              {{item.product.unit}}
            </div>
          </td>
          <td>{{item.final_total}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="totalText">總金額</td>
          <td class="totalText">{{cartData.final_total}}</td>
        </tr>
      </tfoot>
    </table>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary px-4 fw-bold"
      @click="this.$router.push('/customerForm')">結帳</button>
    </div>
  </div>
  <div class="noCart py-4" v-else>
    <h2 class="text-center">購物車列表</h2>
    <div class="noCartContent py-4">
      <h3>購物車內沒有商品</h3>
      <router-link to="/products" class="btn btn-primary">回到產品列表</router-link>
    </div>
  </div>
  <deleteModal ref="deleteModal" @getCartData="getCartData"></deleteModal>
</template>

<script>
import deleteModal from '@/components/DeleteModal.vue';
import swal from 'sweetalert';

export default {
  data() {
    return {
      cartData: {},
      deleteModal: {},
      getCartLoading: true,
    };
  },
  methods: {
    getCartData() {
      this.getProductLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.cartData = res.data.data;
            this.getProductLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    changeQty(status, cart, qty) {
      let tempQty = qty;
      if (status === 'reduce') {
        if (qty === 1) {
          this.deleteProduct('deleteOne', cart);
          return;
        }
        tempQty -= 1;
      } else {
        tempQty += 1;
      }
      const obj = {
        data: {
          product_id: cart.product_id,
          qty: tempQty,
        },
      };
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`;
      this.$http.put(url, obj)
        .then((res) => {
          if (res.data.success) {
            swal(`${cart.product.title}購買數量更改為${tempQty}`);
            this.getCartData();
          } else {
            swal(`${cart.product.title}購買數量更改失敗！`);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteProduct(status, cart) {
      this.$refs.deleteModal.deleteCart = cart;
      this.$refs.deleteModal.deleteStatus = status;
      this.$refs.deleteModal.openModal();
    },
  },
  components: {
    deleteModal,
  },
  created() {
    this.getCartData();
  },
};
</script>
