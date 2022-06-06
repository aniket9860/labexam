import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Addcar from "./pages/car/addcar";
import Getcar from "./pages/car/getcar";
import Home from "./pages/home/home";
import Signin from "./pages/user/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/addcar' element={<Addcar/>}></Route>
        <Route path='/getcar' element={<Getcar/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route></Route>
      </Routes>
      <ToastContainer position='top-right' autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
