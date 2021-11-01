import CommentsIcon from "../Icons/CommentsIcon";
import FillLikeIcon from "../Icons/FillLikeIcon";
import LikeIcon from "../Icons/LikeIcon";
import RetweetIcon from "../Icons/RetweetIcon";
import ShareIcon from "../Icons/ShareIcon";
import styles from "./replynotification.module.scss";

type ReplyNotificationProps = {
  authorAvatar: string;
  authorName: string;
  authorUsername: string;
  repliedTimeAgo: string;
  replyText?: string;
  replyImage?: string;
  commentsCount: number | null;
  retweetsCount: number | null;
  likesCount: number | null;
  isLiked: boolean;
  replyTo: string;
};

const ReplyNotification = (props: ReplyNotificationProps) => {
  const {
    authorAvatar,
    authorName,
    authorUsername,
    repliedTimeAgo,
    replyText,
    replyImage,
    commentsCount,
    retweetsCount,
    likesCount,
    isLiked,
    replyTo,
  } = props;
  return (
    <div className={styles.container}>
      <img src={authorAvatar} alt="author" className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.author_data}>
          <span className={styles.name}>{authorName}</span>
          <span className={styles.username}>@{authorUsername}</span>
          <span className={styles.dot}>•</span>
          <span className={styles.datetime}>{repliedTimeAgo}</span>
        </div>
        <div>
          <span className={styles.reply_to}>
            В ответ{" "}
            <a href="google.com" className={styles.user_link}>
              @{replyTo}
            </a>
          </span>
          <p className={styles.tweet_text}>{replyText}</p>
          {replyImage && (
            <img
              src={replyImage}
              alt="tweetimg"
              className={styles.tweet_image}
            />
          )}
        </div>
        <div className={styles.actionbar}>
          <div className={`${styles.action_button} ${styles.comment}`}>
            <div className={styles.icon}>
              <CommentsIcon />
            </div>
            <span>{commentsCount}</span>
          </div>

          <div className={`${styles.action_button} ${styles.retweet}`}>
            <div className={styles.icon}>
              <RetweetIcon />
            </div>
            <span>{retweetsCount}</span>
          </div>

          <div className={`${styles.action_button} ${styles.like}`}>
            <div className={`${styles.icon} ${isLiked && styles.liked}`}>
              {!isLiked && <LikeIcon />}
              {isLiked && <FillLikeIcon />}
            </div>
            <span className={`${isLiked && styles.liked}`}>{likesCount}</span>
          </div>

          <div className={`${styles.action_button} ${styles.share}`}>
            <div className={styles.icon}>
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyNotification;
