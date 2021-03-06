<template>
  <div class="py-4">
    <h2 class="text-center">優惠券管理</h2>
    <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-primary mb-3"
    @click="openModal('addCoupon')">建立優惠券</button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th width="25%">優惠券名稱</th>
          <th width="10%">優惠內容</th>
          <th width="15%">優惠券到期日</th>
          <th width="15%">是否啟用</th>
          <th width="25%">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="align-middle" v-for="item in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.percent}}%</td>
          <td>{{item.due_date_string}}</td>
          <td>
            <input type="checkbox" class="checkbox" :id="item.id"
            @change="changeStatus(item.is_enabled, item)" :checked="item.is_enabled===1">
            <label :for="item.id" class="btnWrap">
              <span class="btnInside"></span>
            </label>
            <span class="isEnabled">{{item.is_enabled === 1 ? '啟用' : '不啟用'}}</span>
          </td>
          <td>
            <button type="button" class="btn btn-primary me-2"
            @click="openModal('editCoupon', item)">編輯</button>
            <button type="button" class="btn btn-outline-danger"
            @click="openModal('deleteCoupon', item)">
              刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :paginationData="pagination"
    @getData="getCouponData"></pagination>
  </div>
  <div class="loading" v-if="getCouponLoading">
    <div class="loadIcon spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <couponModal ref="couponModal" @getCouponsData="getCouponData"></couponModal>
  <deleteModal ref="deleteModal" @getCouponsData="getCouponData"></deleteModal>
</template>

<script>
import couponModal from '@/components/CouponModal.vue';
import deleteModal from '@/components/DeleteModal.vue';
import pagination from '@/components/Pagination.vue';
import swal from 'sweetalert';

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      getCouponLoading: true,
    };
  },
  components: {
    couponModal,
    deleteModal,
    pagination,
  },
  methods: {
    getCouponData(page = 1) {
      document.documentElement.scrollTop = 0;
      this.getCouponLoading = true;
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons;
            this.pagination = res.data.pagination;
            this.getCouponLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openModal(modal, item) {
      if (modal === 'addCoupon') {
        this.$refs.couponModal.openModal();
        this.$refs.couponModal.modal = modal;
      } else if (modal === 'editCoupon') {
        this.$refs.couponModal.openModal();
        this.$refs.couponModal.modal = modal;
        this.$refs.couponModal.tempData = { ...item };
      } else if (modal === 'deleteCoupon') {
        this.$refs.deleteModal.openModal();
        this.$refs.deleteModal.deleteCouponData = { ...item };
      }
    },
    changeStatus(status, item) {
      this.getCouponLoading = true;
      const obj = {};
      obj.data = { ...item };
      if (status) {
        obj.data.is_enabled = 0;
      } else {
        obj.data.is_enabled = 1;
      }
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
      this.$http.put(url, obj)
        .then((res) => {
          if (res.data.success) {
            this.getCouponData(this.pagination.current_page);
            swal(`優惠券啟用狀態更改為${obj.data.is_enabled ? '啟用' : '不啟用'}！`);
          } else {
            swal('優惠券啟用狀態更改失敗！');
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  created() {
    this.getCouponData();
  },
};
</script>
