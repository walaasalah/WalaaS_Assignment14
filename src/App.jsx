import React from 'react'
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from "./Pages/Home/Home.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import About from "./Pages/About/About.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import ArticleDetail from './Pages/ArticleDetail/ArticleDetail.jsx';
import Privacy from './Pages/privacy/privacy.jsx';
import Terms from './Pages/Terms/Terms.jsx';

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Blog", element: <Blog /> },
        { path: "About", element: <About /> },
          { path: "Blog/:slug", element: <ArticleDetail /> },
                { path: "Blog/category/:slug", element: <Blog /> },
          {path:"Terms",element:<Terms/>},
           { path: "privacy", element: <Privacy /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
