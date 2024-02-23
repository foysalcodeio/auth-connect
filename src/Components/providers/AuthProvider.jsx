import { createContext } from "react";
import PropTypes from 'prop-types'; // ES6

//create context
export const AuthContext = createContext(null);
// set value for context
// for assign data which under children
const AuthProvider = ({ children }) => {

    //obj or other any value set here
    const authInfo = {
        name: 'foysal'
    }

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