import axios, { AxiosResponse } from "axios";
import { ITweet } from "../models/ITweet";

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost/7010",
});

export default class ApiService {
  static async getTweets(): Promise<AxiosResponse<ITweet[]>> {
    return $api.get<ITweet[]>("/users");
  }
}
