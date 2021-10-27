import {ReactChild, ReactElement, ReactFragment, ReactPortal} from "react";
import "./index.css";

type feedProps = {
    children: ReactElement | ReactChild | ReactFragment | ReactPortal | null | undefined
}

const Feed = (props: feedProps) => (
    <div className="feed">
        {props.children}
    </div>
)

export default Feed;
