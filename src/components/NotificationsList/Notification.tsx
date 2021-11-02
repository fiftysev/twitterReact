import FillLikeIcon from "../Icons/FillLikeIcon";
import PeopleIcon from "../Icons/PeopleIcon";
import RecentNotificationIcon from "../Icons/RecentNotificationIcon";
import styles from "./notification.module.scss";

export interface NotificationProps {
  notificationType: "recent" | "follow" | "like";
  notificationAuthor: string;
  notificationAuthorAvatar: string;
  notificationText?: string;
}

const Icon = (props: { type: string }) => {
  switch (props.type) {
    case "recent":
      return <RecentNotificationIcon />;
    case "follow":
      return <PeopleIcon />;
    case "like":
      return <FillLikeIcon />;
  }
  return <div></div>;
};

const SubheadText = (props: { type: string; author: string }) => {
  switch (props.type) {
    case "recent":
      return (
        <p className={styles.author}>
          Последний твит от <b>{props.author}</b>
        </p>
      );
    case "follow":
      return (
        <p className={styles.author}>
          <b>{props.author}</b> теперь читает вас
        </p>
      );
    case "like":
      return (
        <p className={styles.author}>
          <b>{props.author}</b> понравился ваш твит
        </p>
      );
  }
  return <div></div>;
};

const Notification = (props: NotificationProps) => {
  const {
    notificationType,
    notificationAuthor,
    notificationAuthorAvatar,
    notificationText,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon type={notificationType} />
      </div>
      <div className={styles.content}>
        <img
          src={notificationAuthorAvatar}
          alt="avatar"
          className={styles.avatar}
        />
        <SubheadText type={notificationType} author={notificationAuthor} />
        {notificationText && (
          <span className={styles.text}>{notificationText}</span>
        )}
      </div>
    </div>
  );
};

export default Notification;
