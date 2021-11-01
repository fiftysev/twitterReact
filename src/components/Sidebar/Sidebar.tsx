import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import SidebarElement from "./SidebarElement";
import TwitterIcon from "../Icons/TwitterIcon";

type SidebarProps = {
  listOfItems: Array<{
    elementIcon: string;
    elementTitle: string;
    pathTitle: string;
  }>;
};

const Sidebar = ({ listOfItems }: SidebarProps) => {
  const menuItems = listOfItems.map((value, index) => (
    <Link to={value.pathTitle}>
      <SidebarElement
        key={index}
        elementIcon={value.elementIcon}
        elementTitle={value.elementTitle}
      />
    </Link>
  ));
  return (
    <div className={styles.container}>
      <div className="icon">
        <TwitterIcon />
      </div>
      {menuItems};<button className={styles.button}>Твитнуть</button>
    </div>
  );
};

export default Sidebar;
