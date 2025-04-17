<template>
  <div class="promotion-list">
    <h1>Promotion List</h1>

    <!-- Promotion list -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Promo Code</th>
          <th>Discount</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(promotion, index) in paginatedPromotions" :key="promotion.promo_id">
          <tr>
            <td>{{ promotion.promo_id }}</td>
            <td>{{ promotion.promo_code || 'No code available' }}</td>
            <td>{{ promotion.discount_percentage ? `${promotion.discount_percentage}%` : 'No discount' }}</td>
            <td>{{ formatDate(promotion.start_date) }}</td>
            <td>{{ formatDate(promotion.end_date) }}</td>
            <td>{{ promotion.status || 'Inactive' }}</td>
            <td>{{ promotion.description || 'No description' }}</td>
            <td>
              <button @click="deletePromotion(promotion.promo_id)" class="btn btn-danger">Delete</button>
              <button @click="startEdit(promotion)" class="btn btn-warning">Edit</button>
            </td>
          </tr>
        </template>
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

    <!-- Edit Promotion Modal -->
    <div v-if="isEditing" class="modal show d-block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Promotion</h5>
            <button type="button" class="btn-close" @click="cancelEdit"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updatePromotion">
              <div class="mb-3">
                <label for="editPromoCode" class="form-label">Promo Code</label>
                <input type="text" id="editPromoCode" v-model="currentPromotion.promo_code" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editDiscount" class="form-label">Discount Percentage</label>
                <input type="number" id="editDiscount" v-model="currentPromotion.discount_percentage" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editStartDate" class="form-label">Start Date</label>
                <input type="datetime-local" id="editStartDate" v-model="currentPromotion.start_date" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editEndDate" class="form-label">End Date</label>
                <input type="datetime-local" id="editEndDate" v-model="currentPromotion.end_date" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editStatus" class="form-label">Status</label>
                <select id="editStatus" v-model="currentPromotion.status" class="form-control" required>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="editDescription" class="form-label">Description</label>
                <textarea id="editDescription" v-model="currentPromotion.description" class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Update Promotion</button>
              <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const promotions = ref([]);
const isEditing = ref(false);
const currentPromotion = ref({});
const currentPage = ref(1);
const itemsPerPage = ref(5);

// Fetch promotion list when component mounts
const getPromotions = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/promotions');
    promotions.value = response.data;
    console.log(promotions.value); // Log data to check
  } catch (error) {
    console.error('Error fetching promotion list:', error);
    alert('An error occurred while loading the promotion list.');
  }
};

// Format date to a readable format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleString('en-GB', options); // Use 'en-GB' for dd/mm/yyyy format
};

// Computed property to get paginated promotions
const paginatedPromotions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return promotions.value.slice(start, start + itemsPerPage.value);
});

// Total pages calculation
const totalPages = computed(() => {
  return Math.ceil(promotions.value.length / itemsPerPage.value);
});

// Update promotion item
const updatePromotion = async () => {
  try {
    const response = await axios.put(`http://localhost:5000/api/promotions/${currentPromotion.value.promo_id}`, currentPromotion.value);
    console.log('Promotion updated successfully:', response.data);
    alert('Promotion updated successfully!');
    isEditing.value = false;
    getPromotions(); // Update promotion list
  } catch (error) {
    console.error('Error updating promotion:', error);
    alert('An error occurred while updating promotion.');
  }
};

// Delete promotion item
const deletePromotion = async (id) => {
  if (!confirm('Are you sure you want to delete this promotion?')) return;

  try {
    const response = await axios.delete(`http://localhost:5000/api/promotions/${id}`);
    console.log('Promotion deleted:', response.data);
    alert('Promotion deleted successfully!');
    getPromotions(); // Update promotion list
  } catch (error) {
    console.error('Error deleting promotion:', error);
    alert('An error occurred while deleting promotion.');
  }
};

// Open edit form and populate it with data
const startEdit = (promotion) => {
  currentPromotion.value = { ...promotion }; // Copy promotion data
  isEditing.value = true; // Set editing state
};

// Cancel editing
const cancelEdit = () => {
  isEditing.value = false; // Reset editing state
};

// Pagination functions
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

// On mounted lifecycle hook
onMounted(() => {
  getPromotions(); // Fetch promotion list
});
</script>

<style scoped>
/* Custom styles for pagination */
.pagination .page-link {
  background-color: #007bff; /* Bootstrap primary color */
  color: white; /* White text */
  border-radius: 5px; /* Rounded corners */
}

.pagination .page-item.disabled .page-link {
  background-color: #6c757d; /* Gray background for disabled */
  color: #ffffff; /* White text for disabled */
}

.pagination .page-item.active .page-link {
  background-color: #0056b3; /* Darker shade for active */
  color: white; /* White text for active */
}

.pagination .page-link:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

/* Modal Styling */
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  max-width: 600px;
  margin: auto;
}

/* Form styling */
.edit-form input, .edit-form textarea {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
}

.form-buttons button {
  margin-right: 10px;
}
</style>
