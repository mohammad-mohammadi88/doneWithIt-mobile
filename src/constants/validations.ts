import * as Yup from "yup";
export const listingChangeValidation = Yup.object().shape({
    title: Yup.string().required().min(3).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object({
        selectedLabel: Yup.string().required(),
        selectedValue: Yup.string().required().label("Category"),
        selectedIcon: Yup.string().label("Category"),
    }),
    images: Yup.array().min(1,"Please select at least one image")
})

export const loginValidation = Yup.object().shape({
    password: Yup.string().required().min(4).max(100).label("Password"),
    email: Yup.string().required().email().label("Email")
})

export const registerValidation = Yup.object().shape({
    username: Yup.string().required().min(2).max(20).label("Username"),
    password: Yup.string().required().min(4).max(100).label("Password"),
    email: Yup.string().required().email().label("Email")
})