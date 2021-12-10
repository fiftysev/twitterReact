import CommentsIcon from "../Icons/CommentsIcon";
import LikeIcon from "../Icons/LikeIcon";
import RetweetIcon from "../Icons/RetweetIcon";
import ShareIcon from "../Icons/ShareIcon";
import styles from "./tweet.module.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";
import FillLikeIcon from "../Icons/FillLikeIcon";
import { useState } from "react";

interface ParamsData {
  login: string;
}

interface TweetProps extends RouteComponentProps<ParamsData> {
  id: number;
  authorAvatar: string;
  authorName: string;
  authorUsername: string;
  tweetedTimeAgo: string;
  tweetText?: string;
  tweetImage?: string;
  commentsCount: number | null;
  retweetsCount: number | null;
  likesCount: number | null;
  isLiked: boolean;
}

const Tweet = (props: TweetProps) => {
  const {
    id,
    authorAvatar,
    authorName,
    authorUsername,
    tweetedTimeAgo,
    tweetText,
    tweetImage,
    commentsCount,
    retweetsCount,
    likesCount,
    match,
    isLiked,
  } = props;
  const [liked, setLiked] = useState<boolean>(isLiked);
  return (
    <div className={styles.container}>
      <img src={authorAvatar} alt="author" className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.author_data}>
          <span className={styles.name}>
            {match.params.login || authorName}
          </span>
          <span className={styles.username}>
            @{match.params.login || authorUsername}
          </span>
          <span className={styles.dot}>•</span>
          <a href={`/tweets/${id}`} className={styles.datetime}>
            {tweetedTimeAgo}
          </a>
        </div>
        <div>
          <p className={styles.tweet_text}>{tweetText}</p>
          {tweetImage && (
            <img
              src={tweetImage}
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
            <div
              className={`${styles.icon} ${liked && styles.liked}`}
              onClick={() => setLiked(!liked)}
            >
              {!liked && <LikeIcon />}
              {liked && <FillLikeIcon />}
            </div>
            <span className={`${liked && styles.liked}`}>{likesCount}</span>
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

export default withRouter(Tweet);
