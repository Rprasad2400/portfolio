import React from "react";
import styles from "./nextArrow.module.css"; // Assuming you're using CSS modules
import arrowImage from "../../assets/images/arrow.png"; // Assuming you have an image in the assets folder

const ArrowAnimation = () => {

  const Click = (targetId) => {
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior
      : "smooth" });
  };

  return (
    <div className={styles.arrowWrapper}>
      <button className={styles.buttonType} onClick={() => Click("projects")}>
        <img src={arrowImage} alt="Arrow" className={styles.arrow} />
      </button>
    </div>
  );
};

export default ArrowAnimation;
