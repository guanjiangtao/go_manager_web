import userRouters from "@/router/user";


const routers  = [
    {
        path: '/',
        component: () => import('../view/home'),
        children: [
            {
                path: '/',
                component: () => import('../view/panel')
            },
            {
                path: '/home',
                component: () => import('../view/panel')
            },
            ...userRouters,
        ]
    },
]


export default routers