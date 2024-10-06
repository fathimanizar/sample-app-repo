
import './App.css';
import Home from './components/Home';
import Mapping from './components/Mapping';
import Mapping1 from './components/Mapping1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UseS from './components/UseS';
import Homess from './components/Homess/Homess';

function App() {
  return (
    <div className="App">
      <Navbar/>
{/* <Homess/> */}
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/abc' element={<Mapping/>}/>
             <Route path='/mapping1' element={<Mapping1/>}/>
             <Route path='/useeffect' element={<UseS/>}/>
        </Routes> 
 










   
      {/* <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/map1' element={<Mapping/>}/>
          <Route path='/map2' element={<Mapping1/>}/>

      </Routes> */}
   
  


  

    </div>
  );
}

export default App;
