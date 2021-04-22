import { useQuery } from 'react-query';

const QuotesByTitle = () => {
  const {} = useQuery(['getQuotesByTitle']);
  // set enabled to false and try refetching with the on click manually
  return <div></div>;
};

export default QuotesByTitle;
