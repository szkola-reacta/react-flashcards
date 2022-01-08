import { Navigate } from 'react-router-dom';
import useAuthListener from '../../hooks/useAuthListener';

export default function RequireAuth({ children }) {
    const { user } = useAuthListener();

    if (!user) {
        return <Navigate to="/sign-in" replace />;
    }

    return children;
}
