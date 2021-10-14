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


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Sidebar />
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
          <TweetCreateForm placeholderText={"Что происходит?"} userAvatar={userAvatar}/>
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
          firstPlace={['Музыка', 'Juice WRLD', '127 тыс.']}
          secondPlace={['Знаменитости', 'Илон Маск', '7898']}
          thirdPlace={['Тренды', 'YEEZY']}
          fourthPlace={['Спорт', 'Майк Тайсон', '1,83 млн.']}
          fifthPlace={['Популярное', 'Tатарстан']}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
