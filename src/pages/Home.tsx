import Feed from "../Feed";
import TweetCreateForm from "../components/TweetCreateForm/TweetCreateForm";
import userAvatar from "../img/tweetAuthor.png";
import Tweet from "../components/Tweet/Tweet";
import Layout from "../Layout";
import { tweets } from "../data";

const Home = () => {
  const Tweets = tweets.map((value) => {
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
        <h1 style={{ fontWeight: "bold", color: "white", paddingLeft: "16px" }}>
          Главная
        </h1>
        <TweetCreateForm
          placeholderText={"Что происходит?"}
          userAvatar={userAvatar}
        />
        {Tweets}
      </Feed>
    </Layout>
  );
};

export default Home;
