import { createContext, ReactNode } from "react";

interface UserProps{
    name: String;
    avatarURL?: string
}

interface AuthProviderProps{
    children: ReactNode;
}

export interface AuthContextDataProps{
    user: UserProps;
    signIn: () => Promise<void>
}
export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }){

    async function signIn(){
        console.log('vamos logar')
    }

    return(
        <AuthContext.Provider value={{
            signIn,
            user:{
                name: "Renato",
                avatarURL: "https://www.github.com/r-avellar.png"
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}