import EVENTS from "@/utils/events";
import { createContext, useContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
const socket = io();

export interface Message {
  text: string;
  time: string;
  username: string;
}

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  messages?: Message[];
  setMessages: Function;
  roomId?: string;
  rooms: object;
  msgs: string[]
}

const SocketContext = createContext<Context>({
  socket,
  setUsername: Function,
  setMessages: Function,
  rooms: {},
  messages: [],
  msgs: []
});

const SocketProvider = (props: any) => {
  const [username, setUsername] = useState("Milan");
  const [roomId, setRoomId] = useState("1");
  const [rooms, setRooms] = useState({});
  const [messages, setMessages] = useState([]);
  const [msgs, setMsgs] = useState<String[]>([]);

//   useEffect(() => {
//     window.onfocus = function () {
//       document.title = "Chat app";
//     };
//   }, []);

  useEffect(() => {
    socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, username, time }) => {
      if (!document.hasFocus()) {
        document.title = "New message...";
      }
      console.log('before', console.log(msgs))
      setMsgs((msgs) => [...msgs, message])
    //   setMessages((messages) => [...messages, {text: message, time, username}])
      console.log('after', msgs)
    });
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        username,
        setUsername,
        rooms,
        roomId,
        messages,
        setMessages,
        msgs
      }}
      {...props}
    />
  );
};

export const useSockets = () => useContext(SocketContext);

export default SocketProvider;
