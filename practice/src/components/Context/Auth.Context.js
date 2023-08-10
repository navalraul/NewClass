import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext();


const initialState = { user: null};

function reducer( state, action) {
    switch (action.type) {
        case "Login":
            return { user: action.payload}
        case "Logout":
            return { user: null}
        default:
            return state;
    }
}

const AuthProvider = ({children}) => {

    const [ state, dispatch] = useReducer(reducer, initialState);

    const Login = (userData) => {
        localStorage.setItem("Current-User",JSON.stringify(userData))
        dispatch ({
            type: "Login",
            payload: userData
        })
    }

    const Logout = () => {
        localStorage.removeItem("Current-User");
        dispatch({type: "Logout"})
    }

    useEffect(()=> {
        const isUserPresent = JSON.parse(localStorage.getItem("Current-User"))
        if(isUserPresent) {
            dispatch ({
                type: "Login",
                payload: isUserPresent
            })
        }
    },[])

    return (
        <AuthContext.Provider value={{state, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;