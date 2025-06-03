import { object, string, number } from "yup";

export const listingChangeValidation = object().shape({
    title: string().required().min(3).label("Title"),
    price: number().required().min(1).max(10000).label("Price"),
    description: string().label("Description"),
    category: object({
        selectedLabel: string().required(),
        selectedValue: string().required().label("Category")
    }),
})

export const loginValidation = object().shape({
    password: string().required().min(4).max(100).label("Password"),
    email: string().required().email().label("Email")
})

export const registerValidation = object().shape({
    username:string().required().min(2).max(20).label("Username"),
    password: string().required().min(4).max(100).label("Password"),
    email: string().required().email().label("Email")
})