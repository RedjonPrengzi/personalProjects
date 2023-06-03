app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  // Define the template for the component
  template: 
    /*html*/
    `<div class="product-display">
    <!-- Product container -->
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <!-- Display stock availability -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <!-- Display color variants -->
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <!-- Add to Cart button -->
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  
  // Define the data properties of the component
  data() {
    return {
      product: 'Console',
      brand: 'AI Generated',
      selectedVariant: 0,
      details: ['128 GB', 'Cloud storage', 'Free subscription'],
      variants: [
        { id: 1001, color: 'black', image: './assets/images/playstation_4_black.jpg', quantity: 50 },
        { id: 1002, color: 'blue', image: './assets/images/playstation_4_blue.jpg', quantity: 0 },
        { id: 1003, color: 'white', image: './assets/images/playstation_4_white.jpg', quantity: 8 }
      ],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
})