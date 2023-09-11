/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import Heroes from './components/Heroes';
import CardHeroes from './components/CardHeroes';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Heroes />} />
        <Route path="/missions" element={<CardHeroes />} />
      </Routes>
    </>
  );
}

export default App;
