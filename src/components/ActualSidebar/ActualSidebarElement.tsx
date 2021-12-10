import styles from "./actualsidebar.module.scss";
import { Link } from "react-router-dom";

type SidebarElementProps = {
  data: {
    place?: number;
    tag?: string;
    mentions?: number;
    userRecName?: string;
    userRecUsername?: string;
    userRecAvatar?: string;
  };
};

const ActualSidebarElement = ({ data }: SidebarElementProps) => (
  <div className={styles.element}>
    {"Рекомендуем" && (
      <span className={styles.subhead_text}>
        {data.place} • {"Рекомендуем"}
      </span>
    )}
    {data.userRecAvatar && (
      <img src={data.userRecAvatar} alt="avatar" className={styles.avatar} />
    )}
    <span className={styles.element_title}>{data.userRecName || data.tag}</span>
    <Link to={`/user/${data.userRecUsername}`} className={styles.subhead_text}>
      {data.userRecUsername && `@${data.userRecUsername}`}
    </Link>
    <span className={styles.subhead_text}>
      {data.mentions && `Твитов: ${data.mentions}`}
    </span>
    {data.userRecName && <button className={styles.follow_btn}>Читать</button>}
  </div>
);

export default ActualSidebarElement;
