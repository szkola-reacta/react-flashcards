import { useNavigate, useLocation } from "react-router-dom";

function SignInView() {

    // those lines are needed to redirect a user to the page they were trying to reach
    // before being asked to log in
    const navigate = useNavigate();
    const { state } = useLocation();
    const handleLogin = () => {
        navigate(state?.path || "/react-flashcards/");
    };

    return <div>Sign in view</div>;
}

export default SignInView;