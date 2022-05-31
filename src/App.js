import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const About = lazy(() => import("./pages/About/About"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Card>
          <Suspense fallback={<h2>Cargando...</h2>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Card>
      </div>
    </Router>
  );
}

export default App;
