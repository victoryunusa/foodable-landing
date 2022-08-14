import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Riders from "./pages/Riders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/restaurants" element={<Riders />} />
          <Route path="/riders" element={<Riders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
