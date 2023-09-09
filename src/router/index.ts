export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: routes => {
    console.log(routes)
    return setupLayouts(routes)
  },
  scrollBehavior: (to, from, savedPosition) => {
    console.log("================= scrollBehavior =================")
    console.log(to)
    console.log(from)
    console.log(savedPosition)
    return { top: 0 }
  }
})
