import styles from "./actualsidebar.module.scss";

type SidebarElementProps = {
  data: {
    category?: string;
    title?: string;
    countOfTweets?: string;
    userRecName?: string;
    userRecUsername?: string;
    userRecAvatar?: string;
  };
  index: number;
};

const ActualSidebarElement = ({ data, index }: SidebarElementProps) => (
  <div className={styles.element}>
    {data.category && (
      <span className={styles.subhead_text}>
        {index + 1} • {data.category}
      </span>
    )}
    <span className={styles.element_title}>
      {data.userRecName || data.title}
    </span>
    <span className={styles.subhead_text}>
      {data.userRecUsername === undefined
        ? `Твитов: ${data.countOfTweets}`
        : `@${data.userRecUsername}`}
    </span>
    {data.userRecName && <button className={styles.follow_btn}>Читать</button>}
  </div>
);

export default ActualSidebarElement;
