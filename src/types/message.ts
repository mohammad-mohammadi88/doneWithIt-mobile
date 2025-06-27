interface User{
    id:number,
    name:string
}
export interface MessageType{
    id: number,
    listingId: number,
    dateTime: number,
    content: string,
    fromUser: User,
    toUser: User,
}