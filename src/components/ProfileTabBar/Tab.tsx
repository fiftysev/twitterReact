import styles from "./tabbar.module.scss";

type TabProps = {
  dataChanger: Function;
  activeChanger: Function;
  tabTitle: string;
  isActive: boolean;
};

const Tab = ({ dataChanger, activeChanger, tabTitle, isActive }: TabProps) => (
  <div
    className={`${styles.tab} ${isActive && styles.active_tab}`}
    onClick={() => {
      dataChanger();
      activeChanger();
    }}
  >
    <span className={styles.tab_title}>{tabTitle}</span>
  </div>
);

export default Tab;
