import {createApp, h, resolveComponent} from "vue";
import router from "./router";

const setup = () => {
    return () => h('div', h(resolveComponent('RouterView')))
}
const app = createApp({setup})
app.use(router)
app.mount('#app')
