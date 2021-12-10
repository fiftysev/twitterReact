import Feed from "../Feed";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import profileAvatar from "../img/profileAvatar.jpg";
import profileBackground from "../img/backgroundProfile.jpeg";
import Tweet from "../components/Tweet/Tweet";
import Layout from "../Layout";
import tweets from "../tweetsData.json";

const User = () => {
  const Tweets = tweets.map((value) => {
    // @ts-ignore
    return (
      <Tweet
        id={12}
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
          description={"Официальный аккаунт делового издания «Ведомости»"}
          websiteLink={"vedomosti.ru"}
          locationCountry={"Россия"}
          dateJoined={"февраль 2009"}
          followingCount={31}
          followersCount={728.3}
          profileAvatar={profileAvatar}
          profileBackground={profileBackground}
        />
        {Tweets}
      </Feed>
    </Layout>
  );
};

export default User;
