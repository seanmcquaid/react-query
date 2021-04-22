import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import RandomQuotes from './containers/RandomQuotes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RandomQuotes />
  </QueryClientProvider>
);

export default App;
