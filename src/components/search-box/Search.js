import React from 'react';
import './Search.css';

export const Search = ({ placeholder, handleChange }) => (
  <input
    className="search"
    onChange={handleChange}
    type="search"
    placeholder={placeholder}
  />
);
