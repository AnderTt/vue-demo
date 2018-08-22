<template>
  <div>
    <h2>home路由组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item myActive" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item myActive" to="/home/messages">Message</router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
</style>
