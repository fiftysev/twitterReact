import ActualSidebar from "../components/ActualSidebar/ActualSidebar";
import Feed from "../Feed";
import Layout from "../Layout";

const actualSidebarItems = [
  { category: "Музыка", title: "Juice WRLD", countOfTweets: "127 тыс." },
  { category: "Знаменитости", title: "Илон Маск", countOfTweets: "7898" },
  { category: "Тренды", title: "YEEZY" },
  { category: "Спорт", title: "Майк Тайсон", countOfTweets: "1,83 млн." },
  { category: "Популярное", title: "Tатарстан" },
];

const Explore = () => {
  return (
    <Layout>
      <Feed>
        <ActualSidebar
          actualData={actualSidebarItems}
          sidebarTitle={"Актуальноe"}
        />
      </Feed>
    </Layout>
  );
};

export default Explore;
