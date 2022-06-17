import Menu from "./Menu.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Contact from "./Contact.js";
import About from "./About.js";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="home/*" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
