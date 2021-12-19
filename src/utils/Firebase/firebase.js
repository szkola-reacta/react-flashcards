import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { firebaseConfig } from './config';


const app = firebase.initializeApp(firebaseConfig);

export { app };
