import Vue from 'vue'
import Facts from './Facts/Facts.vue'
import Cats from './Something/Something.vue'
import Home from './Home.vue'
import Navigation from './Navigation.vue'
import Meta from "vue-meta";
import Router from "vue-router";

Vue.use(Meta);
Vue.use(Router);

var router = new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            // path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/facts/table-facts",
            name: "facts",
            component: Facts
        },
        {
            path: "/something/cats",
            name: "cats",
            component: Cats
        }
    ]
});


Vue.config.productionTip = false
new Vue({
    el: "#app",
    router,
    render: h => h(Navigation)
})

