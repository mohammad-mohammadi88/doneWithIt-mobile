import type { MessageType } from "@Types/message";
import apiClient from "./client";

const endpoint = 'messages/';

const getMessages = () => apiClient.get<MessageType[]>(endpoint);

const deleteMessage = (messageId:number) => apiClient.delete(endpoint+messageId);

export default {
    deleteMessage,
    getMessages
}