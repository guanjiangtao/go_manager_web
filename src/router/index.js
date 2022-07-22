import userRouters from "@/router/user";


const routers = [
    {
        path: '/',
        component: () => import('../view'),
        children: [
            {
                path: '/',
                component: () => import('../view/card'),
                children: [
                    {
                        path: '/',
                        component: () => import('../view/home')
                    },
                    {
                        path: '/home',
                        component: () => import('../view/home')
                    },
                    ...userRouters,
                ]
            }
        ]
    },
]


export default routers