import React, { lazy } from "react";

const routes = [
    {
        element: lazy(() => import("./pages/home/home")),
        path: "/",
        useLayout: false,
    },
    {
        element: lazy(() => import("./pages/search/searchResult")),
        path: "/search",
        useLayout: true,
    }
]

export default routes;