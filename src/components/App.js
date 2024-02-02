import '../styles/App.css';
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import {Navbar} from './';
import {Myhabits} from '../pages';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          index:true,
          element:<Myhabits/>,
        },
        
      ]
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
