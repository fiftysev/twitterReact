import CommentsIcon from "../Icons/CommentsIcon";
import LikeIcon from "../Icons/LikeIcon";
import RetweetIcon from "../Icons/RetweetIcon";
import ShareIcon from "../Icons/ShareIcon";
import styles from "./tweet.module.scss";

// import moreIcon from "../../img/more.svg"

type TweetProps = {
  authorAvatar: string;
  authorName: string;
  authorUsername: string;
  tweetedTimeAgo: string;
  tweetText?: string;
  tweetImage?: string;
  commentsCount: number | null;
  retweetsCount: number | null;
  likesCount: number | null;
};

const Tweet = (props: TweetProps) => (
  <div className={styles.container}>
    <div>

    </div>
    <img src={props.authorAvatar} alt="author" className={styles.avatar} />
    <div className={styles.content}>
      <div className={styles.author_data}>
        <span className={styles.name}>{props.authorName}</span>
        <span className={styles.username}>{props.authorUsername}</span>
        <span className={styles.dot}>•</span>
        <span className={styles.datetime}>{props.tweetedTimeAgo}</span>
      </div>
      <div>
        <p className={styles.tweet_text}>{props.tweetText}</p>
        <img src={props.tweetImage} alt="tweetimg" className={styles.tweet_image} />
      </div>
      <div className={styles.actionbar}>

        <div className={`${styles.action_button} ${styles.comment}`}>
          <div className={styles.icon}>
            <CommentsIcon />
          </div>
          <span>{props.commentsCount}</span>
        </div>

        <div className={`${styles.action_button} ${styles.retweet}`}>
          <div className={styles.icon}>
            <RetweetIcon />
          </div>
          <span>{props.retweetsCount}</span>
        </div>

        <div className={`${styles.action_button} ${styles.like}`}>
          <div className={styles.icon}>
            <LikeIcon />
          </div>
          <span>{props.likesCount}</span>
        </div>

        <div className={`${styles.action_button} ${styles.share}`}>
          <div className={styles.icon}>
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default Tweet;