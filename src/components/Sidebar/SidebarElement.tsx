import styles from "./sidebar_el.module.scss"

type ElementProps = {
  elementIcon: string;
  elementTitle: string;
  isSelected: boolean;
}

const SidebarElement = (props: ElementProps) => (
  <div className={styles.container}>
    <img src={props.elementIcon} alt="" className={styles.icon} />
    <div className={`${styles.title} ${props.isSelected ? styles.bold : styles.normal}`}> {props.elementTitle} </div>
  </div>
)

export default SidebarElement;