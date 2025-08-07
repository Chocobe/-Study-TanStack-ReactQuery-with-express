import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function AppQueryClientProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default AppQueryClientProvider;
