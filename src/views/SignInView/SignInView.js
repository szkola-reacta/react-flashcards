import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { logInWithGithub } from '../../services/FirebaseAuthService';
import AuthContext from '../../context/AuthContext';
import MainLayout from '../../layouts/MainLayout';
import SignInCard from '../../components/SignInCard';

export default function SignInView() {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Navigate to="/app" />;
    }

    const onLogIn = async () => {
        try {
            await logInWithGithub();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to log in', error);
        }
    };

    return (
        <MainLayout>
            <SignInCard onLogIn={onLogIn} />
        </MainLayout>
    );
}
