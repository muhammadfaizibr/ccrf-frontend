import React, { useState } from "react";
import Styles from "assets/styles/OpenPositionsCardStyles.module.css";
import PositionDescriptionPopup from "components/PositionDescriptionPopup";

const PositionCard = ({ department, title, shortDescription, detailedDescription }) => {
  const [showPopup, setShowPopup] = useState(false);
  
  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.contentWrapper}>
        <p className={`${Styles.department} text-uppercase geologica fw-700`}>
          {department}
        </p>
        <h4 className="geologica fw-300">{title}</h4>
        <p className={`${Styles.description} ${Styles.descriptionText} geologica fw-300`}>
          {shortDescription}
        </p>
      </div>

      <button
        onClick={handlePopupToggle}
        className={`geologica fw-300 text-uppercase ${Styles.detailsBtn}`}
      >
        View Details
      </button>
      {showPopup && (
        <PositionDescriptionPopup
          onClose={handlePopupToggle}
          department={department}
          title={title}
          detailedDescription={detailedDescription}
        />
      )}
    </div>
  );
};

export default PositionCard;