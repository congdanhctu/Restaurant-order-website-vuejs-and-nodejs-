<template>
  <div id="app">
    <NavBar v-if="showNavBar" />
    <div class="content">
      <router-view />
    </div>
    <FooterComponent v-if="showFooter" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/Footer.vue';

// Sử dụng useRoute để truy cập thông tin đường dẫn
const route = useRoute();

// Computed properties
const showNavBar = computed(() => {
  // Ẩn NavBar cho các trang admin
  return !isAdminRoute.value;
});

const showFooter = computed(() => {
  // Ẩn Footer cho các trang admin
  return !isAdminRoute.value;
});

const isAdminRoute = computed(() => {
  // Kiểm tra xem đường dẫn có chứa "/admin" hay không
  return route.path.startsWith('/admin');
});
</script>

<style>
#app {
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  margin-top: 5rem;
}
</style>
