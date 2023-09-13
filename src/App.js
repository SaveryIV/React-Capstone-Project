/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHeroes } from './redux/Heroes/heroesSlice';
import Heroes from './components/Heroes';
import CardHeroes from './components/CardHeroes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Heroes />} />
        <Route path="/heroes/:heroeId" element={<CardHeroes />} />
      </Routes>
    </>
  );
}

export default App;
