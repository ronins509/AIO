let router = [{
    path: "/store/server",
    name: "store/server",
    component: () => import("../views/store/server.vue")
},
{
    path: "/store/application",
    name: "store/application",
    component: () => import("../views/store/application.vue")
},
{
    path: "/store/group",
    name: "store/group",
    component: () => import("../views/store/group.vue")
},
{
    path: "/store/block",
    name: "store/block",
    component: () => import("../views/store/block.vue")
},
{
    path: "/store/file",
    name: "store/file",
    component: () => import("../views/store/file.vue")
},
{
    path: "/store/authority",
    name: "store/authority",
    component: () => import("../views/store/authority.vue")
}]
export default {
    router
}