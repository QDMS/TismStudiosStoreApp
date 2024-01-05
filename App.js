import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Main from './Main';

const theme = {
  ...DefaultTheme,
  // Add your custom theme configurations if needed
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
   <Main />
    </PaperProvider>
 
  );
}


