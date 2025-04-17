<template>
  <div class="container">
    <h1 class="my-4"><i class="fa fa-sign-in"></i> Login Page</h1>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email: email.value,
      password: password.value
    }, { withCredentials: true });
    
    const user = response.data.user; // Lấy thông tin người dùng từ response
    console.log("User Data:", user); // Log thông tin người dùng

    store.dispatch('login', user); // Lưu thông tin người dùng vào Vuex
    
    if (user.user_type === 2) {
      router.push('/admin');
    } else {
      router.push('/');
    }
  } catch (error) {
    console.error(error);
    alert('Login failed: ' + (error.response?.data?.message || 'Unexpected error'));
  }
}
</script>
