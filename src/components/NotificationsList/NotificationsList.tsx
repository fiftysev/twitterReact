import styles from "./notification.module.scss";
import Notification from "./Notification";
import replyNotificationsData from "../../replyNotificationsData";
import ReplyNotification from "./ReplyNotification";

const NotificationsList = () => (
  <div className={styles.list_container}>
    <Notification />
    {replyNotificationsData.map((e, i) => (
      <ReplyNotification
        authorAvatar={e.avatar}
        authorName={e.name}
        authorUsername={e.username}
        repliedTimeAgo={e.timeAgo}
        replyText={e.text}
        replyImage={e.image}
        commentsCount={e.comments}
        retweetsCount={e.retweets}
        likesCount={e.likes}
        isLiked={e.liked}
        replyTo={e.replyTo}
      />
    ))}
  </div>
);

export default NotificationsList;
