// import Vue from 'vue'
// import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase";
import VueRouter from 'vue-router'
// import Login from '../components/Login'




const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("../components/Login.vue")
    },
    {
        path: "/signup",
        name: "Signup", 
        component: () => import("../components/Signup.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard", 
        component: () => import("../components/Dashboard"),
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    mode: "history",
  base: process.env.BASE_URL,
    routes
    });
    router.beforeEach((to, from, next) => {
        const authenticatedUser = firebase.auth().currentUser;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        
        if ( requiresAuth && ! authenticatedUser ) {
            alert("You are not authorized to access this area.");
            next("/");
        }
        else {
            next();
        }
    });

 export default router;