import { createHashRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Personal from './pages/Personal';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {path: "/", element: <Home/> },
      {path: "/Professional", element: <Professional/> },
      {path: "/Personal", element: <Personal/> },
      {path: "/About", element: <About/> },
      {path: "/Contact", element: <Contact/> },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
