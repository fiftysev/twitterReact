import { ReactChild, ReactElement, ReactFragment, ReactPortal } from "react";
import ThemeTag from "../Icons/ThemeTag";
import styles from "./tweetgroup.module.scss";

type TweetGroupProps = {
  children:
    | ReactElement
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  groupTitle: string;
};

const TweetGroup = ({ children, groupTitle }: TweetGroupProps) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.icon}>
        <ThemeTag />
      </div>
      <h3 className={styles.title}>{groupTitle}</h3>
    </div>
    {children}
  </div>
);

export default TweetGroup;
