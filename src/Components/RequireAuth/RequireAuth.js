import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
    const auth = true;
    const location = useLocation();

    return auth ? children : <Navigate to="/react-flashcards/sign-in"
        replace
        state={{ path: location.pathname }}
    />
}

export default RequireAuth;