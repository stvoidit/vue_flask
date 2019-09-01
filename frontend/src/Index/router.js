import Vue from 'vue'
import Router from 'vue-router'
import Index from './Index.vue'
import About from './About.vue'
import TableOne from './TableOne.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/index/about',
            name: 'about',
            component: About
        },
        {
            path: '/index/sometable',
            name: 'sometable',
            component: TableOne
        }
    ]
})