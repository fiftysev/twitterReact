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

const ProfileHeader = (props: ProfileHeaderProps) => {
    const {
        name,
        username,
        description,
        locationCountry,
        websiteLink,
        dateJoined,
        followingCount,
        followersCount,
        profileAvatar,
        profileBackground
    } = props;
    return (
        <div className={styles.container}>
            <img src={profileBackground} alt="background" className={styles.background} />
            <img src={profileAvatar} alt="avatar" className={styles.avatar} />

            <button className={styles.follow_button}>Читать</button>

            <div className={styles.text_container}>
                <h2 className={styles.name} > {name} </h2>
                <span className={styles.username} > {username} </span>
                <span className={styles.description}> {description} </span>

                <div className={styles.additional_info}>
                    {locationCountry && <span className={styles.country}> <MapIcon /> {locationCountry}</span>}
                    {websiteLink && <span className={styles.website}> <LinkIcon /> <a href="google.com">{websiteLink}</a> </span>}
                    {dateJoined && <span className={styles.joined_date}> <DateIcon /> Регистрация: {dateJoined} </span>}
                </div>
                <div className={styles.followers_info}>
                    <span className={styles.following}><b>{followingCount}</b> в читаемых</span>
                    <span><b>{followersCount}</b> читателей</span>
                </div>
            </div>
        </div>
    )
};

export default ProfileHeader;

