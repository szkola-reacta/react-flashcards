import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';

async function logOut() {
    return signOut(auth);
}

async function logInWithGithub() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
}

export { logOut, logInWithGithub };
