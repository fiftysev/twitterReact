export interface IUser {
  id: number;
  avatar: string;
  background?: string;
  country?: string;
  link?: string;
  description?: string;
  name: string;
  username: string;
  followers: number;
  following: number;
}
