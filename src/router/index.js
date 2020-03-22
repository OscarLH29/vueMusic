import Vue from 'vue';
import VueRouter from 'vue-router';

//Pages
import Home from '@/pages/home';
import About from '@/pages/about';
import Album from '@/pages/album';
import Artist from '@/pages/artist';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: {name: 'Home'}
        },
        {
            path: "/home",
            name: 'Home',
            component: Home
        },
        {
            path: "/about",
            name: 'About',
            component: About
        },
        {
            path: "/album",
            name: 'Album',
            component: Album
        },
        {
            path: "/artist",
            name: 'Artist',
            component: Artist
        }
    ],
    mode: 'history'
});

