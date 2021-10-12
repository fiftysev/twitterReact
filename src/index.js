import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tweet from './components/Tweet/Tweet';

import userAvatar from './img/tweetAuthor.png';
import tweetImage from './img/tweetImg.jpeg';


ReactDOM.render(
  <React.StrictMode>
    <Tweet
      authorAvatar={userAvatar}
      authorName="Лентач"
      authorUsername="@oldlentach"
      tweetedTimeAgo="7h"
      tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка». 

                  У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
      tweetImage={tweetImage}
      likesCount="263"
      retweetsCount="23"
      commentsCount="8"
    />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
