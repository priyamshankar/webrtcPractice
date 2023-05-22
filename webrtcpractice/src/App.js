import Video from "./Components/Video";
import { BrowserRouter,
  Routes,
  Route,
  Link,} from 'react-router-dom';
import Lobby from "./Components/Lobby";
import RoomTrack from "./Components/RoomTrack";

function App() {
  return (
    <div>
      {/* <Lobby/> */}//
      {/* <BrowserRouter> */}
      <Routes>// routes for router
        <Route path="/" element={<Lobby/>} />
        <Route path ="/track/:roomId" element={<RoomTrack/>}/>
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
