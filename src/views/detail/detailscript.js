export default {
  data() {
    return {
      product: {
        title: "Basic Hooded Sweatshirt in Pink",
        salePrice: 15.5,
        originalPrice: 31.0,
        color: "Pink",
        sizes: ["S", "M", "L", "XL"],
        deliveryOptions: [
          { type: "Standard delivery", time: "1-4 business days", cost: 4.5 },
          { type: "Express delivery", time: "1 business day", cost: 10.0 },
          { type: "Pick up in store", time: "1-3 business days", cost: 0.0 },
        ],
      },
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300/aaa",
        "https://via.placeholder.com/300/bbb",
      ],
      selectedImage: "https://via.placeholder.com/300",
      selectedSize: "",
      quantity: 1,
    };
  },
  computed: {
    discount() {
      return Math.round(
        ((this.product.originalPrice - this.product.salePrice) /
          this.product.originalPrice) *
          100
      );
    },
  },
  methods: {
    addToCart() {
      if (!this.selectedSize) {
        alert("Please select a size");
        return;
      }
      alert(`Added ${this.quantity} item(s) to cart`);
    },
  },

};
