import { displayPartsToString } from "typescript";
import styles from "./actualsidebar.module.scss";

type SidebarElementProps = {
  data: {
    category?: string;
    title?: string;
    countOfTweets?: string;
    userFollowRec?: string;
    userAvatarRec?: string;
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
    {data.userAvatarRec && <img src="./img/tweetAuthor.png" alt="avatar" />}
    {data.title && <span className={styles.element_title}>{data.title}</span>}
    {data.userFollowRec && (
      <span className={styles.element_title}>{data.userFollowRec}</span>
    )}
    {data.countOfTweets && (
      <span className={styles.subhead_text}>Твитов: {data.countOfTweets}</span>
    )}
  </div>
);

export default ActualSidebarElement;
