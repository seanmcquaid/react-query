import P from './Typography/P';

const Anime = ({ anime, character, quote }) => (
  <div>
    <span>{anime}</span>
    <span>{character}</span>
    <P>{quote}</P>
  </div>
);

export default Anime;
