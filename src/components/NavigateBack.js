/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiOutlineLeft, AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/navigateBack.css';

function NavigateBack() {
  return (
    <header data-testid="back-navigation" className="hero-header">
      <Link to="/"><AiOutlineLeft /></Link>
      <h1>Marvel</h1>
      <AiFillSetting />
    </header>
  );
}

export default NavigateBack;
