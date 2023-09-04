
import { ThemeProvider } from '@mui/material/styles';
import { createContext } from 'react';
import theme from "./theme";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./login/Login"
import NavBar from "./common/NavBar"
import ProfileList from './profile/ProfileList';
import ProfileDetail from './profile/ProfileDetail';
import { LOCALSTORAGE_KEY_AUTHENTICATION } from "./constants/internal_common"
import Inbox from "./inbox/Inbox"
import useMyProfileId from './hooks/useMyProfileId';
import { RouteGuard } from './route-guard';
import { Authenticator } from '@aws-amplify/ui-react';

export const MyProfileIdContext = createContext({
  myProfileId: "",
  setMyProfileId: (id: string) => {}
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Authenticator.Provider>
        <MyProfileIdContext.Provider value={useMyProfileId()}>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
              path="/"
              element={
                <RouteGuard>
                  <Outlet />
                </RouteGuard>
              }
              // Accessible only with authorization. 
              children={
                <>
                  <Route path="/" element={<ProfileList />} />
                  <Route path="/profile/:id" element={<ProfileDetail />} />
                  <Route path="/inbox" element={<Inbox />} />
                </>                
              }
            />
          </Routes>
        </MyProfileIdContext.Provider>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default App;
