// 路由
const userRouters = [
    {
        path: '/user',
        component: () => import('../view/user'),
        children: [
            {
                path: '',
                component: () => import('../view/user/user_list')
            },
            {
                path: 'list',
                component: () => import('../view/user/user_list')
            },
            {
                path: 'display/:id',
                component: () => import('../view/user/user_display')
            },
            {
                path: 'edit/:id',
                component: () => import('../view/user/user_form')
            },
        ]
    },
]


export default userRouters