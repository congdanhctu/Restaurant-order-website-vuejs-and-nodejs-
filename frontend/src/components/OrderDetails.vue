<template>
  <div class="order-details">
    <div class="order-details-inner">
      <h2>Order Summary for {{ foodDetails.food_name }}</h2>

      <div class="d-flex flex-wrap product-container">
        <div class="image">
          <img :src="`http://localhost:5000/${foodDetails.food_src}`" alt="Food Image" />
        </div>
        <div class="content">
          <p class="name">{{ foodDetails.food_name }}</p>
          <p class="desc">{{ foodDetails.food_desc }}</p>
          <p class="price">Price: ${{ (foodDetails.food_price - foodDetails.food_discount).toFixed(2) }}</p>
          <p class="total-price">Total: ${{ finalTotalPrice.toFixed(2) }}</p>
        </div>
      </div>

      <div class="quantity-section">
        <label for="quantity">Quantity:</label>
        <input type="number" v-model="order_quantity" id="quantity" min="1" max="100" />
      </div>

      <div class="promo-section">
        <label for="promo_code">Enter Promo Code:</label>
        <input v-model="promo_code" id="promo_code" placeholder="Enter promo code" />
        <button @click="applyPromoCode">Apply Promo</button>
        <p v-if="promoMessage">{{ promoMessage }}</p>
      </div>

      <div class="table-section">
        <label for="table">Select Table:</label>
        <select v-model="selectedTable" id="table">
          <option v-for="(table, index) in availableTables" :key="index" :value="table">
            {{ table.table_number }}
          </option>
        </select>
      </div>

      <p v-if="selectedTable" class="table-info">
        You chose table number {{ selectedTable.table_number }} with Capacity: {{ selectedTable.table_capacity }} people.
      </p>

      <button @click="submitOrder">Confirm Order</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const foodDetails = ref({});
const order_quantity = ref(1);
const selectedTable = ref(null);
const availableTables = ref([]);
const promo_code = ref("");
const promotion = ref({ valid: false, discount_percentage: 0 });
const promoMessage = ref("");

const route = useRoute();

// Tính tổng tiền trước khi áp dụng mã giảm giá
const totalPrice = computed(() => {
  return (foodDetails.value.food_price - foodDetails.value.food_discount) * order_quantity.value;
});

// Tính tổng tiền sau khi áp dụng mã giảm giá
const finalTotalPrice = computed(() => {
  if (promotion.value.valid) {
    const discountAmount = totalPrice.value * (promotion.value.discount_percentage / 100);
    return totalPrice.value - discountAmount;
  }
  return totalPrice.value;
});

// Lấy dữ liệu khi component được khởi tạo
onMounted(async () => {
  const foodId = route.params.id;
  try {
    const [foodResponse, tablesResponse] = await Promise.all([
      axios.get(`http://localhost:5000/api/foods/${foodId}`),
      axios.get('http://localhost:5000/api/table'),
    ]);
    foodDetails.value = foodResponse.data;
    availableTables.value = tablesResponse.data.filter(table => table.table_status === 'available');
  } catch (error) {
    console.error("Error fetching data:", error);
    alert('Có lỗi xảy ra khi tải dữ liệu món ăn và bàn.');
  }
});

// Áp dụng mã khuyến mãi
const applyPromoCode = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/promotions/check", { promo_code: promo_code.value });
    promotion.value = response.data;
    promoMessage.value = `Promo applied: ${promotion.value.discount_percentage}% off!`;
  } catch (error) {
    console.error("Error applying promo code:", error);
    const errorMessage = error.response?.data?.message || 'Invalid promo code.';
    promoMessage.value = errorMessage;
    promotion.value = { valid: false, discount_percentage: 0 };
  }
};

// Xác nhận đơn hàng
const submitOrder = () => {
  const userData = localStorage.getItem("user");
  const userId = userData ? JSON.parse(userData).id : null;

  if (!userId) {
    alert('Có lỗi xảy ra. Vui lòng đăng nhập lại.');
    return;
  }

  const orderData = {
    food_id: foodDetails.value.food_id,
    food_name: foodDetails.value.food_name,
    order_quantity: order_quantity.value,
    table_number: selectedTable.value.table_number,
    order_total: finalTotalPrice.value.toFixed(2),
    user_id: userId,
    order_status: 'pending',
  };

  console.log("Order submitted:", orderData);

  axios.post('http://localhost:5000/api/order', orderData)
    .then(response => {
      console.log("Order placed successfully:", response.data);
      alert('Đặt hàng thành công!');
    })
    .catch(error => {
      console.error("Error placing order:", error);
      const errorMessage = error.response?.data?.message || 'Có lỗi xảy ra. Vui lòng thử lại.';
      alert(errorMessage);
    });
};
</script>

<style scoped>
.order-details {
  padding: 30px;
  background-color: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.order-details-inner {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  transition: all 0.3s ease;
}
h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #2d3436;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
}
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
@media (min-width: 768px) {
  .product-container {
    flex-direction: row;
    align-items: flex-start;
  }
}
.image {
  flex: 1;
  max-width: 320px;
  margin-right: 20px;
}
.image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;
}
.image img:hover {
  transform: scale(1.1);
}
.content {
  flex: 2;
  text-align: left;
}
.content .name {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3436;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
}
.content .desc {
  color: #636e72;
  margin: 10px 0 20px;
  font-size: 1rem;
  line-height: 1.6;
}
.content .price,
.content .total-price {
  font-weight: 600;
  color: #00b894;
  font-size: 1.2rem;
}
.quantity-section,
.table-section {
  margin: 20px 0;
}
.quantity-section label,
.table-section label {
  font-weight: bold;
  color: #2d3436;
  font-size: 1.1rem;
}
input[type="number"] {
  width: 60px;
  padding: 10px;
  margin-left: 10px;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}
input[type="number"]:focus {
  border-color: #0984e3;
  outline: none;
}
input#promo_code {
  width: 100%;
  padding: 10px;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 1rem;
  transition: border-color 0.3s;
}
input#promo_code:focus {
  border-color: #0984e3;
}
.table-info {
  margin: 15px 0;
  font-weight: bold;
  color: #2d3436;
  font-size: 1.1rem;
}
button {
  padding: 12px 30px;
  background-color: #0984e3;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  display: inline-block;
}
button:hover {
  background-color: #74b9ff;
}
.promo-section button {
  margin-top: 10px;
  width: 100%;
  background-color: #fdcb6e;
  color: #2d3436;
  font-weight: 600;
  border-radius: 8px;
}
.promo-section button:hover {
  background-color: #ffeaa7;
}
.promo-section p {
  font-size: 1rem;
  color: #d63031;
  margin-top: 10px;
}
</style>


