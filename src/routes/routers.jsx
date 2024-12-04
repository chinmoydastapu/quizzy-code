import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Main from "../components/layouts/Main";
import Page404 from "../components/Page404/Page404";
import Quizes from "../components/Quizes/Quizes";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/topics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics></Statistics>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/topics/:topicId',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
                element: <Quizes></Quizes>
            }
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
]);