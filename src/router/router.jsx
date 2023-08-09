import { createBrowserRouter } from "react-router-dom";
import { Home } from "../routes/Home";
import { Main } from "../layouts/Main";
import { Cities } from "../routes/Cities";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cities",
                element: <Cities />
            }
        ]
    }
])
