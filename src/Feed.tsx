import { ReactNode } from "react";
import "./index.css";

type feedProps = {
  children: ReactNode;
};

const Feed = (props: feedProps) => <div className="feed">{props.children}</div>;

export default Feed;
