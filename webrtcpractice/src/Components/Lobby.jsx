import React, { useState,useCallback } from 'react'

const Lobby = () => {
    const [email, setEmail] = useState('');
    const [room,setRoom] = useState('');
    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
    },[email,room])
  return (
    <div>Lobby
        <form onSubmit={handleSubmit}>

        <input type="text" id='email' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="text" id='room' placeholder='email' value={room} onChange={(e)=>setRoom(e.target.value)}/>
    <button>Join</button>
        </form>
    </div>
  )
}

export default Lobby