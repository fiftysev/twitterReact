import "../index";
import ActualSidebar from "../components/ActualSidebar/ActualSidebar";
import Feed from "../Feed";
import Layout from "../Layout";

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
      </Feed>
    </Layout>
  );
};

export default Explore;
