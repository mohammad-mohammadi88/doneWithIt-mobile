import { maxImageCount } from "./defaults";
import * as Yup from "yup";

export const listingChangeValidation = Yup.object().shape({
    title: Yup.string().required().min(3).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object({
        selectedLabel: Yup.string().required().label("Category"),
        selectedValue: Yup.string().label("Category"),
        selectedIcon: Yup.string().label("Category"),
    }),
    images: Yup.array()
        .min(1, "Please select at least one image")
        .max(maxImageCount,`You can upload at most ${maxImageCount} images`),
});

export const loginValidation = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
});

export const registerValidation = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().min(2).label("Username"),
    password: Yup.string().required().min(5).label("Password"),
});
