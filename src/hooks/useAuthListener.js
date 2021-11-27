import { useContext, useState, useEffect } from 'react';
import FirebaseContext from '../context/FirebaseContext';

function useAuthListener() {
    const auth = JSON.parse(localStorage.getItem('authUser'));

    const [user, setUser] = useState(auth);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(authUser => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        return () => listener();
    });

    return { user };
}

export default useAuthListener;
