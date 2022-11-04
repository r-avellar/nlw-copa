import { THEME } from './src/styles/theme';
import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { New } from './src/screens/New';
import { Find } from './src/screens/Find';
import { Pools } from './src/screens/Pools';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  const [fontLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontLoaded ? <Pools /> :  <Loading /> }
      </AuthContextProvider> 
    </NativeBaseProvider>
  );
}


