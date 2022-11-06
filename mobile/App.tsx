import { THEME } from './src/styles/theme';
import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { AuthContextProvider } from './src/context/AuthContext';
import { Routes } from './src/routes';;

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

     
      { fontLoaded ? <Routes /> :  <Loading /> }
      </AuthContextProvider> 
    </NativeBaseProvider>
  );
}


