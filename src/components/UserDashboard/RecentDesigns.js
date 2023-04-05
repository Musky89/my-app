import React from 'react';
import './RecentDesigns.css';

const RecentDesigns = ({ designs }) => {
  return (
    <div className="recent-designs">
      <h2>Recent Designs</h2>
      <div className="designs-carousel">
        {designs.map((design) => (
          <div key={design.id} className="design-thumbnail">
            <img src={design.thumbnail} alt={design.name} />
            <div>
              <h3>{design.name}</h3>
              <button>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDesigns;
