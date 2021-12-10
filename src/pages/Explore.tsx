import "../index";
import Feed from "../Feed";
import Layout from "../Layout";
import Tweet from "../components/Tweet/Tweet";
import TweetGroup from "../components/TweetGroup/TweetGroup";
import { ITweet } from "../models/ITweet";
import { useEffect, useState } from "react";
import ApiService from "../utils/http.service";

const Explore = () => {
  const [firstGroup, setFirstGroup] = useState<ITweet[]>([]);
  const [secondGroup, setSecondGroup] = useState<ITweet[]>([]);
  const [thirdGroup, setThirdGroup] = useState<ITweet[]>([]);
  useEffect(() => {
    ApiService.getTweets().then((response) => {
      const firstGroup: ITweet[] = [];
      const secondGroup: ITweet[] = [];
      const thirdGroup: ITweet[] = [];
      response.data.forEach((v, i) => {
        if (i % 2) {
          firstGroup.push(v);
        } else if (i % 3 === 0) {
          secondGroup.push(v);
        } else {
          thirdGroup.push(v);
        }
      });
      setFirstGroup(firstGroup);
      setSecondGroup(secondGroup);
      setThirdGroup(thirdGroup);
    });
  });

  return (
    <Layout>
      <Feed>
        <TweetGroup groupTitle="Music">
          {firstGroup.map((value) => (
            <Tweet
              id={12}
              authorAvatar={value.avatar}
              authorName={value.name}
              authorUsername={value.username}
              tweetImage={value.image}
              tweetText={value.text}
              tweetedTimeAgo={"19 h."}
              commentsCount={value.comments}
              retweetsCount={value.retweets}
              likesCount={value.likes}
              isLiked={value.isLiked}
            />
          ))}
        </TweetGroup>
        <TweetGroup groupTitle="Shimanovsk">
          {secondGroup.map((value) => (
            <Tweet
              id={12}
              authorAvatar={value.avatar}
              authorName={value.name}
              authorUsername={value.username}
              tweetImage={value.image}
              tweetText={value.text}
              tweetedTimeAgo={"19 h."}
              commentsCount={value.comments}
              retweetsCount={value.retweets}
              likesCount={value.likes}
              isLiked={value.isLiked}
            />
          ))}
        </TweetGroup>
        <TweetGroup groupTitle="Gangsta">
          {thirdGroup.map((value) => (
            <Tweet
              id={12}
              authorAvatar={value.avatar}
              authorName={value.name}
              authorUsername={value.username}
              tweetImage={value.image}
              tweetText={value.text}
              tweetedTimeAgo={"19 h."}
              commentsCount={value.comments}
              retweetsCount={value.retweets}
              likesCount={value.likes}
              isLiked={value.isLiked}
            />
          ))}
        </TweetGroup>
      </Feed>
    </Layout>
  );
};

export default Explore;
