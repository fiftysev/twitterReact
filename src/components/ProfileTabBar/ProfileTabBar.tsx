import { useState } from "react";
import styles from "./tabbar.module.scss";
import Tab from "./Tab";
import { ITweet } from "../../models/ITweet";

import * as _ from "lodash";

type TabBarProps = {
  dataChanger: Function;
  initialData: ITweet[];
};

const ProfileTabBar = ({ dataChanger, initialData }: TabBarProps) => {
  const tweets = _.cloneDeep(initialData);
  const tabs = [
    {
      name: "Твиты",
      onclick: () => {
        return dataChanger(tweets);
      },
    },
    {
      name: "Твиты и ответы",
      onclick: () => {
        return dataChanger(tweets);
      },
    },
    {
      name: "Медиа",
      onclick: () => {
        return dataChanger(tweets.filter((value) => value.image !== undefined));
      },
    },
    {
      name: "Нравится",
      onclick: () => {
        return dataChanger(tweets.filter((value) => value.isLiked === true));
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
