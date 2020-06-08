import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

var router = new Router({
    routes: [
        {
            path: "/home",
            name: "home",
            component: res => require(['./components/home/index'], res),
            children: [
                {
                    path: "/login",
                    name: "login",
                    component: res => require(['./components/login'], res)
                }
            ]
        },

    ]
})
export default router;