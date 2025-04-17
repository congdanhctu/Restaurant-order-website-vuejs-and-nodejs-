<template>
  <div class="container mt-4">
    <h1 class="mb-4">Create Food</h1>
    <form @submit.prevent="createFood" enctype="multipart/form-data">
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="foodName">Food Name:</label>
          <input type="text" id="foodName" class="form-control" v-model="food.food_name" required />
        </div>
        <div class="col-md-6">
          <label for="foodPrice">Food Price:</label>
          <input type="text" id="foodPrice" class="form-control" v-model="food.food_price" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="foodDiscount">Food Discount:</label>
          <input type="text" id="foodDiscount" class="form-control" v-model="food.food_discount" />
        </div>
        <div class="col-md-6">
          <label for="foodType">Food Type:</label>
          <select id="foodType" class="form-control" v-model="food.food_type" required>
            <option v-for="type in foodTypes" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="foodSrc">Food Image:</label>
          <input type="file" id="foodSrc" class="form-control" @change="handleFileUpload" />
        </div>
        <div class="col-md-6">
          <label for="foodStatus">Status:</label>
          <select id="foodStatus" class="form-control" v-model="food.food_status">
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>
      <div class="form-group mb-3">
        <label for="foodDesc">Description:</label>
        <textarea id="foodDesc" class="form-control" v-model="food.food_desc"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create Food</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const food = ref({
  food_name: '',
  food_price: '',
  food_discount: '',
  food_desc: '',
  food_status: 'available',
  food_type: '',
  food_src: null,
});

const foodTypes = ref(['Appetizer', 'Main Course', 'Dessert', 'Beverage']);

const handleFileUpload = (event) => {
  food.value.food_src = event.target.files[0];
};

const createFood = () => {
  const formData = new FormData();
  formData.append('food_name', food.value.food_name);
  formData.append('food_price', food.value.food_price);
  formData.append('food_discount', food.value.food_discount);
  formData.append('food_desc', food.value.food_desc);
  formData.append('food_status', food.value.food_status);
  formData.append('food_type', food.value.food_type);

  if (food.value.food_src) {
    formData.append('food_src', food.value.food_src);
  }

  axios.post('http://localhost:5000/api/foods', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  .then((response) => {
    console.log('Food created successfully:', response.data);
    alert('Food created successfully!');
  })
  .catch((error) => {
    console.error('There was an error creating the food:', error);
    alert('Error creating food');
  });
};
</script>

