import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav/>
        <Card>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Card>
      </div>
    </Router>
  );
}

export default App;
