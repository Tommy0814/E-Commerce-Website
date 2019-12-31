<a href="http://cmpe172-aws.s3-website-us-west-1.amazonaws.com/">
    <title="E-Commer-Website" align="right" height="60" />
</a>

Fullstack E-Commerce Website
======================

* University Name: [San Jose State University](http://www.sjsu.edu/)
* Course Name: [CMPE 172](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE172.html)
* Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)
* Students: 
    * [Tommy Xu](https://www.linkedin.com/in/tommy-jing-xu/)
    * [Marco Alvarez](https://www.linkedin.com/in/marcoalvarezmynd/)
    * [Kyuhak Yuk](https://www.linkedin.com/in/kyuhak-yuk-20496a15b/)
    * [Devanshi Sukhadia](https://www.linkedin.com/in/devanshisukhadia/)
    * [Alejandro Lopez](https://www.linkedin.com/in/alejandro-lopez-36a6b214a/)
    
## Project Introduction: 
* [E-Commerce-Website](http://cmpe172-aws.s3-website-us-west-1.amazonaws.com/) is a professional, full-featured and
high performance e-commerce full-stack website!  You can install it in your
computer within 5 minutes and can adapt, extend, overwrite
and customize anything to your needs.

### Video Demo
https://youtu.be/M2xM0VQ9t8Q

### Technologies Used:
1. React for Front End
2. AWS for the server, Lex AI Chatbot and website deployment
3. Firebase for the cloud firestore and realtime database

* What the application does?
    
    `Users can shop for clothes related to all 50 states of USA, hats, and shoes on this website, users can add items using the shopping carts, and make payments using their credit card, users can also access a smart chat bot for styles advice, a community feature is provided for users to chat with each other in different channels to enhance user experience`
    
* Feature List:
    * Email/Password Registration and logout
    * Google SignIn Authentication
    * User Information Page
    * Shopping features allow users to shop by categories, such as clothes types and gender
    * Each category has a individual page and sorting feature to show users the corresponding items accordingly
    * Shopping page organizes items into categories to offer users a better view over all items
    * Clear frontend structure on the main page to make it easy for users to navigate through all categories
    * Multiple tabs on the top bar for users to switch to each features easily
    * Hover function over all items offers easy view for users to add items to the shopping cart
    * Shopping cart features shows the added items instantly when users add items, it also has an individual page which offers change amount feature to allow users to add and reduce the amount of each item or even delete items at ease
    * Shopping cart icon on the top right corner shows how many items are in the cart real time
    * Payment features made with Stripe allows users to make credit card payments
    * Artificial Intelligence Chatbot is easily accessible throughout sites, customers can ask questions and get corresponding suggestions from the Chatbot
    * Community features provided for users to easily access customer service via real-time chat
    * Community features allow customers to create or join channels based on the topics of each channel to enhance interactions among customers and make the services more sticky and addictive
    * Direct messages in community feature makes it easy for customers to chat privately with other customers
    * Channel creation feature in community site makes it possible for users to learn fashion trends and much more from other customers
    * Users can change their avatar in community feature by simply uploading images for more customization
    * Users can send emojis, text messages and images or other medias in chat in th ecommunity site
    * Sending and receiving messages instantly with the real-time Firebase Database
    * Uploading and displaying image messages using Firebase Storage
    * Notifications to display new messages in other channels
    * Sending Direct Messages to other users in our chat
    * Tracking / showing when users are online / offline
    * Searching messages within created channels
    * Custom animations to see when other users are typing in the same channel
    * Creating, cropping and uploading user avatars
    * The ability to favorite / unfavorite public channels
    * Add emojis to our messages with an Emoji Picker component
    * State management with Redux, with simple, straightforward patterns
    * Creating stunning user interfaces with Semantic UI React
    * Essential features of React Router 4 (Switch component, withRouter HOC, history object)
    * Tons of work with ES6 / 7
    * Helpful browser tools such as React / Redux Dev Tools
    * Securing our application with Firebase Rules
    * Deploying our chat app to the web using Firebase ToolsKeyboard shortcuts to rapidly send messages
    * And more!
    
## Sample Demo Screenshots

![Home Page](client/src/assets/Homepage.PNG?raw=true "Title")

![AI Chat Bot](client/src/assets/AIChatBot.PNG?raw=true "Title")

![SignUp and SignIn](client/src/assets/SignUpSignIn.PNG?raw=true "Title")

![Category Example](client/src/assets/CategoryExample.PNG?raw=true "Title")

![Shopping Cart](client/src/assets/ShoppingCart.PNG?raw=true "Title")

![Credit Card Payment](client/src/assets/CreditCardPayment.PNG?raw=true "Title")

![Shopping Cart Page](client/src/assets/ShoppingCartPage.PNG?raw=true "Title")

![Community Panel](client/src/assets/Community.PNG?raw=true "Title")



    
    
    
    
    
    
    
## Pre-requisites Set Up

List of Resources to Configure in the Cloud Account:
* Firebase Configuration: 

    `
      const firebaseConfig = {
          apiKey: "",
          authDomain: "",
          databaseURL: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: "",
          measurementId: ""
    };
    `
    
* AWS:
    
    ` No need to configure AWS, website is already deployed on AWS`
    
List of Required Software To Download Locally:
* NPM
* React v16.12.0
* Visual Studio Code (Suggested)
    
Local Configuration:
* Simply update NPM and React to the newest version
* There is no need to make extra configuration on Firebase and AWS in our project as both are already set up and read to use
    
    
    
## How to set up and run project locally?
For Windows or Mac:
1. On command line, cd to the folder you wish to store the application, clone the project from this GitHub repository

    ```
    git clone https://github.com/Tommy0814/E-Commerce-Website.git
    ```
    
2. Open the project in a code editor, such as Microsoft Visual Studio Code, then stay at the root folder of the project hierachy, run the server by using the following code:

    ```
    npm install
    ```
    
    then,
    
    ```
    npm start
    ```

    
    Now the backend server is ready
    
3. On the command line, go to client folder by typing

    ```
    cd client
    ```
    
    at client folder, run the front end by typing
    
    ```
    npm install
    ```
    
    then,
    
    ```
    npm start
    ```
    
    Now the front end React app is running.
    
4. Now the website should automatically pop up on the browser.
    
    
    
    
    
    
    
## Addditional Information 
#### [GitHub Link to the Community Feature](https://github.com/Tommy0814/Real-Time-Chat-Community.git)
#### Technology List:
1. React Framework v16.12.0
2. Google Firebase for Realtime Database and Cloud Firestore
    * Firebase Refresher
3. User Authentication via both Email and Google Account
    * Email/Password Registration
    * Google Signin Authentication
4. React Router and Routing
    * Routing for Each Page
    * Nested Routing in Shop Page
     * Collection Routing and Selector
    * Currying
5. User Information Storage
6. Redux 
    * Redux Actions and Reducers
    * Directory State Into Redux
    * Collection State Into Redux
    * Collection Overview Component
    * Asyncronous Redux
    * Observables
    * Promise Pattern
    * Redux Thunk
    * Redux Saga
    * Root Saga
7. User Redirect and User Action Type
8. Shopping Cart:
    * Card Dropdown Component
    * Card Item Reducer and Adder
    * Add Multiple Items To Cart 
    * Cart Item Memorization
    * Cart CSS Styles
    * Items Being Shown Real Time
9. Selectors in Redux
10. Reselect Library
11. Checkout Page
    * Checkout Items
    * Remove Items At Checkout
12. Local Storage and Session Storage
    * Website Cache
    * Redux Persist
13. State Normalization
14. Stripe Payment
15. WithSpinner HOC
16. Container Pattern
17. React Hooks
    * Hook Rules
    * Custom Hooks
18. Backend
    * Stripe
    * Build a Basic Server
    * Backend Payment Route
    * Connect Client To Server
19. Context API
    * Context Provider
    * Cart Context
20. Mobile Responsiveness
21. React Performance
    * Code Splitting
    * React Lazy
    * Suspense
    * Memo
    * Gzipping and Compression
22. AWS (Amazon Website Service)
    * Lex AI Chatbot
    * Deployment
23. Kommunicate
    * AWS Lex AI Chatbot Integration



