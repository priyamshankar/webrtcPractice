import Video from "./Components/Video";
import { BrowserRouter,
  Routes,
  Route,
  Link,} from 'react-router-dom';
import Lobby from "./Components/Lobby";

function App() {
  return (
    <div>
      {/* <Lobby/> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Lobby/>} />
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
