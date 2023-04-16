import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Programs from "./Pages/Services";
import About from "./Pages/About";
// import Blog from "./Pages/Blog";
// import Causes from "./Pages/Causes";
import ContactUs from "./Pages/ContactUs";
// import DonationPage from "./Pages/DonationForm";
import Signin from "./Pages/login/Signin";
import Register from "./Pages/login/register";
import ProfilePage from "./Pages/profile";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;

/*<div>
   <Slider/>
   <Events/>
   </div>  */
