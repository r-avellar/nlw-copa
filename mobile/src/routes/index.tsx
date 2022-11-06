import { NavigationContainer } from '@react-navigation/native'
import { SignIn } from '../screens/SignIn';
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './app.routes'


export function Routes(){
    const { user } = useAuth();
    return(
        <NavigationContainer>
            {user.name ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>
    )
}