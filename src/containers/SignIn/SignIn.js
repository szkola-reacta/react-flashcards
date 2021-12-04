import { logInWithGithub, logOut } from '../../services/FirebaseAuthService';

function SignIn({ user }) {
    const onLogIn = async () => {
        try {
            await logInWithGithub();
        } catch (error) {
            console.error('Failed to log in', error);
        }
    };

    const onLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error('Failed to log out', error);
        }
    }

    return (
        <div>
            <p>USER: { user?.displayName }</p>
            <button onClick={onLogIn}>Sign in with github</button>
            <button onClick={onLogOut}>Log out</button>
        </div>
    );
}

export default SignIn;
