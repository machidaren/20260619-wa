Vue.createApp({
  data() {
    return {
      className: "blue"
    };
  },

  methods: {
    changeClass() {
      this.className = "red";
    }
  }
}).mount("#app");