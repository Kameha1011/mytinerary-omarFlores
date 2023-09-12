import { createBrowserRouter } from "react-router-dom";
import { Home } from "../routes/Home";
import { Main } from "../layouts/Main";
import { Cities } from "../routes/Cities";
import { CityDetail } from "../routes/CityDetail";
import { getCityById } from "../api/citiesService";
import { Signup } from "../routes/Signup";
import { Signin } from "../routes/Signin";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cities/:id",
        element: <CityDetail />,
        loader: async ({ params }) => {
          const { id } = params;
          const data = await getCityById(id);
          return data;
        },
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute >
        <Signup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <ProtectedRoute >
        <Signin />
      </ProtectedRoute>
    ),
  },
]);
