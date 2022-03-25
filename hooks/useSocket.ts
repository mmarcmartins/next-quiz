import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export const useSocket = (url) => {
  const [socket, setSocket] = useState(null)
  
  useEffect(() => {
    const socketIo = io(url, { autoConnect: false });

    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }
    
    return cleanup
  }, [])

  return socket
}