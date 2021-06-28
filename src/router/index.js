import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('@/views/front/Product.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'cart',
        component: () => import('@/views/front/Cart.vue'),
      },
      {
        path: 'customerForm',
        component: () => import('@/views/front/CustomerForm.vue'),
      },
      {
        path: 'signIn',
        component: () => import('@/views/SignIn.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/views/Admin.vue'),
    children: [
      {
        path: 'productsAdmin',
        component: () => import('@/views/admin/ProductsAdmin.vue'),
      },
      {
        path: 'orders',
        component: () => import('@/views/admin/Orders.vue'),
      },
      {
        path: 'coupon',
        component: () => import('@/views/admin/Coupon.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'linkActive',
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
