import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {Login, Profile, Register, ResetPassword } from "./pages";
import { useSelector } from "react-redux";
import HomePage from './components/HomePage/HomePage/HomePage'

function Layout () {
  const user = useSelector(state => state.user);
  const location = useLocation();

  return user?.token? (
    <Outlet/>
  ): (
    <Navigate to="/login" state={{from: location}} replace />
  )

}

function App() {
  const {theme} = useSelector((state) => state.theme);

  return (
    <div data-theme={theme} className="w-full min-h-[100vh] ">
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/profile/:id?" element={<Profile/>}/>
        </Route>


        <Route path="/home" element={<HomePage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>  
      </Routes>
      
    </div>
  );
}

export default App;
