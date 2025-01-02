# NextSteps Digital Website

## Overview
The website is hosted at [https://testing.nextstepsdigital.online](https://testing.nextstepsdigital.online). It serves as a platform to showcase the services offered by NextSteps Digital and is optimised for small businesses looking to establish their online presence.

This repository now includes separate directories for the frontend and backend:
- **Frontend**: Contains the static website built using Hugo.
- **Backend**: Contains the Firebase Functions for handling dynamic operations such as form submissions and email notifications.

## Development Environment

This repository includes a `devcontainer.json` file, which allows developers to set up a development container with the correct versions of:
- Hugo
- NPM
- Yarn

Using the development container ensures consistency across environments and simplifies the development process.

### Frontend Commands

- **Navigate to the Frontend Directory**:
  ```bash
  cd frontend
  ```

- **Install dependencies**:
  ```bash
  yarn
  ```

- **Start the development server**:
  ```bash
  yarn start
  ```
  Runs the development server on [localhost:1313](http://localhost:1313).

- **Build the static website**:
  ```bash
  yarn build
  ```
  Compiles the website into static files in the `/public` directory.

### Backend Commands

- **Navigate to the Backend Directory**:
  ```bash
  cd backend
  ```

- **Install dependencies**:
  ```bash
  yarn
  ```

- **Deploy Firebase Functions**:
  ```bash
  firebase deploy --only functions
  ```
  Deploys the backend functions to handle dynamic operations.

- **Test Locally**:
  ```bash
  firebase emulators:start
  ```
  Starts the Firebase Emulator Suite to test functions locally.

## Credits
This project is built using:

### Frontend
- [Hugo](https://gohugo.io/) for static site generation.
- [TailwindCSS](https://tailwindcss.com/) for styling.

### Backend
- [Firebase Functions](https://firebase.google.com/docs/functions) for serverless backend operations.
- [Nodemailer](https://nodemailer.com/) for email handling.

### Additional Contributors
- 4044ever - Original Theme ([GitHub Repository](https://github.com/4044ever/Hugo-Tailwind-3.0.git))
- Jan Heise - Alpine.js Navbar ([GitHub Repository](https://github.com/jan-heise/responsive-navbar-with-dropdown))
- Nusser Studio - Blog Structure ([GitHub Repository](https://github.com/nusserstudios/tailbliss))

---
Made with ❤️ by the NextSteps Digital team.
