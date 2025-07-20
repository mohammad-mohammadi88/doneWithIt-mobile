import apiClient from "@/APIs/client"
import messagesApi from "@/APIs/messages"



describe("messages Api", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    const prefix = "messages/";
    it("should call getMessages with correct url", () => {
        messagesApi.getMessages();
        expect(apiClient.get).toHaveBeenCalledWith(prefix);
    });
    it("should call sendMessage with correct params", () => {
        const listingId = "1";
        const content = "content";
        messagesApi.sendMessage(content, { listingId });
        expect(apiClient.post).toHaveBeenCalledWith(prefix, {
            content,
            listingId,
        });
    });
    it("should call getMessageWithId with correct url", () => {
        const messageId = "1";
        messagesApi.getMessageWithId(messageId);
        expect(apiClient.get).toHaveBeenCalledWith(prefix + messageId);
    });
    it("should call deleteMessage with correct url", () => {
        const messageId = "1";
        messagesApi.deleteMessage(messageId);
        expect(apiClient.delete).toHaveBeenCalledWith(prefix + messageId);
    });
});
