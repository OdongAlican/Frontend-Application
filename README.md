# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
## Instructions
Please stick to the following instructions on how to submit your application:
1. Read the **whole** README
2. Fork our repository
3. Add your solution **with all requirements** to your repository
4. Create a pull request to our repository

Additional Information to submit a successful application:
- You have to create a pull request with your solution to **this** repository
- Only an application with all requirements can be considered
- Copied structures or code from other pull requests will be completely ignored

Also note down in the end how many hours it took to complete (roughly). **Please do not spend much more than 6 hours for the whole task.** This is not a hard limitation but want to respect your time since we cannot hire every applicant.

Thank you very much!

## Main Task
Your task is to create a new dashboard with which you will be displaying and editing product information.

First you have to setup the main dashboard with the main structure:
- Header with [Innoloft Logo](https://img.innoloft.de/logo.svg)
- Navigation
  - Main Page
  - Product

This structure will be the same on all pages.

It's not required that the main page has any content. **But it should be the default page on the root path `/`.**

### Product Page (`/product`)
- Product image
- Product main info should contain
  - title
  - type
- 2 tab buttons to switch/change the tab content
  - Description
  - Attributes
- Description tab should contain product description
- Attributes tab should contain:
  - categories (name only)
  - business models (name only)
  - [TRL](https://en.wikipedia.org/wiki/Technology_readiness_level)
- User info should contain:
  - user image
  - user name
  - user company name
- Map should display company address of the product

### Editing Product
It should be possible to edit the attributes of the product as well as add new once. The categories and business-models should be editable with a simple text input and the TRL with a dropdown.  
For editing follow WYSIWYG methodology. When saving the product a PUT request has to be made to the API. Please keep in mind that the API itself **will not save your request**.
### Example Mockup
![mockup](mockup.jpg)

## White-Labeling
In this step you will have to apply different configurations to the dashboard. Here you will have to add environment variables (f.e. with a `.env` file). Depending on the `APP_ID` environment variable. If **no** `.env` file is given, make sure to add a fallback to `APP_ID=1`.
A configuration will look like that:
```json
{
    "id": 1,
    "logo": "img.innoloft.de/logo.svg",
    "mainColor": "#272e71",
    "hasUserSection": true
}
```
With the api call `/configuration/:appId/` you get the configuration for your `APP_ID`. Possible appIds are `1` and `2`.
* In case `hasUserSection: false` - hide the user info section on the right.
* Apply main color to header and other elements to your taste

## API
In the task you will need to fetch some data from an API. The API base url is `https://api-test.innoloft.com`.  
Please use **exactly** these endpoints:
- Product
  - GET `/product/6781/`
  - PUT `/product/6781/`
- TRL List
  - GET `/trl/`
- APP Configuration
  - GET `/configuration/:appId/`

You can also download the [Postman collections](https://api-test.innoloft.com/postman_collection.json).

## Technical Requirements

The application should at the very least use the following:

- React.js framework
- Redux
- CSS
  - Your own CSS structure
  - **Do not** use any CSS frameworks (f.e. Bootstrap)
  - A CSS pre-compiler (SASS, LESS, SCSS) or other CSS approaches (CSS modules, Styled components)
- The dashboard should be responsive. It should **be usable on mobile and tablets**. There are no mockups for mobile and table views, adapt it to your taste.
- (Optional) Linter
- (Optional) Prettier

When styling, you can decide for yourself what this dashboard should look like (even the structure-wise), make it look as nice as you can.
