<template>
  <div class="container mt-4">
    <h1 class="mb-4">Order Management</h1>

    <!-- Order Table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Food Name</th>
          <th>Quantity</th>
          <th>Table Number</th>
          <th>Total</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in paginatedOrders" :key="order.order_id">
          <td>{{ order.order_id }}</td>
          <td>{{ order.food_name }}</td>
          <td>{{ order.order_quantity }}</td>
          <td>{{ order.table_number }}</td>
          <td>{{ order.order_total }}</td>
          <td>{{ order.order_status }}</td>
          <td>
            <button @click="editOrder(order)" class="btn btn-warning btn-sm">Edit</button>
            <button @click="deleteOrder(order.order_id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

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

    <!-- Edit Order Modal -->
    <div v-if="showEditModal" class="modal show d-block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Order</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateOrder">
              <div class="mb-3">
                <label for="editFoodName" class="form-label">Food Name</label>
                <input type="text" id="editFoodName" v-model="selectedOrder.food_name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editQuantity" class="form-label">Quantity</label>
                <input type="number" id="editQuantity" v-model="selectedOrder.order_quantity" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editTableNumber" class="form-label">Table Number</label>
                <input type="text" id="editTableNumber" v-model="selectedOrder.table_number" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editTotal" class="form-label">Total</label>
                <input type="number" id="editTotal" v-model="selectedOrder.order_total" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editStatus" class="form-label">Status</label>
                <select id="editStatus" v-model="selectedOrder.order_status" class="form-control" required>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Save Changes</button>
              <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const orders = ref([]);
const showEditModal = ref(false);
const selectedOrder = ref({});
const currentPage = ref(1);
const itemsPerPage = ref(5);

const fetchOrders = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/order');
    orders.value = response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    alert("Error fetching orders");
  }
};

const paginatedOrders = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return orders.value.slice(start, start + itemsPerPage.value);
});

const totalPages = computed(() => {
  return Math.ceil(orders.value.length / itemsPerPage.value);
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const editOrder = (order) => {
  selectedOrder.value = { ...order };
  showEditModal.value = true;
};

const updateOrder = async () => {
  try {
    await axios.put(`http://localhost:5000/api/order/${selectedOrder.value.order_id}`, selectedOrder.value);
    alert("Order updated successfully");
    fetchOrders();
    closeModal();
  } catch (error) {
    console.error("Error updating order:", error);
    alert("Error updating order");
  }
};

const deleteOrder = async (orderId) => {
  if (confirm("Are you sure you want to delete this order?")) {
    try {
      await axios.delete(`http://localhost:5000/api/order/${orderId}`);
      alert("Order deleted successfully");
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Error deleting order");
    }
  }
};

const closeModal = () => {
  showEditModal.value = false;
  selectedOrder.value = {};
};

onMounted(() => {
  fetchOrders();
});
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
