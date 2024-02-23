import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

//create context
export const AuthContext = createContext(null);
// set value for context
// for assign data which under children
const AuthProvider = ({ children }) => {

    //state
    const [user, setUser] = useState(null);


    //kind of data
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }




    //obj or other any value set here
    //destructure
    const authInfo = {
       user, logOut, createUser , signInUser// we use createUser hence anyplace this function can be use
    }

    //observation
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser);
            }
        })
        return ( ()=>{
            unsubscribe();
        })
    }, [])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}

/***
 * 1. create context
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the 
 * middle of the Provider.
 * 
 */