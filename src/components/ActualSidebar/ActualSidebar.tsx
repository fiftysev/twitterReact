import styles from "./actualsidebar.module.scss";
import ActualSidebarElement from "./ActualSidebarElement";
import SearchForm from "./SearchForm";

type ActualElementData = {
  category?: string;
  title?: string;
  countOfTweets?: string;
  userFollowRec?: string;
  userAvatarRec?: string;
};

type ActualSidebarProps = {
  actualData: Array<ActualElementData>;
  sidebarTitle: string;
};

const ActualSidebar = ({ actualData }: ActualSidebarProps) => {
  const actualElements = actualData.map((value, index) => (
    <ActualSidebarElement data={value} index={index} key={index} />
  ));
  return (
    <div>
      <SearchForm />
      <div className={styles.container}>
        <h3 className={styles.title}>Актуальные темы</h3>
        {actualElements}
      </div>
    </div>
  );
};

export default ActualSidebar;
