/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavigateBack from './NavigateBack';
import '../styles/cardHeroes.css';

function CardHeroes() {
  const { heroeId } = useParams();
  const listHeroes = useSelector((state) => state.heroes.heroes);
  const hero = listHeroes.find((heroe) => heroe.name === heroeId);

  if (!hero) {
    return <h1>Character not found</h1>;
  }

  return (
    <>
      <NavigateBack />
      <div className="hero-card">
        <img
          className="hero-img"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
        <div className="hero-info">
          <h2>Name:</h2>
          <p>{hero.name}</p>
        </div>
        <div className="hero-info">
          <h4>
            Comics:
            {hero.comics.available}
          </h4>
          <ul className="lists">
            {hero.comics.items.map((comic, index) => (
              <li key={index}>{comic.name}</li>
            ))}
          </ul>
        </div>
        <div className="hero-info">
          <h4>
            Series:
            {hero.series.available}
          </h4>
          <ul className="lists">
            {hero.series.items.map((serie, index) => (
              <li key={index}>{serie.name}</li>
            ))}
          </ul>
        </div>
        <div className="hero-info">
          <h4>Detailed information:</h4>
          <a href={hero.urls[2] ? hero.urls[2].url : hero.urls[1].url}>Official Information</a>
        </div>
        <div>
          <h4>
            Description:
            <span>
              {hero.description === '' ? ' classified' : hero.description}
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}
// http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=03248abd63964b8cda72cfeaaf01a1eb

// http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=03248abd63964b8cda72cfeaaf01a1eb
export default CardHeroes;
