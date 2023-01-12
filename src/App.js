import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games/:gameId" element={<Details />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
