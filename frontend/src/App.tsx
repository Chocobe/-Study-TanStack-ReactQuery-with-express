import { useRoutes } from 'react-router';

import { Toaster } from './components/shadcn-ui/sonner';
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
      <Toaster />
    </AppQueryClientProvider>
  );
}

export default App;
