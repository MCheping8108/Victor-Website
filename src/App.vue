<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      msg: 'router-link'
    }
  }
}
</script>

<template>
  <header>
      <nav>
        <RouterLink :class="msg" to="/">主页 | HOME</RouterLink>
        <RouterLink :class="msg" to="/news">新闻 | NEWS</RouterLink>
        <a href="https://github.com/MCheping8108/Victor-Website" :class="msg">开源仓库 | GitHub</a>
      </nav>
  </header>
  <div class="context"></div>
  
  <h1 class="title">欢迎来到维克多科技</h1>
  <br>
<KeepAlive>
  <RouterView />
</KeepAlive>
</template>

<style scoped>

</style>
