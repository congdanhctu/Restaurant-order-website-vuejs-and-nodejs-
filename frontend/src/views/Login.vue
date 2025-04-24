<template>
  <div class="container login-container">
    <div class="card shadow-lg border-0">
      <div class="card-body p-5">
        <h1 class="text-center mb-4">
          <i class="fa fa-sign-in me-2"></i> Sign In
        </h1>
        <form @submit.prevent="handleLogin" class="needs-validation" novalidate>
          <!-- Email -->
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <div class="input-group">
              <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              <input 
                v-model="email" 
                type="email" 
                class="form-control" 
                id="email" 
                placeholder="Enter your email"
                required
              >
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
          </div>
          <!-- Password -->
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
              <span class="input-group-text"><i class="fas fa-lock"></i></span>
              <input 
                v-model="password" 
                type="password" 
                class="form-control" 
                id="password"
                placeholder="Enter your password"
                required
              >
              <div class="invalid-feedback">
                Please enter your password.
              </div>
            </div>
          </div>
          <!-- Forgot Password Link -->
          <div class="mb-3 text-end">
            <router-link to="/forgot-password" class="forgot-password">
              Forgot Password?
            </router-link>
          </div>
          <!-- Submit Button -->
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg">
              <i class="fas fa-sign-in-alt me-2"></i> Sign In
            </button>
          </div>
          <!-- Register Link -->
          <div class="text-center mt-3">
            <p>Don't have an account? <router-link to="/register">Register here</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const handleLogin = async () => {
  // Bootstrap form validation
  const form = document.querySelector('.needs-validation');
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email: email.value,
      password: password.value
    }, { withCredentials: true });
    
    const user = response.data.user;
    console.log("User Data:", user);

    store.dispatch('login', user);
    
    if (user.user_type === 2) {
      router.push('/admin');
    } else {
      router.push('/');
    }
  } catch (error) {
    console.error(error);
    alert('Login failed: ' + (error.response?.data?.message || 'Unexpected error'));
  }
};

// Add animation on mount
onMounted(() => {
  const card = document.querySelector('.card');
  card.classList.add('animate__animated', 'animate__fadeInUp');
});
</script>

<style scoped>
.login-container {
  max-width: 500px;
  margin: 3rem auto;
  padding: 0 15px;
}

.card {
  border-radius: 15px;
  background: #ffffff;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

h1 {
  color: #27ae60;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}

.form-label {
  font-weight: 500;
  color: #130f40;
}

.input-group-text {
  background-color: #f7f7f7;
  border-right: none;
}

.form-control {
  border-left: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #27ae60;
  box-shadow: 0 0 0 0.2rem rgba(39, 174, 96, 0.25);
}

.btn-primary {
  background-color: #27ae60;
  border: none;
  border-radius: 50px;
  padding: 12px 30px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #219150;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(39, 174, 96, 0.4);
}

.forgot-password, a {
  color: #27ae60;
  text-decoration: none;
  font-weight: 500;
}

.forgot-password:hover, a:hover {
  color: #219150;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 576px) {
  .login-container {
    margin: 1rem auto;
  }

  .card-body {
    padding: 2rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  .btn-primary {
    padding: 10px 20px;
  }
}
</style>