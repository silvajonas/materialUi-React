
import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toogleDrawerOpen: () => void;
}

interface IAppDrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext =(() => {
    return useContext(DrawerContext)
})

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawerOpen }}>
        {children}
    </DrawerContext.Provider>
  );
};
