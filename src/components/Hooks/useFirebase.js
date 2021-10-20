import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebaseConfig/firebase.init";


initializeFirebase();


const useFirebase = () => {
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
        })
            .finally(() => SetIsLoading(false));
    }

    const handleEmail = event => {
        // console.log(event.target.value);
        setEmail(event.target.value);

    }

    const handlePassword = event => {
        // console.log(event.target.value);
        setPassword(event.target.value);

    }

    const handleAddUser = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            return;
        }
        else {
            //  console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    //  console.log(result.user);

                })

        }




    }

    const handleRegister = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })


    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
            }
            SetIsLoading(false);
        });
    }, [auth])


    return { handleGoogleSignIn, user, handleLogOut, handleEmail, handlePassword, handleAddUser, handleRegister, isLoading };

}

export default useFirebase;