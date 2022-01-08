import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

function useAuthListener() {
    const savedUser = JSON.parse(localStorage.getItem('authUser'));

    const [user, setUser] = useState(savedUser);

    useEffect(() => {
        const listener = onAuthStateChanged(auth, authUser => {
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
