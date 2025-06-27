export interface UserType {
    userId: number;
    name: string;
    email: string;
    iat?: number;
}
export interface ListingUserInfo {
    id: number;
    name: string;
    email: string;
    listings: number;
}
