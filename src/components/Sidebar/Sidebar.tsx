import styles from "./sidebar.module.scss"
import SidebarElement from "./SidebarElement";

import homeIcon from "../../img/Home.svg";
import hashtagIcon from "../../img/Hashtag.svg";
import notificationIcon from "../../img/Notification.svg";
import messageIcon from "../../img/Message.svg";
import bookmarkIcon from "../../img/Bookmark.svg";
import listIcon from "../../img/List.svg";
import twitterIcon from "../../img/Twitter Logo.svg";
import moreIcon from "../../img/More.svg";


const Sidebar = () => (
  <div className={styles.container}>
    <SidebarElement elementIcon={homeIcon} elementTitle="Главная" isSelected={true} />
    <SidebarElement elementIcon={hashtagIcon} elementTitle="Обзор" isSelected={false} />
    <SidebarElement elementIcon={notificationIcon} elementTitle="Уведомления" isSelected={false} />
    <SidebarElement elementIcon={messageIcon} elementTitle="Сообщения" isSelected={false} />
    <SidebarElement elementIcon={bookmarkIcon} elementTitle="Закладки" isSelected={false} />
    <SidebarElement elementIcon={listIcon} elementTitle="Списки" isSelected={false} />
    <SidebarElement elementIcon={twitterIcon} elementTitle="Профиль" isSelected={false} />
    <SidebarElement elementIcon={moreIcon} elementTitle="Еще" isSelected={false} />
    <button className={styles.button}>Твитнуть</button>
  </div>
)

export default Sidebar;