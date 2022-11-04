import { createContext, ReactNode, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession()

interface UserProps{
    name: String;
    avatarURL?: string
}

interface AuthProviderProps{
    children: ReactNode;
}

export interface AuthContextDataProps{
    user: UserProps;
    isUserLoading: boolean;
    signIn: () => Promise<void>;
}
export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }){
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [user, setUser] = useState<UserProps>({} as UserProps)

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '562602682584-ceup8ph2pnbtdcph3dpg5jukpgmuie9f.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true}),
        scopes: ['profile', 'email']
    })

    async function signIn(){
        try {
            setIsUserLoading(true)
            await promptAsync();
            
        } catch (error) {
            console.log(error)
            throw error
        }finally{
            setIsUserLoading(false)
        }
    }

   async function signInWithGoogle(acces_token: string) {
        console.log("TOKEN ===>", acces_token)
   }

    useEffect(() => {
        if(response?.type === 'success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken)
        }
    }, [response])


    return(
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}