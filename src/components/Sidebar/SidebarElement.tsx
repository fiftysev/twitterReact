import styles from "./sidebar_el.module.scss";
import React, { useState } from "react";

type ElementProps = {
  elementIcon: string;
  elementTitle: string;
};

const SidebarElement = ({ elementIcon, elementTitle }: ElementProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={styles.container} onClick={() => setIsSelected(true)}>
      <img src={elementIcon} alt="" className={styles.icon} />
      <div
        className={`${styles.title} ${
          isSelected ? styles.bold : styles.normal
        }`}
      >
        {" "}
        {elementTitle}{" "}
      </div>
    </div>
  );
};

export default SidebarElement;
