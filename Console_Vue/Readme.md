# Console Store

This is a simple product page for a console store. The project is built using VueJS.
The purpose of the project was to practice building components in VueJS.

## Features

- Display product information, including title, stock availability, details, and variants.
- Add products to the cart.
- Show a list of product reviews.
- Submit new reviews for the product.

## Project Structure

The project follows a simple file structure:

- `index.html`: The main HTML file that serves as the entry point of the application.
- `main.js`: The JavaScript file that initializes the Vue.js app and defines the main data and methods.
- `assets/`: A folder that contains the project's assets, such as images and stylesheets.
- `assets/styles.css`: The CSS file that contains styles for the application.
- `components/ProductDisplay.js`: A Vue component that represents the product display section.
- `components/ReviewForm.js`: A Vue component that represents the review submission form.
- `components/ReviewList.js`: A Vue component that represents the list of product reviews.


## Vue concepts used

List of Vue.js concepts used in the project:

Vue Component: 
The project uses Vue.js components to encapsulate and manage the functionality and UI of different parts of the application. 
Components are defined using the app.component method and registered with Vue using app.mount.

Vue Directives:
v-bind: The v-bind directive is used to bind the src attribute of the img element to dynamically update the product image based on the selected variant.
v-for: The v-for directive is used to loop through the variants array and render the color circles for each variant and the details of the product.
v-if and v-else: These directives are used to conditionally render the "In Stock" or "Out of Stock" message based on the availability of the selected variant.
v-on and @: The v-on directive and its shorthand @ are used to bind event listeners to elements. In this project, they are used to trigger the addToCart and updateVariant methods on button click and mouseover events, respectively.

Interpolation: Double curly braces {{ }} are used for data interpolation to display dynamic content, such as the product title and shipping information.
Event Handling: The v-on directive (or @) is used to bind methods to events, such as the button click event for adding items to the cart.
Vue Props: The project uses props to pass data from the parent component (index.html) to the child components (product-display and review-list). Props are defined in the component options and allow for communication between components.

Vue Reactive Data: The data option in Vue components is used to define reactive data properties. In this project, cart and premium are reactive properties that can trigger re-rendering of the UI when their values change.

Vue Event Handling: The project utilizes custom events to communicate between components. The addToCart method emits the add-to-cart event, which is then captured by the parent component (index.html) and triggers the updateCart method.


## Dependencies

The project has the following dependencies:

- Vue.js: The Vue.js library is loaded from the following CDN: `https://unpkg.com/vue@3.0.11/dist/vue.global.js`. No additional installation is required.

## Acknowledgements

The project was developed based on the guidance and examples provided by the Vue.js documentation and community.
The idea for the project was taken from an online tutorial.
The images were generated using a free text-to-image AI.