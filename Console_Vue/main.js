const app = Vue.createApp({
    // Define the data properties
    data() {
      return {
        cart: [],         // Holds the items added to the cart
        premium: true     // Indicates whether the user is a premium member
      };
    },
    methods: {
      updateCart(id) {
        this.cart.push(id);
      }
    }
  });
  