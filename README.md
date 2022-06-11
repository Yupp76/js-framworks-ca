# js-framworks-ca

![image](https://imgur.com/mIDz9c9.jpg)

A Next JS app that uses JWT tokens provided by a Strapi API to enable login functionality.

## Description

This app needs a Strapi API for JWT tokens login functionality, it also uses Next JS pre-built api route to retrieve data and render it on the frontend.

Rest API data can be edited by changing the constants.js file on the root directory.

## Built With

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [Formik](https://formik.org/)
- [Bootstrap](https://getbootstrap.com)

## Getting Started

First you will need a local or public Strapi instalation to use the JWT for auth feature, once you have one make sure to change the strapiAuth.js found in the lib/ directory

```js
  const { data } = await axios.post(
    "Your Strapi instalations..." + "/api/auth/local",
    authData
  );
```

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Yupp76/js-framworks-ca.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run dev
```

## Contact

[My LinkedIn page](https://no.linkedin.com/in/jim-ree)

