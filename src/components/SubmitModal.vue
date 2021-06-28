<template>
  <div class="modal fade" ref="submitModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-white" id="exampleModalLabel">訂單確認</h5>
          <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <p>收件人姓名：{{user.name}}</p>
          <p>收件人email：{{user.email}}</p>
          <p>收件人電話：{{user.tel}}</p>
          <p>收件人地址：{{user.address}}</p>
          <p>留言：{{message}}</p>
          <p>訂單內容：</p>
          <div class="orderContent">
            <p v-for="item in cartData.carts"
            :key="item.id">{{item.product.title}} x {{item.qty}}</p>
            <p class="total">總金額：{{cartData.final_total}}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">取消</button>
          <button type="button" class="btn btn-primary"
          @click="submitOrder"><span class="spinner-border spinner-border-sm"
          role="status" aria-hidden="true" v-if="submitLoading"></span>送出訂單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import swal from 'sweetalert';

export default {
  data() {
    return {
      submitModal: {},
      cartData: {},
      submitLoading: false,
    };
  },
  props: ['user', 'message'],
  methods: {
    openModal() {
      this.submitModal.show();
    },
    closeModal() {
      this.submitModal.hide();
    },
    getCartData() {
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.cartData = res.data.data;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    submitOrder() {
      this.submitLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`;
      const obj = {
        data: {
          user: this.user,
          message: this.message,
        },
      };
      this.$http.post(url, obj)
        .then((res) => {
          if (res.data.success) {
            swal('訂單送出成功！');
            this.submitLoading = false;
            this.$router.push('/products');
            this.closeModal();
          } else {
            swal('訂單送出失敗！');
            this.closeModal();
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.submitModal = new Modal(this.$refs.submitModal, { backdrop: 'static', keyboard: false });
    this.getCartData();
  },
};
</script>
