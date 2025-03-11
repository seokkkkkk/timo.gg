import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './pages/Router.tsx';

let queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
