import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VideoGames from "./pages/VideoGames";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games" exact element={<VideoGames />} />
          <Route path="/games/:gameId" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
