import React from 'react';
import './Box.css';

export default function Box({ handleSortByOption}) {


  return (
    <div className='box'>
      <label htmlFor="sort">Sort By:</label>
      <select name="sort" id="sort" onChange={(e) => handleSortByOption(e.target.value)}>

        <option value="choose">Choose</option>
        <option value="id">ID</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="age">Age</option>
        <option value="username">Username</option>
        <option value="title">Product Name</option>
      </select>
    </div>
  );
}

