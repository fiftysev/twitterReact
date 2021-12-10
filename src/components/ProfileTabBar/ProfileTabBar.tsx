import { useState } from "react";
import styles from "./tabbar.module.scss";
import Tab from "./Tab";
import { ITweet } from "../../models/ITweet";

type TabBarProps = {
  dataChanger: Function;
  initialData: ITweet[];
};

const ProfileTabBar = ({ dataChanger, initialData }: TabBarProps) => {
  const tabs = [
    {
      name: "Твиты",
      onclick: () => dataChanger(initialData),
    },
    {
      name: "Твиты и ответы",
      onclick: () => dataChanger(initialData),
    },
    {
      name: "Медиа",
      onclick: () =>
        dataChanger(initialData.filter((value) => value.image !== undefined)),
    },
    {
      name: "Нравится",
      onclick: () => {
        dataChanger(initialData.filter((value) => value.isLiked === true));
      },
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
