import React, { useState } from 'react';
import Styles from 'assets/styles/OpenPositionsStyles.module.css';
import PositionCard from 'components/OpenPositionCard';
import positionsData from 'api/positions.json';

const OpenPositions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPositions = positionsData.filter(position =>
    position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    position.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={Styles.container} id='apply'>
      <div className={Styles.headerWrapper}>
        <h2 className='geologica fw-300'>Open Positions</h2>
        <input
          type="text"
          placeholder="Search positions..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={`${Styles.searchInput} geologica`}
        />
      </div>
      <div className={Styles.openPositionsContainerWrapper}>
        {filteredPositions.length > 0 ? (
          filteredPositions.map((position, index) => (
            <PositionCard
              key={index}
              department={position.department}
              title={position.title}
              shortDescription={position.short_description}
              detailedDescription={position.detailed_description}
            />
          ))
        ) : (
          <p className="geologica fw-300">No positions found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default OpenPositions;