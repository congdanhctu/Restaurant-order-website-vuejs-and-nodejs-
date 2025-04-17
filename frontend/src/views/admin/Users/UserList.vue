<template>
  <div class="user-list">
    <h1>User List</h1>

    <!-- User table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>User Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(user, index) in paginatedUsers" :key="user.user_id">
          <tr>
            <td>{{ user.user_id }}</td>
            <td>{{ user.user_name }}</td>
            <td>{{ user.user_email }}</td>
            <td>{{ user.user_type === 1 ? 'Regular User' : 'Admin' }}</td>
            <td>
              <button @click="deleteUser(user.user_id)" class="btn btn-danger">Delete</button>
              <button @click="startEdit(user)" class="btn btn-warning">Edit</button>
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
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" @click="currentPage = page">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </li>
      </ul>
    </nav>

    <!-- Edit User Modal -->
    <div v-if="isEditing" class="modal show d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit User</h5>
            <button type="button" class="btn-close" @click="cancelEdit"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <label for="editUserName" class="form-label">User Name</label>
                <input type="text" id="editUserName" v-model="currentUser.user_name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editEmail" class="form-label">Email</label>
                <input type="email" id="editEmail" v-model="currentUser.user_email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="editUserType" class="form-label">User Type</label>
                <select id="editUserType" v-model="currentUser.user_type" class="form-control" required>
                  <option value="1">Regular User</option>
                  <option value="2">Admin</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Update User</button>
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

const users = ref([]); // Danh sách người dùng
const currentPage = ref(1); // Trang hiện tại
const itemsPerPage = ref(5); // Số mục mỗi trang
const isEditing = ref(false); // Trạng thái chỉnh sửa
const currentUser = ref({}); // Người dùng hiện tại để chỉnh sửa

// Lấy danh sách người dùng từ API
const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/user');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    alert('An error occurred while loading the user list.');
  }
};

// Tính toán danh sách người dùng phân trang
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return users.value.slice(start, start + itemsPerPage.value);
});

// Tổng số trang
const totalPages = computed(() => Math.ceil(users.value.length / itemsPerPage.value));

// Xử lý xóa người dùng
const deleteUser = async (id) => {
  if (!confirm('Are you sure you want to delete this user?')) return;

  try {
    await axios.delete(`http://localhost:5000/api/user/${id}`);
    alert('User deleted successfully!');
    getUsers(); // Tải lại danh sách sau khi xóa
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('An error occurred while deleting the user.');
  }
};

// Chuyển trang
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

// Mở form chỉnh sửa người dùng
const startEdit = (user) => {
  currentUser.value = { ...user }; // Sao chép dữ liệu người dùng để chỉnh sửa
  isEditing.value = true; // Đặt trạng thái chỉnh sửa thành true
};

// Hủy chỉnh sửa
const cancelEdit = () => {
  isEditing.value = false; // Đặt trạng thái chỉnh sửa thành false
};

// Cập nhật người dùng
const updateUser = async () => {
  try {
    const response = await axios.put(`http://localhost:5000/api/user/${currentUser.value.user_id}`, currentUser.value);
    alert('User updated successfully!');
    isEditing.value = false;
    getUsers(); // Tải lại danh sách người dùng
  } catch (error) {
    console.error('Error updating user:', error);
    alert('An error occurred while updating the user.');
  }
};

// Lấy dữ liệu khi component được gắn kết
onMounted(() => {
  getUsers();
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
