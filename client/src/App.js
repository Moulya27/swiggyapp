import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Private from "./components/Private";
import Signup from "./components/Signup";
import authService from "./services/auth.service";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };
  return (
    <div>
      <BrowserRouter>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} logOut={logOut}/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/notloggedin' element={<PageNotFound/>}/>
  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
