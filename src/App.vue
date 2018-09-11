<template>
  <div id="myapp">
    <!-- 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- sidebar -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './component/Header.vue';
import AppSidebar from './component/Sidebar.vue';
export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
