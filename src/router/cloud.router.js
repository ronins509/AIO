let router = [{
        path: "/cloud/node",
        name: "cloud/node",
        component: () => import("../views/cloud/node.vue")
    },
    {
        path: "/cloud/network",
        name: "cloud/network",
        component: () => import("../views/cloud/network.vue")
    },
    {
        path: "/cloud/image",
        name: "cloud/image",
        component: () => import("../views/cloud/image.vue")
    },
    {
        path: "/cloud/file",
        name: "cloud/file",
        component: () => import("../views/cloud/file.vue")
    }]
export default {
    router
}