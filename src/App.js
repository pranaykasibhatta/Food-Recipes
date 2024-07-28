import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import './App.css';

import Me from './me/me';
import Food from './food/food';
import Navbar from './food/navbar'

const Layout = () => (
        <div>
          <Navbar />
          <div className='pt-10 ml-2'><Outlet /></div>
        </div>
);

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Food />,
            },
            { 
                path: "me",
                element: <Me />,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={routes} />
    );
}

export default App;
