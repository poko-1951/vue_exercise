const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js!",
    count: 99,
    user: {
      lastName: "Kurihara",
      firstName: "Go",
      prefecture: "Tokyo"
    },
    colors: ["red", "Green", "Blue"]
  }),
});
app.mount("#app");
