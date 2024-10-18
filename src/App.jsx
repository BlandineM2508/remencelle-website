import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Projects from './pages/Projects.jsx'

import Gallery from './pages/Gallery'
/* import Contact from './pages/Contact'; */

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        {/*   <Route path="/contact" element={<Contact />} />  */}
      </Routes>
    </Router>
  )
}

export default App
