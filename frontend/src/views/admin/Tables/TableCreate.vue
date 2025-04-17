<template>
  <div class="table-create">
    <h1>Create New Table</h1>
    <form @submit.prevent="createTable">
      <div class="mb-3">
        <label for="tableNumber" class="form-label">Table Number</label>
        <input type="text" id="tableNumber" v-model="newTable.table_number" class="form-control" required />
      </div>
      
      <div class="mb-3">
        <label for="tableStatus" class="form-label">Status</label>
        <select id="tableStatus" v-model="newTable.table_status" class="form-control" required>
          <option value="available">Available</option>
          <option value="occupied">Occupied</option>
        </select>
      </div>
      
      <div class="mb-3">
        <label for="tableCapacity" class="form-label">Capacity</label>
        <input type="number" id="tableCapacity" v-model="newTable.table_capacity" class="form-control" required />
      </div>
      
      <button type="submit" class="btn btn-primary">Create Table</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const newTable = ref({
  table_number: '',
  table_status: 'available',
  table_capacity: null,
});

const createTable = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/table', newTable.value);
    console.log('Table created:', response.data);
    alert('Table created successfully!');
    newTable.value = { table_number: '', table_status: 'available', table_capacity: null }; // Reset form fields
  } catch (error) {
    console.error('Error creating table:', error);
    alert('An error occurred while creating the table.');
  }
};
</script>

<style scoped>
.table-create {
  max-width: 600px;
  margin: auto;
}
</style>
