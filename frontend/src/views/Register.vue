<template>
  <div class="container register-container">
    <div class="card shadow-lg border-0">
      <div class="card-body p-5">
        <h1 class="text-center mb-4">
          <i class="fa fa-user-plus me-2"></i> Create Your Account
        </h1>
        <form @submit.prevent="registerUser" class="needs-validation" novalidate>
          <div class="row">
            <!-- Name -->
            <div class="col-md-6 mb-3">
              <label for="name" class="form-label">Full Name</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
                <input 
                  type="text" 
                  v-model="name" 
                  class="form-control" 
                  id="name" 
                  placeholder="Enter your name"
                  required
                >
                <div class="invalid-feedback">
                  Please enter your name.
                </div>
              </div>
            </div>
            <!-- Email -->
            <div class="col-md-6 mb-3">
              <label for="email" class="form-label">Email Address</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                <input 
                  type="email" 
                  v-model="email" 
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
          </div>
          <div class="row">
            <!-- Phone -->
            <div class="col-md-6 mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-phone"></i></span>
                <input 
                  type="tel" 
                  v-model="phone" 
                  class="form-control" 
                  id="phone"
                  placeholder="Enter your phone number"
                >
              </div>
            </div>
            <!-- Gender -->
            <div class="col-md-6 mb-3">
              <label for="gender" class="form-label">Gender</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-venus-mars"></i></span>
                <select v-model="gender" class="form-select" id="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Birth Date -->
            <div class="col-md-6 mb-3">
              <label for="birth" class="form-label">Birth Date</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                <input 
                  type="date" 
                  v-model="birth" 
                  class="form-control" 
                  id="birth"
                >
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Password -->
            <div class="col-md-6 mb-3">
              <label for="password" class="form-label">Password</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-lock"></i></span>
                <input 
                  type="password" 
                  v-model="password" 
                  class="form-control" 
                  id="password"
                  placeholder="Enter your password"
                  required
                >
                <div class="invalid-feedback">
                  Please enter a password.
                </div>
              </div>
            </div>
            <!-- Confirm Password -->
            <div class="col-md-6 mb-3">
              <label for="confirm-password" class="form-label">Confirm Password</label>
              <div class="input-group">
                <span class="input-group-text"><i class="fas fa-lock"></i></span>
                <input 
                  type="password" 
                  v-model="confirmPassword" 
                  class="form-control" 
                  id="confirm-password"
                  placeholder="Confirm your password"
                  required
                >
                <div class="invalid-feedback">
                  Please confirm your password.
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg">
              <i class="fas fa-user-plus me-2"></i> Register
            </button>
          </div>
          <div class="text-center mt-3">
            <p>Already have an account? <router-link to="/login">Login here</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const birth = ref('');
const gender = ref('Male'); // Default to Male

const registerUser = async () => {
  // Bootstrap form validation
  const form = document.querySelector('.needs-validation');
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  // Additional client-side validation for password match
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }

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
      withCredentials: true
    });

    alert(response.data.message);
    // Optionally redirect to login page or clear form
    name.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';
    confirmPassword.value = '';
    birth.value = '';
    gender.value = 'Male';
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("An error occurred, please try again!");
    }
  }
};

// Add animation on mount
onMounted(() => {
  const card = document.querySelector('.card');
  card.classList.add('animate__animated', 'animate__fadeInUp');
});
</script>

<style scoped>
.register-container {
  max-width: 800px;
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

.form-control, .form-select {
  border-left: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.3s ease;
}

.form-control:focus, .form-select:focus {
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

a {
  color: #27ae60;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  color: #219150;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 576px) {
  .register-container {
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