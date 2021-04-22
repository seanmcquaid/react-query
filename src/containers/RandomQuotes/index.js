import { useQuery } from 'react-query';
import { getRandomQuotes } from '../../queries';
import Anime from './Anime';
import uuid from 'react-uuid';

const RandomQuotes = () => {
  const { data } = useQuery('getRandomQuotes', getRandomQuotes);

  console.log(data);
  return (
    <div>
      {data.map((animeInfo) => (
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

export default RandomQuotes;
