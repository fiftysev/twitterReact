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
        <img src={props.profileBackground} alt="background" className={styles.background}/>
        <img src={props.profileAvatar} alt="avatar" className={styles.avatar} />

    </div>
);

export default ProfileHeader;

