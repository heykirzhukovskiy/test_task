import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Home from './Pages/Home';
import About from './Pages/About';

export const routes = [
    {
        isNavBar: true,
        isExact: true,
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        isNavBar: true,
        path: '/about',
        name: 'About',
        component: About
    },
    {
        isNavBar: true,
        path: '/profile',
        name: 'Profile',
        component: Profile,
        isPrivate: true
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];