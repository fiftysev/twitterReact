import Feed from "../Feed";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import profileAvatar from "../img/profileAvatar.jpg";
import profileBackground from "../img/backgroundProfile.jpeg";
import Tweet from "../components/Tweet/Tweet";
import userAvatar from "../img/tweetAuthor.png";
import tweetImage from "../img/test.jpeg";
import Layout from "../Layout";

const Profile = () => (
    <Layout>
        <Feed>
            <ProfileHeader
                name={"Ведомости"}
                username={"Vedomosti"}
                description={'Официальный аккаунт делового издания «Ведомости»'}
                websiteLink={'vedomosti.ru'}
                locationCountry={"Россия"}
                dateJoined={"февраль 2009"}
                followingCount={"31"}
                followersCount={"728,3 тыс."}
                profileAvatar={profileAvatar}
                profileBackground={profileBackground}
            />
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

export default Profile;
