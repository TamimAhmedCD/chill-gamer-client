import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/top-reviews')
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
        loader: () => fetch('http://localhost:5000/reviews')
      },
      {
        path: '/my-review',
        element: <PrivateRoute><MyReview/></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/reviews')
      },
      {
        path: '/watch-list',
        element: <PrivateRoute><WatchList/></PrivateRoute>,
      },
      {
        path: '/update-review/:id',
        element: <PrivateRoute><UpdateReview/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>
);
