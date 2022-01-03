import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import { Theme } from "../styles/Theme";
import SocketContext from '../contexts/socket';
import UsersContext from '../contexts/users';
import { useState, useMemo, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';

export default function App({ Component, pageProps }) {
  const [users, setUsers] = useState([]);
  const socketConnection = useSocket('http://127.0.0.1:4001')
  
  const defaultContextValue = useMemo(() => ({
    users,
    setUsers
  }), [users]);  
  
  useEffect(() => {
    if(socketConnection){
      socketConnection.on("updateUIUsers", ({ newUsers }) => {
        setUsers(newUsers);      
      });
    }
  }, [socketConnection]); 

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <UsersContext.Provider value={defaultContextValue}>
         <SocketContext.Provider value={socketConnection}>
            <Component {...pageProps} />
          </SocketContext.Provider>
        </UsersContext.Provider>
      </ThemeProvider>
    </>
  );
}
