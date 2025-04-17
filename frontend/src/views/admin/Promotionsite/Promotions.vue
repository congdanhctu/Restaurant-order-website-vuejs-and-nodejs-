<template>
  <div class="container mt-4">
    <h1 class="mb-4">Create Promotion</h1>
    <form @submit.prevent="createPromotion">
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="promoCode">Promo Code:</label>
          <input type="text" id="promoCode" class="form-control" v-model="promotion.promo_code" required />
        </div>
        <div class="col-md-6">
          <label for="discountPercentage">Discount Percentage:</label>
          <input type="number" id="discountPercentage" class="form-control" v-model="promotion.discount_percentage" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="startDate">Start Date:</label>
          <input type="datetime-local" id="startDate" class="form-control" v-model="promotion.start_date" required />
        </div>
        <div class="col-md-6">
          <label for="endDate">End Date:</label>
          <input type="datetime-local" id="endDate" class="form-control" v-model="promotion.end_date" required />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="status">Status:</label>
          <select id="status" class="form-control" v-model="promotion.status" required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="description">Description:</label>
          <input type="text" id="description" class="form-control" v-model="promotion.description" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Create Promotion</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios

export default {
  name: "PromotionCreate",
  data() {
    return {
      promotion: {
        promo_code: '',
        discount_percentage: null,
        start_date: '',
        end_date: '',
        status: 'active',
        description: '',
      },
    };
  },
  methods: {
    createPromotion() {
      // Gửi yêu cầu API với dữ liệu promotion
      axios.post('http://localhost:5000/api/promotions/', this.promotion)
      .then((response) => {
        console.log('Promotion created successfully:', response.data);
        alert('Promotion created successfully!');
        // Reset form hoặc điều hướng đến trang khác nếu cần
        this.resetForm();
      })
      .catch((error) => {
        console.error('There was an error creating the promotion:', error);
        alert('Error creating promotion');
      });
    },
    resetForm() {
      this.promotion = {
        promo_code: '',
        discount_percentage: null,
        start_date: '',
        end_date: '',
        status: 'active',
        description: '',
      };
    }
  },
};
</script>

