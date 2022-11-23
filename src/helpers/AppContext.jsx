import { createContext } from "react";

const AppContext = createContext(null);
const AppContextProvider = AppContext.Provider;

export { AppContext, AppContextProvider };

