# Carfaxt
`An ecommerce web application for a fashion accessories store using React for the user interface components, Tailwind CSS for styling of the components and the Redux Toolkit for state management.

Payments are processed with Stripe and successful payments are saved to the database attached with details of the order made which the admin has the ability to update the order delivery status from the Admin dashboard which also has features such as the ability to add ,delete and update new or existing products. 

The images for the products are uploaded to Firebase's storage and the URL address saved to the database, this greatly improves the response time of the web application and relieves the database the burden of handling the image uploads. 

The user has a user panel from were they can track the shipping status of their orders, update their account details and manage the items in their Wishlist and Cart.

For the icons, the Material UI library icons were used as they have a low build size, the slides on the reviews section were made with the Swiper Js library and the validation of forms are done with the aid of the react-hook-form library.

The backend is handled using the Node.js runtime environment with Express as the server and MongoDB for the database management. The token for the logged in users is created and signed using JsonWebToken and the passwords are hashed with the Advanced Encryption Standard provided by the CryptoJs library.`
## Demo

`The link to the live website:`

https://maplestore.netlify.app
## Tech Stack

**Client:** React, Redux Toolkit, Tailwind CSS, Stripe, Firebase Storage

**Server:** Node, Express, Mongo


## Features

- Stripe payment processed
- State management with the Redux Toolkit
- Tailwind CSS
- React Frontend
- Authentication using JWT
- Admin & User Login System
- Images upload to the firebase cloud storage
- Node.js Backend




## Installation

Make sure you have Node.js installed and then proceed to execute this command in the terminal

```bash
  npm i
```
    
## Environment Variables

Create an account on mongodb.com and create a new cluster, then set the env value of:

```javascript
CONNECTION_URL = to the name of yout atlas database

```

For management of the sessions, set an env variable

```javascript
AUTH_SECRET = any_secret_key_of_your_choice

```


## Usage/Examples

`An ecommerce solution using stripe for payment processing`
## Screenshots
`The Hero Section`

![header](https://user-images.githubusercontent.com/84836053/178365204-7e5da2d4-22a5-46df-bb72-2a7638bf5f9e.png)

`The About Section`
![mapleStoreabout](https://user-images.githubusercontent.com/84836053/178365267-93834b9e-8c94-4395-82d3-defea33eb682.png)


`The Product Section`

![products](https://user-images.githubusercontent.com/84836053/178365322-e8174165-0ea5-4756-a5a0-b460969c7d05.png)

`The Login Page`

![login](https://user-images.githubusercontent.com/84836053/178365409-0f473c3b-92f4-411d-a563-bddc2a82fa20.png)

`Reviews section`

![reviews](https://user-images.githubusercontent.com/84836053/178365476-714a85ab-2ab4-4bd6-b6f9-28c8fe7425f6.png)

## Contributing

Contributions are highly appreciated!

`Kindly send a pull request and I will review them with immediate effect`

