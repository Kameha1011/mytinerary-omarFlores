import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const ProtectedRoute = ({children, }) => {
    let user = useSelector(store => store.authReducer.user);
    const location = useLocation();
    if(user) return <Navigate to={location.state?.from || '/'}/>;

    return children;
}
