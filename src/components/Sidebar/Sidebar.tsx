import styles from "./sidebar.module.scss"
import SidebarElement from "./SidebarElement";


type SidebarProps = {
  listOfItems: Array<{ elementIcon: string, elementTitle: string }>
}


const Sidebar = ({ listOfItems }: SidebarProps) => {
  const menuItems = listOfItems.map((value) =>
    <SidebarElement elementIcon={value.elementIcon} elementTitle={value.elementTitle} />
  )
  return (
    <div className={styles.container}>
      {menuItems};
      <button className={styles.button}>Твитнуть</button>
    </div>
  )
}

export default Sidebar;
