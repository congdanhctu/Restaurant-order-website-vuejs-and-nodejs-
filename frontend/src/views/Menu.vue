<template>
  <div class="menu-section">
    <div class="heading">
      <h3>Our Menu</h3>
    </div>

    <div class="search-box">
      <input type="text" class="search-input" v-model="foodObj.name" placeholder="Search..." />
    </div>

    <div class="filter-section">
      <h4>Filter by Food Type</h4>
      <div class="menu-tabs">
        <button v-for="(type, index) in foodTypes" :key="index" @click="filterType(type)" 
                :class="{'active': selectedType === type}">
          {{ type }}
        </button>
      </div>
    </div>

    <div class="food-list row">
      <div v-for="(f, index) in paginatedFoods" :key="index" class="food-item col-md-4 col-sm-6">
        <div class="card">
          <!-- Clicking on the food item navigates to the order page -->
          <router-link :to="{ name: 'order', params: { id: f.food_id } }" class="food-link">
            <img :src="`http://localhost:5000/${f.food_src}`" alt="Food Image" class="food-image card-img-top" />
            <div class="card-body">
              <h4 class="card-title">{{ f.food_name }}</h4>
              <p class="card-text">{{ f.food_desc }}</p>
              <p class="card-text">${{ f.food_price - f.food_discount }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div v-if="!filteredFoods.length">
      <p>No match found!</p>
    </div>

    <!-- Pagination controls -->
    <div class="pagination" v-if="totalPages > 1">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ 'active': currentPage === page }">
        {{ page }}
      </button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const foodObj = ref({ name: '' });
const selectedType = ref('All');
const foodTypes = ref(['All', 'snack', 'main', 'beverage', 'dessert']); // Types of food
const foods = ref([]); // All food items
const currentPage = ref(1); // Current pagination page
const itemsPerPage = ref(6); // Number of items per page

// Filtered foods based on the selected type and search keyword
const filteredFoods = computed(() => {
  let result = foods.value;
  if (selectedType.value !== 'All') {
    result = result.filter(f => f.food_type.toLowerCase() === selectedType.value.toLowerCase());
  }
  if (foodObj.value.name) {
    result = result.filter(f => f.food_name.toLowerCase().includes(foodObj.value.name.toLowerCase()));
  }
  return result;
});

// Paginated foods to display on the current page
const paginatedFoods = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredFoods.value.slice(start, end);
});

// Total number of pages for pagination
const totalPages = computed(() => {
  return Math.ceil(filteredFoods.value.length / itemsPerPage.value);
});

// Filter foods by type
const filterType = (type) => {
  selectedType.value = type;
  currentPage.value = 1; // Reset to first page when changing filter
};

// Fetch all foods from API
const fetchFoods = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/foods');
    foods.value = response.data;
  } catch (error) {
    console.error('Error fetching foods:', error);
  }
};

// Change the current pagination page
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Fetch foods when the component is mounted
onMounted(() => {
  fetchFoods();
});
</script>

<style scoped>
.menu-section {
  padding: 20px;
}

.heading {
  text-align: center;
  margin-bottom: 20px;
}

.search-box {
  margin-bottom: 20px;
  text-align: center;
}

.search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.filter-section {
  margin-bottom: 20px;
}

.menu-tabs {
  display: flex;
  justify-content: center;
}

.menu-tabs button {
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-tabs button.active {
  background-color: #057835;
  color: #fff;
}

.food-list {
  display: flex;
  flex-wrap: wrap;
}

.food-item {
  padding: 10px;
}

.food-image {
  max-width: 100%;
  height: auto;
}

/* Styles for router-link to remove underline and blue color */
.food-link {
  text-decoration: none;
  color: inherit;
}

.food-link:hover {
  text-decoration: none;
  color: inherit;
}

/* Styles for card title (food name) */
.food-item .card-title {
  color: #000; /* Màu đen hoặc màu mặc định */
  text-decoration: none; /* Bỏ gạch chân */
  cursor: default; /* Con trỏ chuột bình thường */
}

.food-item .card-title:hover {
  color: #000; /* Giữ nguyên màu khi hover */
  text-decoration: none; /* Không gạch chân khi hover */
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #057835;
  color: white;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
