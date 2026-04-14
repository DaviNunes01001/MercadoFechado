import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Services from "./pages/Services/Services";
import Error404 from "./pages/404Error/404Error";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="Container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/services" element={<Services />} />
            <Route path="/404Error" element={<Error404 />} />
        
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App; 