<template>
  <div class="container my-4">
    <h1 class="mb-4"><i class="fa fa-tags"></i> Promotions</h1>
    <div class="row">
      <!-- Lặp qua các promotions và hiển thị mỗi cái trong một cột -->
      <div class="col-md-4 mb-4" v-for="promotion in activePromotions" :key="promotion.promo_id">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ promotion.promo_code }}</h5>
            <p class="card-text">{{ promotion.description }}</p>
            <p><strong>Discount:</strong> {{ promotion.discount_percentage }}%</p>
            <p><strong>Start:</strong> {{ new Date(promotion.start_date).toLocaleString() }}</p>
            <p><strong>End:</strong> {{ new Date(promotion.end_date).toLocaleString() }}</p>
            <p><strong>Status:</strong> 
              <span class="text-success">{{ promotion.status }}</span>
            </p>
            <div class="mt-auto">
              <button class="btn btn-primary" @click="copyCode(promotion.promo_code)">
                Copy Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activePromotions.length === 0" class="col-12">
        <p>No active promotions available.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const promotions = ref([]); // Khởi tạo biến promotions

// Computed property để lọc các chương trình khuyến mãi đang hoạt động
const activePromotions = computed(() => {
  const now = new Date();
  return promotions.value.filter(promotion => {
    const startDate = new Date(promotion.start_date);
    const endDate = new Date(promotion.end_date);
    return promotion.status === 'active' && startDate <= now && endDate >= now;
  });
});

// Gọi API để lấy danh sách khuyến mãi khi component được gắn vào DOM
onMounted(() => {
  fetchPromotions();
});

// Hàm để gửi yêu cầu API
const fetchPromotions = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/promotions/');
    promotions.value = response.data; // Lưu dữ liệu khuyến mãi vào biến promotions
  } catch (error) {
    console.error('There was an error fetching promotions:', error);
    alert('Error fetching promotions');
  }
};

// Hàm để copy mã khuyến mãi vào clipboard
const copyCode = (code) => {
  const tempInput = document.createElement('input'); //Tạo 1 phần tử input tạm thời
  tempInput.value = code; //Gán giá trị vào input
  document.body.appendChild(tempInput); //Thêm phần tử input vào body của trang:
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert(`Promotion code "${code}" copied to clipboard!`);
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 100%;
}

.card-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.text-success {
  color: #28a745;
}

.mt-auto {
  margin-top: auto;
}
</style>
