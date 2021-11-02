import Layout from "../Layout";
import Feed from "../Feed";
import NotificationsList from "../components/NotificationsList/NotificationsList";
const Notifications = () => (
  <Layout>
    <Feed>
      <h1 style={{ fontWeight: "bold", color: "white", paddingLeft: "16px" }}>
        Уведомления
      </h1>
      <NotificationsList />
    </Feed>
  </Layout>
);

export default Notifications;
