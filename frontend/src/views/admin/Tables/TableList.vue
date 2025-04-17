<template>
  <div class="table-list">
    <h1>Table List</h1>

    <!-- Table list -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Table Number</th>
          <th>Status</th>
          <th>Capacity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(table, index) in paginatedTables" :key="table.table_id">
          <tr>
            <td>{{ table.table_id }}</td>
            <td>{{ table.table_number }}</td>
            <td>{{ table.table_status }}</td>
            <td>{{ table.table_capacity }}</td>
            <td>
              <button @click="deleteTable(table.table_id)" class="btn btn-danger">Delete</button>
              <button @click="startEdit(table)" class="btn btn-warning">Edit</button>
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

    <!-- Edit Table Modal -->
    <div v-if="isEditing" class="modal show d-block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Table</h5>
            <button type="button" class="btn-close" @click="cancelEdit"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateTable">
              <div class="mb-3">
                <label for="editTableNumber" class="form-label">Table Number</label>
                <input type="text" id="editTableNumber" v-model="currentTable.table_number" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editStatus" class="form-label">Status</label>
                <select id="editStatus" v-model="currentTable.table_status" class="form-control" required>
                  <option value="occupied">Occupied</option>
                  <option value="available">Available</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="editCapacity" class="form-label">Capacity</label>
                <input type="number" id="editCapacity" v-model="currentTable.table_capacity" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary">Update Table</button>
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

const tables = ref([]);
const isEditing = ref(false);
const currentTable = ref({});
const currentPage = ref(1);
const itemsPerPage = ref(5);

// Fetch table list when component mounts
const getTables = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/table');
    tables.value = response.data;
    console.log(tables.value); // Log data to check
  } catch (error) {
    console.error('Error fetching table list:', error);
    alert('An error occurred while loading the table list.');
  }
};

// Computed property to get paginated tables
const paginatedTables = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return tables.value.slice(start, start + itemsPerPage.value);
});

// Total pages calculation
const totalPages = computed(() => {
  return Math.ceil(tables.value.length / itemsPerPage.value);
});

// Update table item
const updateTable = async () => {
  try {
    const response = await axios.put(`http://localhost:5000/api/table/${currentTable.value.table_id}`, currentTable.value);
    console.log('Table updated successfully:', response.data);
    alert('Table updated successfully!');
    isEditing.value = false;
    getTables(); // Update table list
  } catch (error) {
    console.error('Error updating table:', error);
    alert('An error occurred while updating table.');
  }
};

// Delete table item
const deleteTable = async (id) => {
  if (!confirm('Are you sure you want to delete this table?')) return;

  try {
    const response = await axios.delete(`http://localhost:5000/api/table/${id}`);
    console.log('Table deleted:', response.data);
    alert('Table deleted successfully!');
    getTables(); // Update table list
  } catch (error) {
    console.error('Error deleting table:', error);
    alert('An error occurred while deleting table.');
  }
};

// Open edit form and populate it with data
const startEdit = (table) => {
  currentTable.value = { ...table }; // Copy table data
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
  getTables(); // Fetch table list
});
</script>

<style scoped>
/* Custom styles for pagination */
.pagination .page-link {
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

.pagination .page-item.disabled .page-link {
  background-color: #6c757d;
  color: #ffffff;
}

.pagination .page-item.active .page-link {
  background-color: #0056b3;
  color: white;
}

.pagination .page-link:hover {
  background-color: #0056b3;
}

/* Modal Styling */
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  max-width: 600px;
  margin: auto;
}
</style>
