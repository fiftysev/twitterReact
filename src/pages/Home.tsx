import Feed from "../Feed";
import TweetCreateForm from "../components/TweetCreateForm/TweetCreateForm";
import userAvatar from "../img/tweetAuthor.png";
import Tweet from "../components/Tweet/Tweet";
import tweetImage from "../img/test.jpeg";
import Layout from "../Layout";

const Home = () => (
    <Layout>
        <Feed>
            <h1 style={{fontWeight: "bold", color: "white", paddingLeft: "16px"}}>Главная</h1>
            <TweetCreateForm placeholderText={"Что происходит?"} userAvatar={userAvatar}/>
            <Tweet
                authorAvatar={userAvatar}
                authorName="Лентач"
                authorUsername="oldlentach"
                tweetedTimeAgo="7h"
                tweetText="В Питере учительницу биологии вынудили уволиться из школы при консерватории из-за блога о сексуальном просвещении для взрослых, пишет «Фонтанка».

                          У некоторых родителей и директора подгорело — якобы учителю «не подобает» вести такую деятельность. В итоге Ольге пришлось уйти."
                tweetImage={tweetImage}
                likesCount={263}
                retweetsCount={23}
                commentsCount={8}
            />
        </Feed>
    </Layout>
)

export default Home;
