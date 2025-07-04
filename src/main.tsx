import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Cart from './pages/Cart.tsx';
import SignIn from './pages/SignIn.tsx';
import Profile from './pages/Profile.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/cart",
    Component: Cart
  },
  {
    path: "/sign-in",
    Component: SignIn
  },
  {
    path: "/profile",
    Component: Profile
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
