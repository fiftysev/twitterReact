export interface ITweet {
  _id?: string;
  id: number;
  avatar: string;
  name: string;
  username: string;
  image?: string;
  text?: string;
  likes: number;
  retweets: number;
  comments: number;
  isLiked: boolean;
}
