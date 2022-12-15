# Subscriber - manage your subscriptions, never get accidentally billed!

Welcome to Subscriber, my person project and the app that makes it easy to organize your active subscriptions and free trials. 

## Screenshots

![2022-12-15 (5)](https://user-images.githubusercontent.com/110689119/207923745-fc6c8b10-d3ea-44f8-87dd-e44f86eefced.png)
![2022-12-15](https://user-images.githubusercontent.com/110689119/207923783-f991e674-514b-4c21-bb55-ee4ae96813c7.png)
![2022-12-15 (4)](https://user-images.githubusercontent.com/110689119/207923860-735a5df7-965e-4f0e-953d-b98af2e0d13f.png)
![2022-12-15 (3)](https://user-images.githubusercontent.com/110689119/207923877-a8d66dea-6857-41ef-90c4-33d30284c5a6.png)

## Features

- Create subscriptions
- Set reminders
- Never forget about an upcoming bill, or to cancel your free trials
- View all you active subscriptions in one place
- Easily see your monthly expenses on subscription services

## Development

If you want to contribute to the development of Subscriber, follow these steps:

1. Clone the Subscriber repository from GitHub:

```console
$ git clone https://github.com/daniellestroscher/Subscriber
```

2. Navigate to the client folder of the repository and install the dependencies:

```console
$ cd client
$ npm i
```
3. Navigate to the server folder of the repository and install the dependencies:

```console
$ cd server
$ npm i
```

4. Create a file called `.env` in the client folder and add the following environment variables:

```js
//These are accessable through your Firebase account, just add a new project!
REACT_APP_FIREBASE_API_KEY= 
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_SENDER_ID= 
REACT_APP_FIREBASE_APP_ID= 
REACT_APP_FIREBASE_MEASUREMENT_ID=

//from firebase messaging service
REACT_APP_FIREBASE_PUBLIC_VAPID_KEY = "BGomVEgCEhWp9DkGYkpkZarG-P6_xehQ2jLxe_5B1ip5xkMPgtszQRwPAiDUIBbO_NxC5_YpT5d8N7k2LogI1o8"

//your base URL
REACT_APP_BASE_URL = "http://localhost:<choose_port>"

//from your cloudinary account
REACT_APP_CLOUDINARY_PRESET=
REACT_APP_CLOUDINARY_CLOUD_NAME=
REACT_APP_CLOUDINARY_URL=
```
4. Create a file called `.env` in the server folder and add the following environment variables:

```js
HOST= 'localhost'
PORT= <choose_port>
MONGO_URI= <mongo_database_URI>
//from firebase
GOOGLE_APPLICATION_CREDENTIALS = <path_to_your_google_credentials_.json_file>
```

5. Run the app:

```console
$ cd client 
$ npm start
```
```console
$ cd server 
$ npm start
```

Thanks for your interest in Subscriber!

