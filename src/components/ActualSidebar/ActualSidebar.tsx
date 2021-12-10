import styles from "./actualsidebar.module.scss";
import ActualSidebarElement from "./ActualSidebarElement";
import SearchForm from "./SearchForm";

type ActualElementData = {
  place?: number;
  tag?: string;
  mentions?: number;
  userRecName?: string;
  userRecUsername?: string;
  userRecAvatar?: string;
};

type ActualSidebarProps = {
  actualData: Array<ActualElementData>;
  sidebarTitle: string;
};

const ActualSidebar = ({ actualData, sidebarTitle }: ActualSidebarProps) => {
  const actualElements = actualData.map((value, index) => (
    <ActualSidebarElement data={value} key={index} />
  ));
  return (
    <div className={styles.wrapper}>
      {sidebarTitle === "Актуальные темы" && <SearchForm />}
      <div className={styles.container}>
        <h3 className={styles.title}>{sidebarTitle}</h3>
        {actualElements}
      </div>
    </div>
  );
};

export default ActualSidebar;
