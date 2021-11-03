import "../index";
import ActualSidebar from "../components/ActualSidebar/ActualSidebar";
import Feed from "../Feed";
import Layout from "../Layout";

const userRecItems = [
  {
    userRecAvatar: ".img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: ".img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: ".img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: ".img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
  {
    userRecAvatar: ".img/tweetAuthor.png",
    userRecName: "GodDamn",
    userRecUsername: "GodDamn",
  },
];

const Explore = () => {
  return (
    <Layout rightSidebarTitle={"Кого читать"}>
      <Feed>
        <ActualSidebar
          actualData={userRecItems}
          sidebarTitle={"Актуальные темы"}
        />
      </Feed>
    </Layout>
  );
};

export default Explore;
