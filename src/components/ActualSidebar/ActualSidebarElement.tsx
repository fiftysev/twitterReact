import styles from "./actualsidebar.module.scss";
import { Link } from "react-router-dom";

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
    {data.userRecAvatar && (
      <img src={data.userRecAvatar} alt="avatar" className={styles.avatar} />
    )}
    <span className={styles.element_title}>
      {data.userRecName || data.title}
    </span>
    <Link to={`/user/${data.userRecUsername}`} className={styles.subhead_text}>
      {data.userRecUsername && `@${data.userRecUsername}`}
    </Link>
    <span className={styles.subhead_text}>
      {data.countOfTweets && `Твитов: ${data.countOfTweets}`}
    </span>
    {data.userRecName && <button className={styles.follow_btn}>Читать</button>}
  </div>
);

export default ActualSidebarElement;
