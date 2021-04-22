import axios from 'axios';

export const getRandomQuotes = async () => {
  const { data } = await axios.get('https://animechan.vercel.app/api/quotes');
  return data;
};

export const getRandomQuoteByTitle = async (title = '') => {
  const { data } = await axios.get(
    `https://animechan.vercel.app/api/quotes/anime?title=${title}`
  );
  return data;
};
