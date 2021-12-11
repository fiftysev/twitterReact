import Feed from "../Feed";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Tweet from "../components/Tweet/Tweet";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import { ITweet } from "../models/ITweet";
import { IUser } from "../models/IUser";
import ApiService from "../utils/http.service";
import { useParams } from "react-router";

const User = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    ApiService.getUser(id).then((response) => {
      setUser(response.data);
    });
    ApiService.getTweets().then((response) => {
      setTweets(response.data);
    });
  }, [id]);

  const Tweets = tweets.map((t) => {
    return (
      <Tweet
        id={12}
        authorAvatar={t.avatar}
        authorName={t.name}
        authorUsername={t.username}
        tweetedTimeAgo={"19 h."}
        tweetImage={t.image}
        tweetText={t.text}
        likesCount={t.likes}
        retweetsCount={t.retweets}
        commentsCount={t.comments}
        isLiked={t.isLiked}
      />
    );
  });
  return (
    <Layout>
      <Feed>
        <ProfileHeader
          isMyProfile={false}
          name={user.name}
          username={user.username}
          description={user.description}
          websiteLink={user.link}
          locationCountry={user.country}
          dateJoined={"29 Feb. 2009"}
          followingCount={user.following}
          followersCount={user.followers}
          profileAvatar={user.avatar}
          profileBackground={user.background || ""}
        />
        {Tweets}
      </Feed>
    </Layout>
  );
};

export default User;
