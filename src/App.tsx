
import { ThemeProvider } from '@mui/material/styles';
import { useContext, createContext } from 'react';
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login"
import NavBar from "./common/NavBar"
import ProfileList from './profile/ProfileList';
import ProfileDetail from './profile/ProfileDetail';
import ProtectedRoute from "./ProtectedRoute";
import useAuthenticated from './hooks/useAuthenticated';
import { LOCALSTORAGE_KEY_AUTHENTICATION } from "./constants/internal_common"
import Inbox from "./inbox/Inbox"


export const AuthenticatedContext = createContext({
  // isAuthenticated: localStorage.getItem(LOCALSTORAGE_KEY_AUTHENTICATION).toLowerCase() === "true",
  isAuthenticated: false,
  setIsAuthenticated: (newAuthentication: boolean) => { }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthenticatedContext.Provider value={useAuthenticated()}>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <ProfileList />
            </ProtectedRoute>
          } />
          <Route path="/profile/:id" element={
            <ProtectedRoute>
              <ProfileDetail />
            </ProtectedRoute>} />
          <Route path="/inbox" element={
            <ProtectedRoute>
              <Inbox />
            </ProtectedRoute>} />
        </Routes>
      </AuthenticatedContext.Provider>
    </ThemeProvider>
  );
}

export default App;
