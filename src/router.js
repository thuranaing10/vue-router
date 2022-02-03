import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'
import ProductHome from './views/ProductHome.vue'
import ProductDetail from './views/ProductDetail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component:Home
    },
    {
        path: "/about",
        name: "about",
        component:About
    },
    {
        path: "/login",
        name: "login",
        component:Login
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,

        //local middleware
        
        // beforeEnter: (to, from, next) => {
        //     let auth = localStorage.getItem('auth');
        //     if (auth) {
        //         next();
        //     } else {
        //         next('/login');
        //     }
                
        // }
    },
    {
        path: "/product",
        name: "product",
        component:ProductHome
    },
    {
        path: "/product/:id",
        name: "product/:id",
        component:ProductDetail
    },
];

const router = new VueRouter({
    mode:"history",
    routes:routes
});

//global middleware
router.beforeEach((to, from, next) => {
    if (to.path === "/profile") {
        let auth = localStorage.getItem('auth');
        if (auth) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
  }
})

router.beforeEach((to, from, next) => {
    console.log("Middleware is working.");
    next();
})

export default router;