import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tweet from './components/Tweet/Tweet';
import TweetCreateForm from "./components/TweetCreateForm/TweetCreateForm";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";

import tweetImage from './img/test.jpeg';
import userAvatar from './img/tweetAuthor.png';
import profileAvatar from './img/profileAvatar.jpg';
import profileBackground from './img/backgroundProfile.jpeg';
import ActualSidebar from "./components/ActualSidebar/ActualSidebar";

import homeIcon from "../src/img/Home.svg";
import hashtagIcon from "../src/img/Hashtag.svg";
import notificationIcon from "../src/img/Notification.svg";
import messageIcon from "../src/img/Message.svg";
import bookmarkIcon from "../src/img/Bookmark.svg";
import listIcon from "../src/img/List.svg";
import twitterIcon from "../src/img/Twitter Logo.svg";
import moreIcon from "../src/img/More.svg";


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Sidebar listOfItems={
        [
          { elementIcon: homeIcon, elementTitle: 'Главная' },
          { elementIcon: hashtagIcon, elementTitle: 'Обзор' },
          { elementIcon: notificationIcon, elementTitle: 'Уведомления' },
          { elementIcon: messageIcon, elementTitle: 'Сообщения' },
          { elementIcon: bookmarkIcon, elementTitle: 'Закладки' },
          { elementIcon: listIcon, elementTitle: 'Списки' },
          { elementIcon: twitterIcon, elementTitle: 'Профиль' },
          { elementIcon: moreIcon, elementTitle: 'Еще' }
        ]
      } />
      <div className="feed">
        <ProfileHeader
          name={"Ведомости"}
          username={"@Vedomosti"}
          description={'Официальный аккаунт делового издания «Ведомости»'}
          websiteLink={'vedomosti.ru'}
          locationCountry={"Россия"}
          dateJoined={"февраль 2009"}
          followingCount={"31"}
          followersCount={"728,3 тыс."}
          profileAvatar={profileAvatar}
          profileBackground={profileBackground}
        />
        <TweetCreateForm placeholderText={"Что происходит?"} userAvatar={userAvatar} />
        <Tweet
          authorAvatar={userAvatar}
          authorName="Лентач"
          authorUsername="@oldlentach"
          tweetedTimeAgo="7h"
          tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                      У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
          tweetImage={tweetImage}
          likesCount={263}
          retweetsCount={23}
          commentsCount={8}
        />
      </div>
      <ActualSidebar
        actualData={
          [
            { category: 'Музыка', title: 'Juice WRLD', countOfTweets: '127 тыс.' },
            { category: 'Знаменитости', title: 'Илон Маск', countOfTweets: '7898' },
            { category: 'Тренды', title: 'YEEZY' },
            { category: 'Спорт', title: 'Майк Тайсон', countOfTweets: '1,83 млн.' },
            { category: 'Популярное', title: 'Tатарстан' }
          ]
        }
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
