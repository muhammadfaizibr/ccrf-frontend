import React from "react";
import Styles from "assets/styles/MissoinStatementStyles.module.css";

const MissionStatement = () => {
  const capitals = ["Mental", "Political", "Financial", "Moral"];
  return (
    <div className={Styles.container}>
      <h1 className={`red-rose text-uppercase ${Styles.backgroundHeading}`}>Mission</h1>
      <div className={Styles.contentWrapper}>
        <p className={`geologica fw-300 ${Styles.missionStatement} text-uppercase`}>Arm Every Muslim Over Capitals</p>
        <ul className={Styles.capitals}>
          {capitals.map((element, index) => {
            return <li key={`captial_${element}_${index}`} className="jost fw-800 text-uppercase">{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MissionStatement;
