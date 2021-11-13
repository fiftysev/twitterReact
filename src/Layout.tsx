import "./index.css";
import homeIcon from "./img/home.svg";
import hashtagIcon from "./img/hashtag.svg";
import notificationIcon from "./img/notification.svg";
import messageIcon from "./img/message.svg";
import bookmarkIcon from "./img/bookmark.svg";
import listIcon from "./img/list.svg";
import twitterIcon from "./img/twitter_logo.svg";
import moreIcon from "./img/more.svg";
import Sidebar from "./components/Sidebar/Sidebar";
import ActualSidebar from "./components/ActualSidebar/ActualSidebar";
import { ReactNode } from "react";

const sidebarItems = [
  { elementIcon: homeIcon, elementTitle: "Главная", pathTitle: "/home" },
  { elementIcon: hashtagIcon, elementTitle: "Обзор", pathTitle: "/explore" },
  {
    elementIcon: notificationIcon,
    elementTitle: "Уведомления",
    pathTitle: "/notifications",
  },
  {
    elementIcon: messageIcon,
    elementTitle: "Сообщения",
    pathTitle: "/messages",
  },
  {
    elementIcon: bookmarkIcon,
    elementTitle: "Закладки",
    pathTitle: "/bookmarks",
  },
  { elementIcon: listIcon, elementTitle: "Списки", pathTitle: "/lists" },
  { elementIcon: twitterIcon, elementTitle: "Профиль", pathTitle: "/profile" },
  { elementIcon: moreIcon, elementTitle: "Еще", pathTitle: "/more" },
];

const actualSidebarItems = [
  { category: "Музыка", title: "Juice WRLD", countOfTweets: "127 тыс." },
  { category: "Знаменитости", title: "Илон Маск", countOfTweets: "7898" },
  { category: "Тренды", title: "YEEZY" },
  { category: "Спорт", title: "Майк Тайсон", countOfTweets: "1,83 млн." },
  { category: "Популярное", title: "Tатарстан" },
];

type layoutProps = {
  children: ReactNode;
  rightSidebarTitle?: string;
  customRightSidebarItems?: object[];
};

const Layout = (props: layoutProps) => {
  const actualTitle =
    props.rightSidebarTitle === undefined
      ? "Актуальные темы"
      : props.rightSidebarTitle;
  const actualData =
    props.customRightSidebarItems === undefined
      ? actualSidebarItems
      : props.customRightSidebarItems;
  return (
    <div className="container">
      <Sidebar listOfItems={sidebarItems} />
      {props.children}
      <div className="sidebar_container">
        <ActualSidebar actualData={actualData} sidebarTitle={actualTitle} />
      </div>
    </div>
  );
};

export default Layout;
