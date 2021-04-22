import { useState } from 'react';
import { useQuery } from 'react-query';
import uuid from 'react-uuid';
import Anime from '../components/Anime';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { getQuotesByTitle } from '../queries';

const QuotesByTitle = () => {
  const [title, setTitle] = useState('');
  const { refetch, data } = useQuery(
    ['getQuotesByTitle', title],
    () => getQuotesByTitle(title),
    {
      enabled: false,
    }
  );

  const onChange = ({ target: { value } }) => {
    setTitle(value);
  };

  const onClick = () => {
    refetch();
  };
  // set enabled to false and try refetching with the on click manually
  return (
    <div>
      <TextInput onChange={onChange} value={title} />
      <Button onClick={onClick}>Get Quotes</Button>
      {data?.map((animeInfo) => (
        <Anime
          key={uuid()}
          anime={animeInfo.anime}
          character={animeInfo.character}
          quote={animeInfo.quote}
        />
      ))}
    </div>
  );
};

export default QuotesByTitle;
