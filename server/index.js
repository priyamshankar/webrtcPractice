import { Server } from "socket.io";
const io = new Server (8000, {
    cors: true,
});

const custToSocketmap= new Map();
const socketTocustMap= new Map();

io.on('connection',(socket)=>{
    console.log(`socket connected`, socket.id); 
    socket.on('room:join', (data)=>{
        const {email,room}= data;
        // console.log(data);
        custToSocketmap.set(email,socket.id);
        socketTocustMap.set(socket.id,email);
        io.to(socket.id).emit("room:join",data);
    })
})
