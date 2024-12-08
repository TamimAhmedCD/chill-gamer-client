import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import AllReview from "./pages/AllReview";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext from "./context/AuthContext";
import AddReview from "./pages/AddReview";
import MyReview from "./pages/MyReview";
import PrivateRoute from "./routes/PrivateRoute";
import UpdateReview from "./pages/UpdateReview";
import WatchList from "./pages/Watchlist";
import ReviewDetails from "./pages/ReviewDetails";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://server-one-jade.vercel.app/top-reviews')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/add-review',
        element: <PrivateRoute><AddReview/></PrivateRoute>
      },
      {
        path: "/all-review",
        element: <AllReview />,
        loader: () => fetch('https://server-one-jade.vercel.app/reviews')
      },
      {
        path: '/my-review',
        element: <PrivateRoute><MyReview/></PrivateRoute>,
        loader: () => fetch('https://server-one-jade.vercel.app/reviews')
      },
      {
        path: '/watch-list',
        element: <PrivateRoute><WatchList/></PrivateRoute>,
        loader: () => fetch('https://server-one-jade.vercel.app/watch-list')
      },
      {
        path: '/review-details/:id',
        element: <PrivateRoute><ReviewDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-one-jade.vercel.app/reviews/${params.id}`)
      },
      {
        path: '/update-review/:id',
        element: <PrivateRoute><UpdateReview/></PrivateRoute>,
        loader: ({params}) => fetch(`https://server-one-jade.vercel.app/reviews/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContext>
  </StrictMode>
);
