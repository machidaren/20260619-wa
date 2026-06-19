Vue.createApp({
  data() {
    return {
      imageUrl: "dog.jpg"
    };
  },

  methods: {
    changeImage() {
      this.imageUrl = "cat.jpg";
    }
  }
}).mount("#app");