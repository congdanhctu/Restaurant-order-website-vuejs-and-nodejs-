<template>
  <div class="container">
    <h1 class="my-4"><i class="fa fa-user-plus"></i> Register Page</h1>
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" v-model="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" v-model="name" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" v-model="phone" class="form-control" id="phone">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" required>
      </div>
      <div class="mb-3">
        <label for="confirm-password" class="form-label">Confirm Password</label>
        <input type="password" v-model="confirmPassword" class="form-control" id="confirm-password" required>
      </div>
      <div class="mb-3">
        <label for="birth" class="form-label">Birth Date</label>
        <input type="date" v-model="birth" class="form-control" id="birth">
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Gender</label>
        <select v-model="gender" class="form-control" id="gender">
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const birth = ref('');
const gender = ref('Nam'); // Mặc định chọn Nam

const registerUser = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      name: name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      birth: birth.value,
      gender: gender.value
    }, {
      withCredentials: true // Đảm bảo gửi cookie
    });

    // Xử lý phản hồi thành công
    alert(response.data.message);
  } catch (error) {
    // Xử lý lỗi
    if (error.response) {
      alert(error.response.data.message); // Hiển thị thông báo lỗi
    } else {
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  }
};
</script>