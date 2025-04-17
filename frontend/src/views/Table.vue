<template>
  <div class="container">
    <h1 class="my-4"><i class="fa fa-table"></i> Table Page</h1>

    <!-- Hiển thị bảng có table_status là available -->
    <div v-if="availableTables.length" class="row">
      <h2 class="col-12">Available Tables</h2>
      <div v-for="table in availableTables" :key="table.table_id" class="col-md-4 col-sm-6 mb-4">
        <div class="card text-center">
          <div class="card-header">
            <i class="fa fa-chair"></i> Table Number: {{ table.table_number }}
          </div>
          <div class="card-body">
            <h5 class="card-title">Capacity: {{ table.table_capacity }} people</h5>
            <p class="card-text">This table is currently available for booking.</p>
            <button class="btn btn-primary" @click="goToMenu">Book Now</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <p>No available tables at the moment.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter từ Vue Router
import axios from 'axios';

const router = useRouter(); // Khởi tạo router
const tables = ref([]); // Dữ liệu tất cả bàn
const availableTables = ref([]); // Dữ liệu bàn có table_status là available

const fetchTables = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/table'); // Gọi API để lấy dữ liệu bàn
    tables.value = response.data; // Lưu dữ liệu bàn vào biến tables
    availableTables.value = tables.value.filter(table => table.table_status === 'available'); // Lọc bàn có table_status là available
  } catch (error) {
    console.error("Error fetching tables:", error);
  }
};

const goToMenu = () => {
  router.push('/menu'); // Chuyển hướng tới Menu.vue qua Vue Router
};

onMounted(fetchTables); // Gọi fetchTables khi component được mount
</script>

<style scoped>
/* Tạo kiểu cho card */
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa;
  font-size: 18px;
  font-weight: bold;
}

.card-body {
  padding: 20px;
}

.card-body .btn {
  margin-top: 10px;
}
</style>
