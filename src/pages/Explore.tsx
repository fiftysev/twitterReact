import "../index";
import ActualSidebar from "../components/ActualSidebar/ActualSidebar";
import Feed from "../Feed";
import Layout from "../Layout";
import Tweet from "../components/Tweet/Tweet";
import TweetGroup from "../components/TweetGroup/TweetGroup";
import tweetsData from "../tweetsData.json";

const userRecItems = [
  {
    userRecAvatar: "./img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: "./img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: "./img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: "./img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: "./img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
];

const actualSidebarItems = [
  { category: "Музыка", title: "Juice WRLD", countOfTweets: "127 тыс." },
  { category: "Знаменитости", title: "Илон Маск", countOfTweets: "7898" },
  { category: "Тренды", title: "YEEZY" },
  { category: "Спорт", title: "Майк Тайсон", countOfTweets: "1,83 млн." },
  { category: "Популярное", title: "Tатарстан" },
];

const Explore = () => {
  const firstGroup = tweetsData.slice(0, 3);
  const secondGroup = tweetsData.slice(3, 5);
  const thirdGroup = tweetsData.slice(5);
  return (
    <Layout
      rightSidebarTitle={"Кого читать"}
      customRightSidebarItems={userRecItems}
    >
      <Feed>
        <ActualSidebar
          actualData={actualSidebarItems}
          sidebarTitle={"Актуальные темы"}
        />
        <TweetGroup groupTitle="Music">
          {firstGroup.map((value) => (
            <Tweet
              id={12}
              authorAvatar={value.avatar}
              authorName={value.name}
              authorUsername={value.username}
              tweetImage={value.image}
              tweetText={value.text}
              tweetedTimeAgo={value.timeAgo}
              commentsCount={value.comments}
              retweetsCount={value.retweets}
              likesCount={value.likes}
              isLiked={value.liked}
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
              tweetedTimeAgo={value.timeAgo}
              commentsCount={value.comments}
              retweetsCount={value.retweets}
              likesCount={value.likes}
              isLiked={value.liked}
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
              tweetedTimeAgo={value.timeAgo}
              commentsCount={value.comments}
              retweetsCount={value.retweets}
              likesCount={value.likes}
              isLiked={value.liked}
            />
          ))}
        </TweetGroup>
      </Feed>
    </Layout>
  );
};

export default Explore;
