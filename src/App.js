
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Oders from './components/Oders/Oders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/orders', element: <PrivateRoutes> <Oders></Oders> </PrivateRoutes>
        },
        {
          path: '/login', element: <Login></Login>
        },
        {
          path: '/register', element: <Register></Register>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
