import "./App.css";
import { useRoutes, Navigate } from "react-router-dom";
import SignUp from "./components/Authentication/SignUp/SignUp";
import Login from "./components/Authentication/Login/LogIn";
import Dashboard from "./components/Dashboard/Index";
import Main from "./components/Dashboard/Main/Main";
import Create from "./components/Dashboard/Create/Create";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Navigate to="signUp" />,
    },
    {
      path: "signUp",
      element: <SignUp />,
    },
    {
      path: "logIn",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Main />,
        },

        {
          path: "create",
          element: <Create />,
        },
      ],
    },
  ]);

  return <div className="App">{element}</div>;
}

export default App;
