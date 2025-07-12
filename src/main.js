import { jsx as _jsx } from "react/jsx-runtime";
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
// import Checkout from "./pages/Checkout/Checkout.tsx";
import Profile from "./pages/Profile";
const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/cart",
        Component: Cart,
    },
    {
        path: "/sign-in",
        Component: SignIn,
    },
    {
        path: "/profile",
        Component: Profile,
    },
    // {
    //   path: "/checkout",
    //   Component: Checkout,
    // }
]);
createRoot(document.getElementById("root")).render(_jsx(RouterProvider, { router: router }));
