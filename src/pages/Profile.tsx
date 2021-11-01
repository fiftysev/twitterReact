import Feed from "../Feed";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import profileAvatar from "../img/profileAvatar.jpg";
import profileBackground from "../img/backgroundProfile.jpeg";
import Tweet from "../components/Tweet/Tweet";
import Layout from "../Layout";
import { tweets } from "../data";
import { useState } from "react";
import ProfileTabBar from "../components/ProfileTabBar/ProfileTabBar";

const Profile = () => {
  const [data, setData] = useState(tweets);
  const Tweets = data.map((value) => {
    return (
      <Tweet
        authorAvatar={value.avatar}
        authorName={value.name}
        authorUsername={value.username}
        tweetedTimeAgo={value.timeAgo}
        tweetImage={value.image}
        tweetText={value.text}
        likesCount={value.likes}
        retweetsCount={value.retweets}
        commentsCount={value.comments}
        isLiked={value.liked}
      />
    );
  });
  return (
    <Layout>
      <Feed>
        <ProfileHeader
          name={"Ведомости"}
          username={"Vedomosti"}
          description={"Официальный аккаунт делового издания «Ведомости»"}
          websiteLink={"vedomosti.ru"}
          locationCountry={"Россия"}
          dateJoined={"февраль 2009"}
          followingCount={"31"}
          followersCount={"728,3 тыс."}
          profileAvatar={profileAvatar}
          profileBackground={profileBackground}
        />
        <ProfileTabBar dataChanger={setData} />
        {Tweets}
      </Feed>
    </Layout>
  );
};

export default Profile;
