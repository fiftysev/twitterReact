import styles from "./notification.module.scss";
import Notification from "./Notification";
import notificationsData from "../../notificationsData";
import data from "../../replyNotificationsData.json";
import ReplyNotification from "./ReplyNotification";

const NotificationsList = () => (
    <div className={styles.list_container}>
        {notificationsData.map((e) => (
            <Notification
                notificationType={e.notificationType}
                notificationAuthor={e.notificationAuthor}
                notificationAuthorAvatar={e.notificationAuthorAvatar}
                notificationText={e.notificationText}
            />
        ))}
        {data.map((e) => (
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
