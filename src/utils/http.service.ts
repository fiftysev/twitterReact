import axios, { AxiosResponse } from "axios";
import { IActualTheme } from "../models/IActualTheme";
import { ITweet } from "../models/ITweet";
import { IUser } from "../models/IUser";

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:7010",
});

export default class ApiService {
  static async getTweets(): Promise<AxiosResponse<ITweet[]>> {
    return $api.get<ITweet[]>("/tweets");
  }

  static async getTweet(id: string): Promise<AxiosResponse<ITweet>> {
    return $api.get<ITweet>(`/tweets/${id}`);
  }

  static async sendTweet(
    avatar: string,
    name: string,
    username: string,
    text: string,
    image?: string
  ) {
    return $api.post(`/tweets/create`, { avatar, name, username, text, image });
  }

  static async getUser(id: string): Promise<AxiosResponse<IUser>> {
    return $api.get<IUser>(`/users/${id}`);
  }

  static async getActual() {
    return $api.get<IActualTheme[]>("/api/actual");
  }
}
