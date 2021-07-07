<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/">商品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">訂單管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon">優惠券管理</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="openModal">登出</a>
          </li>
        </ul>
        <div class="navbar-nav">
          <div class="nav-item">
            <router-link class="nav-link" to="/products">前台網站</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view v-if="check"></router-view>
    <div class="my-4" v-else>
      <h2 class="text-center">請先登入</h2>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary">登入</button>
      </div>
    </div>
  </div>
  <logoutModal ref="logoutModal"></logoutModal>
</template>

<script>
import logoutModal from '@/components/LogoutModal.vue';

export default {
  data() {
    return {
      check: false,
    };
  },
  components: {
    logoutModal,
  },
  methods: {
    checkSignIn() {
      const url = `${process.env.VUE_APP_URL}api/user/check`;
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.check = true;
          } else {
            this.check = false;
            this.$router.push('/signIn');
          }
        });
    },
    openModal() {
      this.$refs.logoutModal.openModal();
    },
  },
  mounted() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)vue2021_w7\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.checkSignIn();
  },
};
</script>
