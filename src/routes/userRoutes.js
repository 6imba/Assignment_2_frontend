import Home from '../components/Home.vue'
import UsersList from '../components/UsersList.vue'
import AddUser from '../components/AddUser.vue'
import UpdateUser from '../components/UpdateUser.vue'
import LogIn from '../components/LogIn.vue'
import ProfilePage from '../components/ProfilePage.vue'

const userRoutes = [
    {
        name: 'HomeComponent',
        path: '/',
        component: Home
    },
    {
        name: 'UsersList',
        path: '/users-list',
        component: UsersList
    },
    {
        name: 'AddUser',
        path: '/add-user',
        component: AddUser
    },
    {
        name: 'UpdateUser',
        path: '/update-user/:id',
        component: UpdateUser
    },
    {
        name: 'LogIn',
        path: '/login',
        component: LogIn
    },
    {
        name: 'ProfilePage',
        path: '/profile',
        component: ProfilePage
    },
]

export default userRoutes;