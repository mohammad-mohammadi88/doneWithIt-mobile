import type { SelectedOption } from "./globals";

export interface LoginInterface{
    password: string,
    email: string
}

export interface RegisterInterface{
    username:string;
    password: string,
    email: string
}

export interface ListingChangeInterface{
    title: string,
    price: string,
    description: string,
    category: SelectedOption
}