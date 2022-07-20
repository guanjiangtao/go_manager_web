// 路由
const userRouters = [
    {
        path: '/user',
        component: () => import('../view/user/user_list')
    },
    {
        path: '/user/list',
        component: () => import('../view/user/user_list')
    },
    {
        path: '/user/display/:id',
        component: () => import('../view/user/user_display')
    },
    {
        path: '/user/edit/:id',
        component: () => import('../view/user/user_form')
    },
]


export default userRouters