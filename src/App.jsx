import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { refreshToken } from "./store/actions/authActions";
function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(refreshToken(token));
    }
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
