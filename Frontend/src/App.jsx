import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import '../../Frontend/src/index.css'
import Clothing from './Pages/Clothing';

const App = () => {
  return (
    <div>
      <Router>
         <Navbar/>
         <Routes>
            <Route exact path='/' element= {<Home />} />
            <Route path='/men' element= {<Clothing/>} />
         </Routes>
      </Router>
    </div>
  )
}

export default App
