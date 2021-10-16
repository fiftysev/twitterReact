import DateIcon from '../Icons/DateIcon';
import LinkIcon from '../Icons/LinkIcon';
import MapIcon from '../Icons/MapIcon';
import styles from './profileheader.module.scss';

type ProfileHeaderProps = {
    name: string;
    username: string;
    description?: string;
    locationCountry?: string;
    websiteLink?: string;
    dateJoined: string;
    followingCount: string;
    followersCount: string;
    profileAvatar: string;
    profileBackground: string;
}

const ProfileHeader = (props: ProfileHeaderProps) => (
    <div className={styles.container}>
        <img src={props.profileBackground} alt="background" className={styles.background} />
        <img src={props.profileAvatar} alt="avatar" className={styles.avatar} />

        <button className={styles.follow_button}>Читать</button>

        <div className={styles.text_container}>
            <h2 className={styles.name} > {props.name} </h2>
            <span className={styles.username} > {props.username} </span>
            <span className={styles.description}> {props.description} </span>

            <div className={styles.additional_info}>
                {props.locationCountry && <span className={styles.country}> <MapIcon /> {props.locationCountry}</span>}
                {props.websiteLink && <span className={styles.website}> <LinkIcon /> <a href="google.com">{props.websiteLink}</a> </span>}
                {props.dateJoined && <span className={styles.joined_date}> <DateIcon /> Регистрация: {props.dateJoined} </span>}
            </div>
            <div className={styles.followers_info}>
                <span className={styles.following}><b>{props.followingCount}</b> в читаемых</span>
                <span><b>{props.followersCount}</b> читателей</span>
            </div>
        </div>
    </div>
);

export default ProfileHeader;

