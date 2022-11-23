import { useState } from "react";
import AppRouter from "../components/AppRouter";
import { AppContextProvider } from "./AppContext";

const App = () => {

  const [context, setContext] = useState({});

  return (
    <AppContextProvider value={{context, setContext}}>
      <AppRouter />
    </AppContextProvider>
  )
}

export default App;