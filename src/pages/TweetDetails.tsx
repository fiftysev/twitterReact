import { FC, ReactFragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import Tweet from "../components/Tweet/Tweet";
import Feed from "../Feed";
import Layout from "../Layout";
import ApiService from "../utils/http.service";

const TweetDetails: FC = () => {
  const [tweet, setTweet] = useState<ReactFragment>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    ApiService.getTweet(id).then((response) => {
      const t = response.data;
      setTweet(
        <Tweet
          id={t.id}
          authorAvatar={t.avatar}
          authorName={t.name}
          authorUsername={t.username}
          tweetedTimeAgo={"19 h."}
          tweetImage={t.image}
          tweetText={t.text}
          commentsCount={t.comments}
          retweetsCount={t.retweets}
          likesCount={t.likes}
          isLiked={t.isLiked}
        />
      );
    });
  }, [id]);

  return (
    <Layout>
      <Feed>
        <div>
          <h1
            style={{ fontWeight: "bold", color: "white", paddingLeft: "16px" }}
          >
            Твит
          </h1>
          {tweet}
        </div>
      </Feed>
    </Layout>
  );
};

export default TweetDetails;
