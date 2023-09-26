/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/heroes.css';

function Heroes() {
  const heroesList = useSelector((state) => state.heroes.heroes);
  const isLoading = useSelector((state) => state.heroes.loading);
  const isError = useSelector((state) => state.heroes.error);
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="search">
        <input type="text" placeholder="Enter a Heroe name" value={search} onChange={handleSearch} />
      </div>
      {/* revisar estructura de archivos y ver si los metodos son los adecuados para iterar */}
      {/* fijarse de que no sea que no este mostrando los datos porque no se agrego un valor
      a "search" */}
      <div className="heroes">
        {heroesList.filter((heroe) => heroe.name.toLowerCase().includes(search.toLowerCase()))
          .map((heroe) => (
            <Link to={`/heroes/${heroe.name}`} key={heroe.id}>
              <div className="heroe" key={heroe.id}>
                <img src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`} alt="Hero" />
                <p>{heroe.name}</p>
                <span>{`comics: ${heroe.comics.available}`}</span>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default Heroes;
