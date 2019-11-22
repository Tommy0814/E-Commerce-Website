<a href="http://cmpe172-aws.s3-website-us-west-1.amazonaws.com/">
    <img src="https://aimeos.org/fileadmin/template/icons/logo.png" alt="Aimeos logo" title="E-Commer-Website" align="right" height="60" />
</a>

Fullstack E-Commerce Website
======================
[![Total Downloads](https://poser.pugx.org/aimeos/aimeos-typo3/d/total.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/?branch=master)
[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)

:star: Star us on GitHub — it helps!

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

### Technologies Used:
1. React for Front End
2. AWS for the server, Lex AI Chatbot and website deployment
3. Firebase for the cloud firestore and realtime database

* What the application does?
    
    `Users can shop for clothes, shoes, and hats on this website, users can add items using the shopping carts, and make payments using their credit card, users can also access a smart chat bot for styles advice, a community feature is provided for users to chat with each other in different channels to enhance user experience`
    
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
    
    
    
    
    
    
    
    
## Pre-requisites Set Up

List of Resources to Configure in the Cloud Account:
* Firebase Configuration: 

    `
      const firebaseConfig = {
          apiKey: "AIzaSyDe8zI8WBNouStCsl-x68HGA9h0EzG2VMQ",
          authDomain: "e-commerce-website-99159.firebaseapp.com",
          databaseURL: "https://e-commerce-website-99159.firebaseio.com",
          projectId: "e-commerce-website-99159",
          storageBucket: "e-commerce-website-99159.appspot.com",
          messagingSenderId: "714761802326",
          appId: "1:714761802326:web:7e8329083fb37fed55e1f7",
          measurementId: "G-EHLKC1F2KQ"
    };
    `
    
* AWS:
    
    ` No need to configure AWS, website is already deployed on the website`
    
List of Required Software To Download Locally:
* NPM
* React v16.12.0
* Visual Studio Code (Suggested)
    
Local Configuration:
* Simply update NPM and React to the newest version
* There is no need to make extra configuration on Firebase and AWS in our project as both are already set up and read to use
    
    
    
## How to set up and run project locally?
1. On command line, cd to the folder you wish to store the application, clone the project from this GitHub repository

    `git clone https://github.com/Tommy0814/E-Commerce-Website.git`
    
2. Open the project in a code editor, such as Microsoft Visual Studio Code, then stay at the root folder of the project hierachy, run the server by using the following code:

    `npm install`
    
    then,
    
    `npm start`
    
    Now the backend server is ready
    
3. On the command line, type

    `cd client`
    
    at client folder, run the front end by typing
    
    `npm install`
    
    then,
    
    `npm start`
    
    Now the front end React app is running.
    
4. Now the website should automatically pop up on the browser.
    
    
    
    
    
    
    
## Addditional Information 
Technology List:
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
    * EC2
    * AI Chatbot
    * Deployment

    

[E-Commerce-Website](http://cmpe172-aws.s3-website-us-west-1.amazonaws.com/) is a professional, full-featured and
high performance e-commerce full-stack website!  You can install it in your
computer within 5 minutes and can adapt, extend, overwrite
and customize anything to your needs.

[![Aimeos TYPO3 demo](https://aimeos.org/fileadmin/user_upload/typo3-demo.jpg)](http://typo3.demo.aimeos.org/)

## Table of content

- [Installation](#installation)
    - [TER](#typo3-extension-repository)
    - [Composer](#composer)
- [TYPO3 setup](#typo3-setup)
    - [Extension](#extension)
    - [Database](#database)
- [Page setup](#page-setup)
    - [Upload the page tree file](#upload-the-page-tree-file)
    - [Go to the import view](#go-to-the-import-view)
    - [Import the uploaded page tree file](#import-the-uploaded-page-tree-file)
- [License](#license)
- [Links](#links)

## Installation

This document is for the latest Aimeos TYPO3 **18.10 release and later**.

- Stable release: 19.7 (TYPO3 7/8/9 LTS)
- LTS release: 18.10 (TYPO3 7/8/9 LTS)

### TYPO3 extension repository

If you want to install Aimeos into your existing TYPO3 installation, the [Aimeos extension from the TER](https://typo3.org/extensions/repository/view/aimeos) is recommended. You can download and install it directly from the Extension Manager of your TYPO3 instance.

For new TYPO3 installations, there's a 1-click [Aimeos distribution](https://typo3.org/extensions/repository/view/aimeos_dist) available too. Choose the Aimeos distribution from the list of available distributions in the Extension Manager and you will get a completely set up shop system including demo data for a quick start.

### Composer

The latest version can be installed via composer too. This is especially useful if you want to create new TYPO3 installations automatically or play with the latest code. You need to install the composer package first if it isn't already available:

`php -r "readfile('https://getcomposer.org/installer');" | php -- --filename=composer`

In order to tell install TYPO3, you have to execute

`composer create-project typo3/cms-base-distribution:~9.5 myshop`

This will install TYPO3 into the ''./myshop/'' directory. Afterwards, you have to edit the composer.json file and add the ''post-install-cmd'' and ''post-update-cmd'' scripts:

```
    "scripts": {
        "post-install-cmd": [
            "Aimeos\\Aimeos\\Custom\\Composer::install"
        ],
        "post-update-cmd": [
            "Aimeos\\Aimeos\\Custom\\Composer::install"
        ]
    }
```

Then, install the Aimeos extension for TYPO3 with:

`composer req aimeos/aimeos-typo3:~19.7`

This will install TYPO3 9.5 and the latest Aimeos TYPO3 extension. The Aimeos composer script will be executed automatically, which copies some required files and adds a link to the Aimeos extensions placed in the ./ext/ directory.

## TYPO3 setup

### Database setup

Starting with Aimeos 18.10 and TYPO3 9.5, it's possible to define the charset and collation for newly created MySQL tables. In case you want to use a NoSQL data store like ElasticSearch for Aimeos products, you need to use a binary collation `utf8mb4_bin` in your `typo3conf/LocalConfiguration.php` file **before** the tables are created:

```
'DB' => [
    'Connections' => [
        'Default' => [
            'tableoptions' => [
                'charset' => 'utf8mb4',
                'collate' => 'utf8mb4_bin',
            ],
            // ...
        ],
    ],
],
```

**Caution:** If you use MySQL < 5.7, you have to use `utf8` and `utf8_bin` instead because those MySQL versions can't handle the long indexes created by `utf8mb4` (up to four bytes per character) and you will get errors like `1071 Specified key was too long; max key length is 767 bytes`:

```
'DB' => [
    'Connections' => [
        'Default' => [
            'tableoptions' => [
                'charset' => 'utf8',
                'collate' => 'utf8_bin',
            ],
            // ...
        ],
    ],
],
```

### Extension

* Log into the TYPO3 back end
* Click on ''Admin Tools::Extension Manager'' in the left navigation
* Click the icon with the little plus sign left from the Aimeos list entry (looks like a lego brick)

**Caution:** Install the **RealURL extension before the Aimeos extension** to get nice looking URLs. Otherwise, RealURL doesn't rewrite the parameters even if you install RealURL afterwards!

![Install Aimeos TYPO3 extension](https://aimeos.org/docs/images/Aimeos-typo3-extmngr-install.png)

### Database

Afterwards, you have to execute the update script of the extension to create the required database structure:

![Execute update script](https://aimeos.org/docs/images/Aimeos-typo3-extmngr-update-7.x.png)

## Page setup

The page setup for an Aimeos web shop is easy if you import the [standard page tree for TYPO3 8.7/9.5](https://aimeos.org/docs/TYPO3/Install_Aimeos/Setup_pages#Download) into your TYPO3 installation.

### Go to the import view

* In Web::Page, root page (the one with the globe)
* Right click on the globe
* Move the cursor to "Branch actions"
* In the sub-menu, click on "Import from .t3d"

![Go to the import view](https://aimeos.org/docs/images/Aimeos-typo3-pages-menu.png)

### Upload the page tree file

* In the page import dialog
* Select the "Upload" tab (2nd one)
* Click on the "Select" dialog
* Choose the file you've downloaded
* Press the "Upload files" button

![Upload the page tree file](https://aimeos.org/docs/images/Aimeos-typo3-pages-upload.png)

### Import the uploaded page tree file

* In Import / Export view
* Select the uploaded file from the drop-down menu
* Click on the "Preview" button
* The pages that will be imported are shown below
* Click on the "Import" button that has appeared
* Confirm to import the pages

![Import the uploaded page tree file](https://aimeos.org/docs/images/Aimeos-typo3-pages-import.png)

Now you have a new page "Shop" in your page tree including all required sub-pages.

## License

The Aimeos TYPO3 extension is licensed under the terms of the GPL Open Source
license and is available for free.

## Links

* [Web site](https://aimeos.org/integrations/typo3-shop-extension/)
* [Documentation](https://aimeos.org/docs/TYPO3)
* [Forum](https://aimeos.org/help/typo3-extension-f16/)
* [Issue tracker](https://github.com/aimeos/aimeos-typo3/issues)
* [Source code](https://github.com/aimeos/aimeos-typo3)
