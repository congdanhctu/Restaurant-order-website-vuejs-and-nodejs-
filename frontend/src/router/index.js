import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Promotions from '../views/Promotions.vue';
import Menu from '../views/Menu.vue';
import Table from '../views/Table.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import MyOrders from '../views/MyOrders.vue';
import UserList from '../views/admin/Users/UserList.vue';
import AdminLayout from '../views/admin/layouts/AdminLayout.vue';
import FoodCreate from '@/views/admin/FoodSite/FoodCreate.vue';
import PromotionCreate from '@/views/admin/Promotionsite/Promotions.vue';
import PromotionsList from '@/views/admin/Promotionsite/PromotionList.vue';
import OrderDetails from '@/components/OrderDetails.vue';
import store from '../store/index';
import FoodList from '@/views/admin/FoodSite/FoodList.vue';
import OrderList from '@/views/admin/orders/OderList.vue';
import TableCreate from '@/views/admin/Tables/TableCreate.vue';
import TableList from '@/views/admin/Tables/TableList.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: Promotions
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/order/:id',
    name: 'order',
    component: OrderDetails,
    props: true
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/myorder',
    name: 'MyOrders',
    component: MyOrders
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'foods/list',
        name: 'FoodList',
        component: FoodList
      },
      {
        path: 'foods/create',
        name: 'FoodCreate',
        component: FoodCreate
      },
      {
        path: 'promotions',
        name: 'Promotioncreate',
        component: PromotionCreate
      },
      {
        path: 'promotions/list',
        name: 'PromotionList',
        component: PromotionsList
      },
      {
        path: 'orders',
        name: 'OrderList',
        component: OrderList
      },
      {
        path: 'tables/create',
        name: 'TableCreate',
        component: TableCreate
      },
      {
        path: 'tables/list',
        name: 'TableList',
        component: TableList
      },
      {
        path: 'users/list',
        name: 'UserList',
        component: UserList
      }
    ],
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAdmin) {
        next('/login');
      } else {
        next();
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
