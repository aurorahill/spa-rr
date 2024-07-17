import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'Czym jest teoria strun?',
    author: 'Jan Nowak',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis provident ipsa tempore? Numquam nam nihil voluptatem? Facilis et, quas excepturi deserunt in cum, reprehenderit eveniet, perferendis a velit ut commodi!',
  },
  {
    id: 2,
    title: 'Czym jest paradoks fermiego?',
    author: 'Jan Kowalski',
    text: 'Cośtam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis provident ipsa tempore? Numquam nam nihil voluptatem? Facilis et, quas excepturi deserunt in cum, reprehenderit eveniet, perferendis a velit ut commodi!',
  },
  {
    id: 3,
    title: 'Ciemna materia i ciemna energia',
    author: 'Marek Nowak',
    text: 'Hej. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis provident ipsa tempore? Numquam nam nihil voluptatem? Facilis et, quas excepturi deserunt in cum, reprehenderit eveniet, perferendis a velit ut commodi!',
  },
];
const HomePage = () => {
  const artList = articles.map((article) => {
    return (
      <Article
        key={article.id}
        {...article}
      />
    );
  });
  return <div className="home">{artList}</div>;
};

export default HomePage;
