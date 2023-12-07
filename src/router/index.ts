import {createRouter, createWebHashHistory} from 'vue-router'
import {h} from "vue";
import {setupLayouts} from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)
routes.push({path: '/', component: {render: () => h("h2", "home")}})

export default createRouter({
    history: createWebHashHistory(),
    routes
})
