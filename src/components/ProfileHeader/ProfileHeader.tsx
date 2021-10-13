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

        <button className={styles.follow_button}>Читать</button>

        <div className={styles.text_container}>
            <h2 className={styles.name} > {props.name} </h2>
            <span className={styles.username} > {props.username} </span>
            <span className={styles.description}> {props.description} </span>

            <div className={styles.additional_info}>
                <span className={styles.country}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                         className="r-9ilb82 r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><path
    d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"/><path
    d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"/>
                    </svg>
                    {props.locationCountry}
                </span>
                <span className={styles.website}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                         className="r-9ilb82 r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                        <path
    d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"/><path
    d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"/>
                         </svg>
                    <a href="google.com">{props.websiteLink}</a>
                </span>
                <span className={styles.joined_date}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                         className="r-9ilb82 r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                        <path
    d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"/><circle
    cx="7.032" cy="8.75" r="1.285"/>
                        <circle cx="7.032" cy="13.156" r="1.285"/><circle
    cx="16.968" cy="8.75" r="1.285"/>
                        <circle cx="16.968" cy="13.156" r="1.285"/><circle
    cx="12" cy="8.75" r="1.285"/><circle cx="12" cy="13.156" r="1.285"/><circle
    cx="7.032" cy="17.486" r="1.285"/><circle cx="12" cy="17.486"
    r="1.285"/>
                    </svg>
                    Регистрация: {props.dateJoined}
                </span>
            </div>
            <div className={styles.followers_info}>
                <span className={styles.following}><b>{props.followingCount}</b> в читаемых</span>
                <span><b>{props.followersCount}</b> читателей</span>
            </div>
        </div>
    </div>
);

export default ProfileHeader;

