
# 📱 Done With It - Mobile App

A mobile marketplace app built with **React Native (Expo)** where users can list items for sale, browse listings, and communicate with sellers.

## ✨ Features

- 📝 Post listings with title, description, category, price, and image
- 🖼️ Upload photos using gallery
- 📬 Messaging between buyers and sellers
- 🧭 Navigation with bottom tabs and stacks
- ✅ Form validation with Yup and Formik
- 📡 Connects to a REST API backend
- 🔐 User authentication with token and saving with Async storage
- 🌙 Light & Clean UI using custom components

## 🧰 Tech Stack

- **React Native + Expo**
- **Expo Router**
- **Axios + Apisauce**
- **Formik + Yup**
- **Expo ImagePicker**
- **AsyncStorage**
- **Jest + Testing Library** (In future it will be added)

## 🔌 Backend API

This app is connected to the following backend:
https://donewithit-backend-qymu.onrender.com

Check available routes and documentation from github repository.
https://github.com/mohammad-mohammadi88/doneWithIt-backend

## 🚀 Run Locally

Make sure you have **Node**, **Expo CLI**, and **Yarn/NPM** installed.

```bash
git clone https://github.com/USERNAME/doneWithIt-mobile.git
cd doneWithIt-mobile
npm install
npx expo start
```
Scan the QR code with Expo Go to run the app on your phone.

# 📱🖼️ Application Screens
## 👤 Account
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467499571-fd365805-ec4d-4c24-95a8-0d19099265a2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T105921Z&X-Amz-Expires=300&X-Amz-Signature=db7d27e3ca80a0db4c0391c2d9ce05a4296abad5199ccc777c36a7d6a1f043db&X-Amz-SignedHeaders=host" width="300" alt="Account Screen" />

## ✏️📤 Add and Edit Listing
Both Screens has same content
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501886-c422a667-52ae-4bff-9f6b-af9f205447c9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T112240Z&X-Amz-Expires=300&X-Amz-Signature=758fdf5cd5f9228e1b188e1fc68e092edb62c5ecc38f0d85be2535320e27ed7e&X-Amz-SignedHeaders=host" width="300" alt="Add and Edit Listing" />

## 🗂️ Listings (Feed)
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501877-df14098e-128f-4392-8b7e-efffc0ae9b71.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T105018Z&X-Amz-Expires=300&X-Amz-Signature=8ce1c9dc078b4f54579cdd53a16ac0553ca9e58ee3e738987d69140db5be0138&X-Amz-SignedHeaders=host" width="300" alt="Listings Screen" />

## 🔍 Listing Detail

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501880-2d9778e8-d4c3-48e2-8205-0a52b124928a.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T110035Z&X-Amz-Expires=300&X-Amz-Signature=4c7dfc3394e0b775c16fcdf922b026638b7c1ae5df1e0f472bb42e682415f5de&X-Amz-SignedHeaders=host" width="300" alt="Listing detail Screen" />

## 🔑 Login
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501883-a57699b2-d102-4475-bb6b-f0692cd35de4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T110722Z&X-Amz-Expires=300&X-Amz-Signature=743ab610ab0a89a5165e5d8e3a9bb389844cf253c710eb21454beefca749eedd&X-Amz-SignedHeaders=host" width="300" alt="Login Screen"/>

## 📋 My Listings
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501887-baff384f-c04b-427c-9b2c-007f83e7e3a9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T110854Z&X-Amz-Expires=300&X-Amz-Signature=313c30fabd2ea7ccc743f3c191ff963bdedb4bb69b14121a236a6b588e3bd48a&X-Amz-SignedHeaders=host" width="300" alt="My Listings Screen" />

## 💬 My Messages
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501885-9fdf4345-d1c7-491f-ba75-ab874ae6d509.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T111418Z&X-Amz-Expires=300&X-Amz-Signature=b1256b9c36b84c6861db8336a549926238fc5890b2ab071f53759fe4524a09eb&X-Amz-SignedHeaders=host" width="300" alt="My Messages Screen" />

## 🆕 Register
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501884-7aa4b8c4-b8dc-47e7-9ce8-0db6f706f04e.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T111645Z&X-Amz-Expires=300&X-Amz-Signature=82b8486b11afa42e696dc4fea309d9af5833902558cb42629265b2f1f57e461b&X-Amz-SignedHeaders=host" width="300" alt="Register Screen" />

## 📨 Send Message for listing
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467512196-90c98e23-6d22-4d6b-84fe-3ff4d59e5774.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T111802Z&X-Amz-Expires=300&X-Amz-Signature=6541cc307e2e8e62db59f6061d45d4db04bb0a07e9cc341a177f018c493eaa59&X-Amz-SignedHeaders=host" width="300" alt="Send Message for listing section" />

## 🖼️ View Image
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501881-b213dcd5-52ce-4aa0-83c3-fdd6c1f45d6a.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T111942Z&X-Amz-Expires=300&X-Amz-Signature=203755c4eb77152750c0c3da4689cbad57ed5c5e2157f808952eb037120cf654&X-Amz-SignedHeaders=host" width="300" alt="View Image Screen" />

## 👋 Welcome
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/169585835/467501879-8b43b1c2-2743-4c39-8e01-7cda7510f8da.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250717T112143Z&X-Amz-Expires=300&X-Amz-Signature=6f941923f0274b2aacfafada4f9f4637db032b393ddb59192c0a49df54d0cd39&X-Amz-SignedHeaders=host" width="300" alt="Welcome Screen" />
