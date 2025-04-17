<template>
  <div class="header">
    <router-link @click="scrollToTop()" to="/" class="logo">
      <img src="../assets/images/taco-logo.png" alt="Logo" />Restaurant
    </router-link>

    <!-- Nút menu ba sọc -->
    <button
      id="menu-btn"
      class="navbar-toggler"
      type="button"
      @click="toggleNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <nav class="navbar navbar-expand-lg navbar-light bg-light navbaresponsive">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" :class="{ show: isNavOpen }" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link @click="scrollToTop()" to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="scrollToTop()" to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="scrollToTop()" to="/promotions" class="nav-link">Promotions</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="scrollToTop()" to="/menu" class="nav-link">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="scrollToTop()" to="/table" class="nav-link">Table</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="userDropdown">
                <li v-if="user">
                  <a class="dropdown-item" href="#" @click="handleLogout">Logout</a>
                </li>
                <li v-else>
                  <router-link to="/login" class="dropdown-item">Login</router-link>
                  <router-link to="/register" class="dropdown-item">Register</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isNavOpen = ref(false);

const user = computed(() => store.state.user);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const handleLogout = () => {
  store.dispatch('logout');
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: gainsboro;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 9%; /* Adjusted padding for a shorter height */
}

.header .logo {
  font-size: 2rem; /* Adjusted font size for the logo */
  font-weight: bolder;
  color: #130f40;
  text-decoration: none;
}

.header .logo img {
  padding-right: 0.5rem;
}

.header .navbar {
  display: flex;
  align-items: center;
}

.header .navbar a {
  font-size: 1.5rem; /* Reduced font size for navbar items */
  margin: 0 1rem;
  color: #666;
  text-decoration: none; /* Loại bỏ gạch chân */
}

.header .navbar a:hover {
  color: #27ae60;
}

.header .navbar a.router-link-exact-active {
  color: #f38609;
}

.dropdown-menu .dropdown-item {
  transition: background-color 0.3s, color 0.3s;
}

/* Thay đổi màu nền và màu chữ khi hover lên các mục dropdown */
.dropdown-menu .dropdown-item:hover {
  background-color: antiquewhite; /* Màu nền mới khi hover */
}

.dropdown-item {
  width: 150px;
}

/* Nút menu ba sọc */
#menu-btn {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}

/* Navbar trên màn hình nhỏ */
@media (max-width: 768px) {
  .header {
    position: relative;
  }

  .header .navbar {
    display: none;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -30%;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
    z-index: 1001;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
    align-items: center; /* Center align the items */
  }

  .header .navbar.show {
    display: flex;
  }

  .header .navbar a {
    font-size: 1.5rem; /* Reduced font size for mobile */
    margin: 1rem 0;
    display: block;
  }

  #menu-btn {
    display: inline-block;
    z-index: 1002; /* Ensure the button is above the menu */
  }
}

@media (max-width: 576px) {
  .header .navbar a {
    font-size: 1.3rem; /* Further reduced font size for smaller screens */
  }
}
</style>
