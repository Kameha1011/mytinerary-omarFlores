import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { googleSignin } from "../store/actions/authActions";

export const GoogleSignin = () => {
  const googleBtnRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const handleCredentialResponse = (response) => {
    dispatch(googleSignin(response.credential));
    navigate(location.state?.from || "/");
  };
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "296328721406-2imcel9it7g19ihhtd3bcgdtmlff1kk4.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        googleBtnRef.current,
        { theme: "outline", size: "large" } // customization attributes
      );
    }
  }, []);
  return <div id="buttonDiv" ref={googleBtnRef}></div>;
};
