import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    admin: false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.admin = user && user.user_type === 2;
    },
    logout(state) {
      state.user = null;
      state.admin = false;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout({ commit }) {
      commit('logout'); // Đăng xuất
      localStorage.removeItem('user'); // Xóa thông tin người dùng khỏi localStorage
    },
    restoreUser({ commit }) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        commit('setUser', JSON.parse(savedUser)); // Khôi phục người dùng từ localStorage
      }
    }
  },
  getters: {
    isAdmin(state) {
      return state.admin; // Kiểm tra xem có phải là admin không
    },
    isAuthenticated(state) {
      return !!state.user; // Kiểm tra xem đã đăng nhập chưa
    },
    getUserId(state) {
      return state.user ? state.user.id : null; // Lấy user_id từ state
    }
  }
});

// Khôi phục trạng thái người dùng từ localStorage khi store được khởi tạo
store.dispatch('restoreUser');

export default store;
