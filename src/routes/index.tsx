import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {

  const { toogleTheme } = useAppThemeContext()

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toogleTheme}>Jonas</Button>}/>

      <Route  path="*" element={<Navigate to={'/pagina-inicial'}/>}/>
    </Routes>
  );
};
