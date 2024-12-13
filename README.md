# Favorite GitHub

**A simple React application to track your favorite GitHub repositories and check the issues.**

This project lets you keep track of a list of your favorite GitHub repositories. You can add repositories to your preferred GitHub list by typing (<github>/<repository>) in the search area. Once added, you can browse all filtered, closed, or open issues. IIt's a great way tto you to stay updated with repositories you're interested in quickly!

---

## Features

- **Search Repositories**: A search area allows you to quickly find the GitHub repository.
- **Add Repositories**: Add repositories to your favorites list.
- **View Issues**: The app displays all, open and closed issues for each repository.
- **Responsive Design**: The app is responsive and adapts to different screen sizes.

---

## Screenshots

![App working](./public/favorite-github1.gif)

---

## Getting Started

To set up a local copy of the project, follow these simple steps:

### Prerequisites

- Must have been installed Node.js and npm. You can download Node.js [here](https://nodejs.org/).

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/jefferson206/favorite-github.git
    ```

2. Move to the project directory:

    ```bash
    cd favorite-github
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the app:

    ```bash
    npm start
    ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

---

## Available Scripts

In the project directory, run:

### `npm start`

Runs the app in development mode.\
Open in your browser [http://localhost:3000](http://localhost:3000).

When you make changes, the page will automatically reload.\
You may also encounter lint errors in your console.

### `npm run build`

Builds the app for production in the 'build' folder.\
It appropriately bundles React in production mode and optimizes the build for peak performance.

---

## Technologies Used

- **React**: To create the user interface.
- **GitHub API**: Retrieve data for repositories and problems.
- **Styled-component**: Use this component to style the application.
- **Axios**: For sending HTTP requests.
- **Translation-app**: App developed by me to create all translations JSON. You can check this project [here](https://github.com/jefferson206/json-translations) 

---

## Contributing

If you want to contribute to this project, please take the following steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## Acknowledgements

- [GitHub API](https://docs.github.com/en/rest): Provides data on repositories and issues.
- [Create React App](https://github.com/facebook/create-react-app) - For starting the project.
