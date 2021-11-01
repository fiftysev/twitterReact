import { useState } from "react";
import styles from "./tabbar.module.scss";
import { tweets } from "../../data";
import Tab from "./Tab";

type TabBarProps = {
  dataChanger: Function;
};

const ProfileTabBar = ({ dataChanger }: TabBarProps) => {
  const tabs = [
    {
      name: "Твиты",
      onclick: () => dataChanger(tweets),
    },
    {
      name: "Твиты и ответы",
      onclick: () => dataChanger(tweets),
    },
    {
      name: "Медиа",
      onclick: () =>
        dataChanger(tweets.filter((value) => value.image !== undefined)),
    },
    {
      name: "Нравится",
      onclick: () =>
        dataChanger(tweets.filter((value) => value.liked === true)),
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const tabItems = tabs.map((value, index) => (
    <Tab
      activeChanger={() => setActiveTab(index)}
      dataChanger={value.onclick}
      tabTitle={value.name}
      isActive={activeTab === index}
    />
  ));
  return <div className={styles.container}>{tabItems}</div>;
};

export default ProfileTabBar;
