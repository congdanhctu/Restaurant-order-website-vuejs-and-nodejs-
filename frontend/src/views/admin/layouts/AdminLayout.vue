<template>
  <div class="admin-layout">
    <Sidebar v-if="isAdmin" />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sidebar from "../../../components/Sidebar.vue"; // Đường dẫn chính xác nếu bạn đang ở trong layouts


export default {
  name: "AdminLayout",
  components: {
    Sidebar,
  },
  computed: {
    ...mapGetters(["isAdmin"]),
  },
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}
.main-content {
  flex-grow: 1; /* Nội dung chính chiếm hết không gian còn lại */
  padding: 2rem;
}
</style>
