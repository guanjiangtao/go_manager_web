// 路由
const userRouters = [
    {
        path: '/user',
        component: () => import('../view/user/user_list')
    },
]


export default userRouters