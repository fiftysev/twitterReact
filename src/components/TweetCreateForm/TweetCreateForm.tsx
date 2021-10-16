import CalendarIcon from '../Icons/CalendarIcon';
import GifIcon from '../Icons/GifIcon';
import ImageIcon from '../Icons/ImageIcon';
import PollIcon from '../Icons/PollIcon';
import StickerIcon from '../Icons/StickerIcon';
import styles from './tweetcreate.module.scss';

type TweetFormProps = {
    placeholderText: string;
    userAvatar: string;
}

const TweetCreateForm = ({ placeholderText, userAvatar }: TweetFormProps) => (
    <div className={styles.container}>
        <img src={userAvatar} alt="avatar" className={styles.avatar} />
        <div className={styles.content}>
            <textarea placeholder={placeholderText} className={styles.input} />
            <div className={styles.actionbar}>
                <div className={styles.action_button}>
                    <ImageIcon />
                </div>
                <div className={styles.action_button}>
                    <GifIcon />
                </div>
                <div className={styles.action_button}>
                    <PollIcon />
                </div>
                <div className={styles.action_button}>
                    <StickerIcon />
                </div>
                <div className={styles.action_button}>
                    <CalendarIcon />
                </div>
                <div className={styles.tweet_button}>
                    Твитнуть
                </div>
            </div>
        </div>
    </div>
);


export default TweetCreateForm;
