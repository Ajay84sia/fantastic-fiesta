import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import '../../Frontend/src/index.css'

const App = () => {
  return (
    <div>
      <Router>
         <Navbar/>
         <Routes>
            <Route exact path='/' element= {<Home />} />
         </Routes>
      </Router>
    </div>
  )
}

export default App
