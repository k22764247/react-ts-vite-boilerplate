import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout";

const DefaultPage = lazy(() => import("../pages/DefaultPage"));

const Router = () => {
    const routes = [
        { path: "/", element: <Navigate to="/default" replace /> },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    element: <Navigate to="/default" replace />,
                    index: true,
                },
                {
                    path: "/default",
                    element: (
                        <Suspense>
                            <DefaultPage />
                        </Suspense>
                    ),
                },
            ],
        },
        { path: "*", element: <Navigate to="/default" replace /> },
    ];

    return useRoutes(routes);
};

export default Router;
