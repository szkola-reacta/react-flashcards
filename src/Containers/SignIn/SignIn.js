import { logInWithGithub, logOut } from '../../services/FirebaseAuthService';

function SignIn() {
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
            <button onClick={onLogIn}>Log in with github</button>
            <button onClick={onLogOut}>Log out</button>
        </div>
    );
}

export default SignIn;
