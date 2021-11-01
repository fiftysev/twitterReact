import Layout from "../Layout";
import Feed from "../Feed";
import NotificationsList from "../components/NotificationsList/NotificationsList";
const Notifications = () => (
  <Layout>
    <Feed>
      <NotificationsList />
    </Feed>
  </Layout>
);

export default Notifications;
