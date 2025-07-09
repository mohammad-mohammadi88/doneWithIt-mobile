import type { MessageType } from "@Types/message";
import apiClient from "./client";

const endpoint = "messages/";

const getMessages = () => apiClient.get<MessageType[]>(endpoint);

const deleteMessage = (messageId: number) =>
    apiClient.delete(endpoint + messageId);

const sendMessage = (message: string, listingId: string) =>
    apiClient.post(endpoint, { message, listingId });

export default {
    deleteMessage,
    getMessages,
    sendMessage
};
