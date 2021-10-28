import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


import './index.css';
import Tweet from './components/Tweet/Tweet';
import TweetCreateForm from "./components/TweetCreateForm/TweetCreateForm";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";

import tweetImage from './img/test.jpeg';
import userAvatar from './img/tweetAuthor.png';
import profileAvatar from './img/profileAvatar.jpg';
import profileBackground from './img/backgroundProfile.jpeg';

import Layout from "./Layout";
import Feed from "./Feed";
import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";


const App = () => {

  return (
      <Router >
        <Switch>
          <Route path={"/profile"}>
            <Layout>
              <Feed>
                <ProfileHeader
                    name={"Ведомости"}
                    username={"Vedomosti"}
                    description={'Официальный аккаунт делового издания «Ведомости»'}
                    websiteLink={'vedomosti.ru'}
                    locationCountry={"Россия"}
                    dateJoined={"февраль 2009"}
                    followingCount={"31"}
                    followersCount={"728,3 тыс."}
                    profileAvatar={profileAvatar}
                    profileBackground={profileBackground}
                />
                <Tweet
                    authorAvatar={userAvatar}
                    authorName="Лентач"
                    authorUsername="oldlentach"
                    tweetedTimeAgo="7h"
                    tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                             У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                    tweetImage={tweetImage}
                    likesCount={263}
                    retweetsCount={23}
                    commentsCount={8}
                />
                <Tweet
                    authorAvatar={userAvatar}
                    authorName="Лентач"
                    authorUsername="oldlentach"
                    tweetedTimeAgo="7h"
                    tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                             У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                    tweetImage={tweetImage}
                    likesCount={263}
                    retweetsCount={23}
                    commentsCount={8}
                />
                <Tweet
                    authorAvatar={userAvatar}
                    authorName="Лентач"
                    authorUsername="oldlentach"
                    tweetedTimeAgo="7h"
                    tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                             У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                    tweetImage={tweetImage}
                    likesCount={263}
                    retweetsCount={23}
                    commentsCount={8}
                />
                <Tweet
                    authorAvatar={userAvatar}
                    authorName="Лентач"
                    authorUsername="oldlentach"
                    tweetedTimeAgo="7h"
                    tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                             У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                    tweetImage={tweetImage}
                    likesCount={263}
                    retweetsCount={23}
                    commentsCount={8}
                />
              </Feed>
            </Layout>
          </Route>
          <Route path={"/register"} component={SignUp}/>
          <Route path={"/login"} component={SignIn}/>
          <Route path={"/home"}>
            <Layout>
              <Feed>
                <TweetCreateForm placeholderText={"Что происходит?"} userAvatar={userAvatar}/>
                <Tweet
                    authorAvatar={userAvatar}
                    authorName="Лентач"
                    authorUsername="oldlentach"
                    tweetedTimeAgo="7h"
                    tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                          У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                    tweetImage={tweetImage}
                    likesCount={263}
                    retweetsCount={23}
                    commentsCount={8}
                />
              </Feed>
            </Layout>
          </Route>
          <Route path={"/user/:login"}>
            <Layout>
              <Feed>
                <ProfileHeader
                    description={'Официальный аккаунт делового издания «Ведомости»'}
                    websiteLink={'vedomosti.ru'}
                    locationCountry={"Россия"}
                    dateJoined={"февраль 2009"}
                    followingCount={"31"}
                    followersCount={"728,3 тыс."}
                    profileAvatar={profileAvatar}
                    profileBackground={profileBackground}
                />
                <Tweet
                    authorAvatar={userAvatar}
                    authorName="Лентач"
                    authorUsername="oldlentach"
                    tweetedTimeAgo="7h"
                    tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                             У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                    tweetImage={tweetImage}
                    likesCount={263}
                    retweetsCount={23}
                    commentsCount={8}
                />
                <Tweet
                    authorAvatar={userAvatar}
                    authorName="Лентач"
                    authorUsername="oldlentach"
                    tweetedTimeAgo="7h"
                    tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                             У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                    tweetImage={tweetImage}
                    likesCount={263}
                    retweetsCount={23}
                    commentsCount={8}
                />
              </Feed>
            </Layout>
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
