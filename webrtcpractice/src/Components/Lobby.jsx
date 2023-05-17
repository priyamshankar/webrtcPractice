import React, { useState, useCallback, useEffect } from "react";
import { useSocket } from "../Context/SocketProvider";
import {useNavigate} from "react-router-dom";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  const socket = useSocket();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

    const handleJoinRoom = useCallback((data)=>{
      const {email, room} = data;
      // console.log(email,room);
      navigate(`/track/${room}`);
    },[navigate])

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
      return ()=>{
        socket.off('room:join',handleJoinRoom);
      }
  
  }, [socket,handleJoinRoom]);

  return (
    <div>
      Lobby
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          id="room"
          placeholder="roomid"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button>Join</button>
      </form>
    </div>
  );
};

export default Lobby;
