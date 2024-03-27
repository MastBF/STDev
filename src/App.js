import './App.css';
import { useRoutes, Navigate } from 'react-router-dom';
import Create from './components/Dashboard/Create';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login';
import 'assets/styles/index.css';
import { Dashboard, Main, SignUp } from 'pages';
import Edit from 'components/Dashboard/Edit';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to="signUp" />,
    },
    {
      path: 'signUp',
      element: <SignUp />,
    },
    {
      path: 'logIn',
      element: <Login />,
    },
    {
      path: 'posts',
      element: <PrivateRoute element={<Dashboard />} />,
      children: [
        {
          path: '',
          element: <Main />,
        },

        {
          path: 'create',
          element: <Create />,
        },
        {
          path: `edit/:id`,
          element: <Edit />,
        },
      ],
    },
  ]);

  return <div className="App">{element}</div>;
}

export default App;
