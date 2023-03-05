import EVENTS from "@/utils/events";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

const socket = io();

export interface Message {
  text: string;
  time: string;
  username: string;
  sent: boolean;
}

// interface Props {
//   messageBoxRef: React.RefObject<HTMLDivElement>,
// }

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  messages?: Message[];
  setMessages: Function;
  roomId?: string;
  rooms: object;
  messageBoxRef: React.RefObject<HTMLDivElement>  | null;
  showNew: Boolean;
  setShowNew: Function
}

const SocketContext = createContext<Context>({
  socket,
  setUsername: Function,
  setMessages: Function,
  rooms: {},
  messages: [],
  messageBoxRef: null,
  setShowNew: Function,
  showNew: false
});

const SocketProvider = (props: any) => {
  const [username, setUsername] = useState("Milan");
  const [roomId, setRoomId] = useState("1");
  const [rooms, setRooms] = useState({});
  const [messages, setMessages] = useState<Message[]>([]);
  const [showNew, setShowNew] = useState(false);
  const messageBoxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.onfocus = function () {
      document.title = "Chat app";
    };
  }, []);

  useEffect(() => {
    socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, username, time }) => {
      // messageBoxRef.current?.scroll({top: messageBoxRef.current.scrollHeight, behavior: 'smooth'})
      // setShowNew(true)
      console.log(messageBoxRef.current?.scrollHeight)
      if (!document.hasFocus()) {
        document.title = "New message...";
      }
      console.log("before");
      setMessages((prev) => [
        ...prev,
        { text: message, time, username, sent: false },
      ]);
      console.log("after: " + messages);
    });
    return () => {
      socket.off(EVENTS.SERVER.ROOM_MESSAGE);
    };
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
        messageBoxRef,
        showNew,
        setShowNew
      }}
      {...props}
    />
  );
};

export const useSockets = () => useContext(SocketContext);

export default SocketProvider;
