import type { ListingUserInfo } from "@Types/user";
import apiClient from "./client";

const endpoint = 'user/';

const getUser = (id:number) => apiClient.get<ListingUserInfo>(endpoint+id);

export default {
    getUser
}