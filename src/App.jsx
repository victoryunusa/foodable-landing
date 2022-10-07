import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Buyers from "./pages/Buyers";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Riders from "./pages/Riders";
import Sustainability from "./pages/Sustainability";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/buy" element={<Buyers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-a-supplier" element={<Vendors />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/ride-with-us" element={<Riders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
