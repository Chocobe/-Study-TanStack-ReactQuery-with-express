import { useRoutes } from 'react-router';

import AppQueryClientProvider from './lib/tanstack-query/AppQueryClientProvider';
import routes from './routes/routes';
import useInitAuthStore from './stores/authStore/hooks/useInitAuthStore';

function App() {
  const element = useRoutes(routes);

  const { isReady } = useInitAuthStore();

  if (!isReady) {
    return null;
  }

  return (
    <AppQueryClientProvider>
      {element}
    </AppQueryClientProvider>
  );
}

export default App;
