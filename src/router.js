import Vue from 'vue';
import Router from 'vue-router';

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Post from "./views/Post.vue"

Vue.use(Router);

export default new Router({
   mode: "history",
   routes: [{
        path: '/',
        component: Home,
        name: "home",
        meta: {title: "home"}
   },
   {
       path: "/login",
       component: Login,
       name: "log-in",
       meta: {title: "log-in"}
   },
   {
        path: "/posts",
        component: Post,
        name: "posts",
        meta: {title: "posts"}
   }] 
})