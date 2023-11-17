<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      msg: 'router-link',
      msg2: 'product-link',
    }
  }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink :class="msg" to="/">主页 | HOME</RouterLink>
      <RouterLink :class="msg" to="/news">新闻 | NEWS</RouterLink>
      <div class="dropdown">
        <a href="#products" class="dropbtn">产品 | PRODUCT</a>
        <div class="dropdown-content">
          <RouterLink to="/product1" :class="msg2">高精准度导航系统</RouterLink>
          <RouterLink to="/product2" :class="msg2">高效能计算平台</RouterLink>
          <RouterLink to="/product3" :class="msg2">安全通信设备</RouterLink>
        </div>
      </div>
      <a href="https://github.com/MCheping8108/Victor-Website" :class="msg">开源仓库 | GitHub</a>
      <a href="https://github.com/MCheping8108/Victor-Website/issues" :class="msg">联系 | ISSUES</a>
      <!-- <RouterLink :class="msg" to="/product1">产品 | PRODUCT</RouterLink> -->
    </nav>
  </header>
  <div class="context"></div>

  <h1 class="title">欢迎来到维克多科技</h1>
  <br>
  
  <RouterView />
  
</template>

<style scoped></style>
