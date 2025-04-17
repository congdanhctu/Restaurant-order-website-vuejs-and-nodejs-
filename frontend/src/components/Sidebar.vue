<template>
  <button @click="toggleSidebar" class="toggle-sidebar-btn">
    Toggle Sidebar
  </button>

  <!-- Ẩn sidebar hoàn toàn khi isSidebarVisible là false -->
  <div v-if="isSidebarVisible" :class="{'sidebar-hidden': !isSidebarVisible, 'sidebar': isSidebarVisible}">
    <br>
    <br>
    <h1>ADMIN SITE</h1>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" to="/admin/users/list">Users</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin/orders">Orders</router-link>
      </li>
      
      <!-- Nhóm chức năng Food với menu mở rộng và mũi tên -->
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="toggleFoodMenu">
          Food
          <i :class="isFoodMenuOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-right'" class="arrow-icon"></i>
        </a>
        <ul v-if="isFoodMenuOpen" class="nav flex-column ml-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/foods/create">Food Create</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/foods/list">Food list</router-link>
          </li>
        </ul>
      </li>

      <!-- Nhóm chức năng Promotions với menu mở rộng và mũi tên -->
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="togglePromotionMenu">
          Promotions
          <i :class="isPromotionMenuOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-right'" class="arrow-icon"></i>
        </a>
        <ul v-if="isPromotionMenuOpen" class="nav flex-column ml-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/promotions">Promotions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/promotions/list">Promotions list</router-link>
          </li>
        </ul>
      </li>

      <!-- Nhóm chức năng Table với menu mở rộng và mũi tên -->
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="toggleTableMenu">
          Table
          <i :class="isTableMenuOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-right'" class="arrow-icon"></i>
        </a>
        <ul v-if="isTableMenuOpen" class="nav flex-column ml-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/tables/create">Table Create</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/tables/list">Table List</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarVisible = ref(true); // Trạng thái hiển thị sidebar
const isFoodMenuOpen = ref(false); // Trạng thái mở/đóng của menu Food
const isPromotionMenuOpen = ref(false); // Trạng thái mở/đóng của menu Promotions
const isTableMenuOpen = ref(false); // Trạng thái mở/đóng của menu Table

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value; // Đổi trạng thái ẩn/hiện sidebar
};

const toggleFoodMenu = () => {
  isFoodMenuOpen.value = !isFoodMenuOpen.value; // Đổi trạng thái mở/đóng menu Food
};

const togglePromotionMenu = () => {
  isPromotionMenuOpen.value = !isPromotionMenuOpen.value; // Đổi trạng thái mở/đóng menu Promotions
};

const toggleTableMenu = () => {
  isTableMenuOpen.value = !isTableMenuOpen.value; // Đổi trạng thái mở/đóng menu Table
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.toggle-sidebar-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1100;
  transition: background-color 0.3s;
}

.toggle-sidebar-btn:hover {
  background-color: #0056b3;
}

.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 1.5rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 10px 10px 0;
  transition: transform 0.3s ease; /* Hiệu ứng trượt sidebar */
  transform: translateX(0); /* Vị trí mặc định của sidebar */
}

.sidebar-hidden {
  transform: translateX(-100%); /* Trượt sidebar ra ngoài khi ẩn */
}

.nav-link {
  font-weight: 500;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #e9ecef;
}

.nav-link.active {
  background-color: #007bff;
  color: white;
}

.ml-3 {
  margin-left: 1rem;
}

.arrow-icon {
  float: right;
  margin-top: 6px;
}

.nav-item {
  margin-bottom: 5px;
}
</style>
