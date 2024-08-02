import React from 'react';
import './Points.css';

const Points = ({ points }) => {
  return (
    <div className="points">
      {Array.from({ length: points }).map((_, index) => (
        <div key={index} className="block"></div>
      ))}
    </div>
  );
};

export default Points;