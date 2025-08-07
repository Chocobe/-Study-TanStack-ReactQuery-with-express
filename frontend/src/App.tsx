import './App.css';

import { useRoutes } from 'react-router';

import AppQueryClientProvider from './lib/tanstack-query/AppQueryClientProvider';
import routes from './routes/routes';

function App() {
  const element = useRoutes(routes);

  return (
    <AppQueryClientProvider>
      {element}
    </AppQueryClientProvider>
  );
}

export default App;
