import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import { Theme } from "../styles/Theme";
import { Provider as SocketProvider } from '../contexts/socket';
import {Provider as UsersProvider } from '../contexts/users';
import { useState, useMemo, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';
import { SOCKET_URL } from '../functions/socketHelpers';

export default function App({ Component, pageProps }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const socketConnection = useSocket(SOCKET_URL);
  
  const defaultContextValue = useMemo(() => ({
    users,
    setUsers,
    currentUser,
    setCurrentUser
  }), [users, currentUser]);  
  
  useEffect(() => {
    if(socketConnection){
      socketConnection.on("updateUIUsers", ({ newUsers }) => {
        console.log(newUsers)
        setUsers(newUsers);      
      });
    }
  }, [socketConnection]); 

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <UsersProvider value={defaultContextValue}>
         <SocketProvider value={socketConnection}>
            <Component {...pageProps} />
          </SocketProvider>
        </UsersProvider>
      </ThemeProvider>
    </>
  );
}
