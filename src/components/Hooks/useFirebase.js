import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebaseConfig/firebase.init";


initializeFirebase();


const useFirebase = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, SetIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {

        SetIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .finally(() => SetIsLoading(false));
    }

    const handleLogOut = () => {
        SetIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
        })
            .finally(() => SetIsLoading(false));
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleAddUser = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        else {
            //  console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    if (user.email) {
                        setError('');
                    }
                    else {
                        setError('Registration Successful');
                    }
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    const handleRegister = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (!user.email) {
                    setError('Login Successful');
                }
                else {
                    setError('');
                }
            })
            .catch(error => {
                setError('Wrong password');
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {

            }
            SetIsLoading(false);
        });
    }, [auth])

    return {
        handleGoogleSignIn, user, handleLogOut, handleEmail, handlePassword, handleAddUser, handleRegister, isLoading, error
    };
}

export default useFirebase;