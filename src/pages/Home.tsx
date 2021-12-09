import { useEffect, useState, ReactFragment } from "react";
import ApiService from "../utils/http.service";

import Layout from "../Layout";
import Feed from "../Feed";
import TweetCreateForm from "../components/TweetCreateForm/TweetCreateForm";
import Tweet from "../components/Tweet/Tweet";
import userAvatar from "../img/tweetAuthor.png";

const Home = () => {
  const [tweets, setTweets] = useState<ReactFragment[]>([]);
  useEffect(() => {
    ApiService.getTweets().then((response) => {
      const Tweets = response.data.map((t) => {
        return (
          <Tweet
            key={t.id}
            id={t.id}
            authorAvatar={t.avatar}
            authorName={t.name}
            authorUsername={t.username}
            tweetedTimeAgo={"15 h."}
            tweetImage={t.image}
            tweetText={t.text}
            likesCount={t.likes}
            retweetsCount={t.retweets}
            commentsCount={t.comments}
            isLiked={t.isLiked}
          />
        );
      });
      setTweets(Tweets);
    });
  }, []);

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
        {tweets}
      </Feed>
    </Layout>
  );
};

export default Home;
