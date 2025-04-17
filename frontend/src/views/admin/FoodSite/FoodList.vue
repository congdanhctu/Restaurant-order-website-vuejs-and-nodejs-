<template>
  <div class="food-list">
    <h1>Food List</h1>

    <!-- Food list -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Food Name</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Description</th>
          <th>Status</th>
          <th>Type</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(food, index) in paginatedFoods" :key="food.food_id">
          <td>{{ food.food_id }}</td>
          <td>{{ food.food_name }}</td>
          <td>{{ food.food_price }}</td>
          <td>{{ food.food_discount }}</td>
          <td>{{ food.food_desc }}</td>
          <td>{{ food.food_status }}</td>
          <td>{{ food.food_type }}</td>
          <td><img :src="`http://localhost:5000/${food.food_src}`" alt="Food Image" width="100" /></td>
          <td>
            <button @click="deleteFood(food.food_id)" class="btn btn-danger">Delete</button>
            <button @click="startEdit(food)" class="btn btn-warning">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Edit Food Modal -->
    <div v-if="isEditing" class="modal-overlay">
      <div class="modal-content">
        <h2>Edit Food</h2>
        <form @submit.prevent="updateFood">
          <input v-model="currentFood.food_name" placeholder="Food Name" required />
          <input v-model="currentFood.food_price" placeholder="Price" type="number" required />
          <input v-model="currentFood.food_discount" placeholder="Discount" type="number" />
          <textarea v-model="currentFood.food_desc" placeholder="Description" required></textarea>
          <input v-model="currentFood.food_status" placeholder="Status" required />
          <input v-model="currentFood.food_type" placeholder="Type" required />
          <input type="file" @change="handleFileUpload" />

          <div class="form-buttons">
            <button type="submit" class="btn btn-success">Update Food</button>
            <button type="button" @click="cancelEdit" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Pagination Controls -->
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage" :disabled="currentPage === 1">Previous</button>
        </li>
        
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <button class="page-link" @click="currentPage = page">{{ page }}</button>
        </li>
        
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const foods = ref([]);
const isEditing = ref(false);
const currentFood = ref({});
const currentPage = ref(1);
const itemsPerPage = ref(5);

const getFoods = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/foods');
    foods.value = response.data;
  } catch (error) {
    console.error('Error fetching food list:', error);
    alert('An error occurred while loading the food list.');
  }
};

const paginatedFoods = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return foods.value.slice(start, start + itemsPerPage.value);
});

const totalPages = computed(() => {
  return Math.ceil(foods.value.length / itemsPerPage.value);
});

const updateFood = async () => {
  try {
    const formData = new FormData();
    Object.keys(currentFood.value).forEach(key => {
      formData.append(key, currentFood.value[key]);
    });

    const response = await axios.put(`http://localhost:5000/api/foods/${currentFood.value.food_id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    console.log('Food item updated successfully:', response.data);
    alert('Food updated successfully!');
    isEditing.value = false;
    getFoods();
  } catch (error) {
    console.error('Error updating food item:', error);
    alert('An error occurred while updating food.');
  }
};

const handleFileUpload = (event) => {
  currentFood.value.food_src = event.target.files[0];
};

const deleteFood = async (id) => {
  if (!confirm('Are you sure you want to delete this food item?')) return;

  try {
    const response = await axios.delete(`http://localhost:5000/api/foods/${id}`);
    console.log('Food item deleted:', response.data);
    alert('Food deleted successfully!');
    getFoods();
  } catch (error) {
    console.error('Error deleting food item:', error);
    alert('An error occurred while deleting food.');
  }
};

const startEdit = (food) => {
  currentFood.value = { ...food };
  isEditing.value = true;
};

const cancelEdit = () => {
  isEditing.value = false;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

onMounted(() => {
  getFoods();
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
}

.modal-content h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #007bff;
}

.modal-content input,
.modal-content textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ced4da;
  border-radius: 6px;
}

.modal-content input[type="file"] {
  margin-top: 10px;
}

.form-buttons .btn {
  width: 48%;
  font-weight: bold;
  padding: 10px;
}
</style>
