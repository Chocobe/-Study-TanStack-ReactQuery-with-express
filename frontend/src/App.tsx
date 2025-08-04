import './App.css';

import { useEffect } from 'react';
import { useRoutes } from 'react-router';

import routes from './routes/routes';

function App() {
  const element = useRoutes(routes);

  useEffect(() => {
    console.log('import.meta.env.VITE_API_BASE_URL: ', import.meta.env.VITE_API_BASE_URL);
  }, []);

  return element;
}

export default App;
