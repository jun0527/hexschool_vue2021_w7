<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">後台首頁</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
