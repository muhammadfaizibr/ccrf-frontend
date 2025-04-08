import React from 'react';
import Styles from 'assets/styles/PositionDescriptionPopupStyles.module.css';
import OpenPositionsCardStyles from "assets/styles/OpenPositionsCardStyles.module.css";

const PositionDescriptionPopup = ({ onClose, department, title, detailedDescription }) => {
  const handleApplyClick = () => {
    window.location.href = "mailto:becomeamissionary@ccrforce.com?subject=Application: " + title;
  };

  return (
    <div className={Styles.overlay}>
      <div className={Styles.container}>
        <div className={Styles.contentWrapper}>
          <div className={Styles.headWrapper}>
            <p className={`${OpenPositionsCardStyles.department} text-uppercase geologica fw-700`}>
              {department}
            </p>
            <h3 className="geologica fw-300">{title}</h3>
          </div>
          <p className={`${Styles.descriptionText} geologica fw-300`}>
            {detailedDescription}
          </p>
          <div className={Styles.buttonsWrapper}>
            <button
              onClick={onClose}
              className="btn secondary-btn btn-small geologica"
            >
              Close
            </button>
            <button
              onClick={handleApplyClick}
              className="btn primary-btn btn-small geologica"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionDescriptionPopup;