import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Root from "./routes/Root.jsx";
import Homepage from "./routes/Homepage/Homepage.jsx";
import CategoryPage from "./routes/CategoryPage/CategoryPage.jsx";
import ProductPage from "./routes/ProductPage/ProductPage.jsx";
import './index.scss';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Outlet />
            </>
        ),
        children: [
            {
                path: "/",
                element: <Root />,
                children: [
                    {
                        path: "/",
                        element: <Homepage />
                    },
                    {
                        path: "/seatings",
                        element: <CategoryPage />,
                    },
                    {
                        path: "/product",
                        element: <ProductPage />
                    }
                ]
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
);
