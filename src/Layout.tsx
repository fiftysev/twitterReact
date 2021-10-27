import React, {ReactChild, ReactElement, ReactFragment, ReactPortal} from "react";
import './index.css'
import homeIcon from "./img/Home.svg";
import hashtagIcon from "./img/Hashtag.svg";
import notificationIcon from "./img/Notification.svg";
import messageIcon from "./img/Message.svg";
import bookmarkIcon from "./img/Bookmark.svg";
import listIcon from "./img/List.svg";
import twitterIcon from "./img/Twitter Logo.svg";
import moreIcon from "./img/More.svg";
import Sidebar from "./components/Sidebar/Sidebar";
import ActualSidebar from "./components/ActualSidebar/ActualSidebar";

const sidebarItems =
    [
        { elementIcon: homeIcon, elementTitle: 'Главная', pathTitle: '/home'},
        { elementIcon: hashtagIcon, elementTitle: 'Обзор', pathTitle: '/explore' },
        { elementIcon: notificationIcon, elementTitle: 'Уведомления', pathTitle: '/notifications' },
        { elementIcon: messageIcon, elementTitle: 'Сообщения', pathTitle: '/messages' },
        { elementIcon: bookmarkIcon, elementTitle: 'Закладки', pathTitle: '/bookmarks' },
        { elementIcon: listIcon, elementTitle: 'Списки', pathTitle: '/lists' },
        { elementIcon: twitterIcon, elementTitle: 'Профиль', pathTitle: '/profile' },
        { elementIcon: moreIcon, elementTitle: 'Еще', pathTitle: '/more' }
    ]

const actualSidebarItems =
    [
        { category: 'Музыка', title: 'Juice WRLD', countOfTweets: '127 тыс.' },
        { category: 'Знаменитости', title: 'Илон Маск', countOfTweets: '7898' },
        { category: 'Тренды', title: 'YEEZY' },
        { category: 'Спорт', title: 'Майк Тайсон', countOfTweets: '1,83 млн.' },
        { category: 'Популярное', title: 'Tатарстан' }
    ]

type layoutProps = {
    children: ReactElement | ReactChild | ReactFragment | ReactPortal | null | undefined
}

const Layout = (props: layoutProps) => (
    <div className="container">
        <Sidebar listOfItems={sidebarItems} />
        {props.children}
        <ActualSidebar
            actualData={actualSidebarItems}
        />
    </div>
)

export default Layout;
