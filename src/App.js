
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Programs from './Pages/Programs';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Causes from './Pages/Causes';
import ContactUs from './Pages/ContactUs';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/programs" element={<Programs/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/causes" element={<Causes/>}/>

    </Routes>

    
     
   
  );
}

export default App;

/*<div>
   <Slider/>
   <Events/>
   </div>  */
