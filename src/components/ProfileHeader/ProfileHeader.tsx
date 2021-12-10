import DateIcon from "../Icons/DateIcon";
import LinkIcon from "../Icons/LinkIcon";
import MapIcon from "../Icons/MapIcon";
import styles from "./profileheader.module.scss";

interface ProfileHeaderProps {
  isMyProfile: boolean;
  name?: string;
  username?: string;
  description?: string;
  locationCountry?: string;
  websiteLink?: string;
  dateJoined: string;
  followingCount: number;
  followersCount: number;
  profileAvatar: string;
  profileBackground: string;
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  const {
    isMyProfile,
    name,
    username,
    description,
    locationCountry,
    websiteLink,
    dateJoined,
    followingCount,
    followersCount,
    profileAvatar,
    profileBackground,
  } = props;
  return (
    <div className={styles.container}>
      <img
        src={profileBackground}
        alt="background"
        className={styles.background}
      />

      <img src={profileAvatar} alt="avatar" className={styles.avatar} />

      <button className={styles.follow_button}>
        {isMyProfile && <span>Редактировать</span>}{" "}
        {!isMyProfile && <span>Читать</span>}
      </button>

      <div className={styles.text_container}>
        <h2 className={styles.name}> {name} </h2>
        <span className={styles.username}> @{username} </span>
        <span className={styles.description}> {description} </span>

        <div className={styles.additional_info}>
          {locationCountry && (
            <span className={styles.country}>
              {" "}
              <MapIcon /> {locationCountry}
            </span>
          )}
          {websiteLink && (
            <span className={styles.website}>
              {" "}
              <LinkIcon /> <a href="google.com">{websiteLink}</a>{" "}
            </span>
          )}
          {dateJoined && (
            <span className={styles.joined_date}>
              {" "}
              <DateIcon />
              {dateJoined}{" "}
            </span>
          )}
        </div>

        <div className={styles.followers_info}>
          <span className={styles.following}>
            <b>{followingCount}</b> в читаемых
          </span>
          <span>
            <b>{followersCount}</b> читателей
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
