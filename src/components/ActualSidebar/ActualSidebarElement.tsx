import styles from "./actualsidebar.module.scss";

type SidebarElementProps = {
  data: {
    category: string;
    title: string;
    countOfTweets?: string;
  };
  index: number;
};

const ActualSidebarElement = ({ data, index }: SidebarElementProps) => (
  <div className={styles.element}>
    <span className={styles.subhead_text}>
      {" "}
      {index + 1} • {data.category}
    </span>
    <span className={styles.element_title}>{data.title}</span>
    {data.countOfTweets && (
      <span className={styles.subhead_text}>Твитов: {data.countOfTweets}</span>
    )}
  </div>
);

export default ActualSidebarElement;
