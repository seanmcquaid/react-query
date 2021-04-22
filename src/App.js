import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import H1 from './components/Typography/H1';
import { lazy, Suspense } from 'react';
import P from './components/Typography/P';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

const RandomQuotes = lazy(() => import('./containers/RandomQuotes'));
const QuotesByTitle = lazy(() => import('./containers/QuotesByTitle'));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <header>
      <H1>Anime Quotes</H1>
    </header>
    <Suspense fallback={<P>Loading</P>}>
      <QuotesByTitle />
    </Suspense>
    <Suspense fallback={<P>Loading</P>}>
      <RandomQuotes />
    </Suspense>
  </QueryClientProvider>
);

export default App;
