const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js!",
    // count: 99,
    // user: {
    //   lastName: "Kurihara",
    //   firstName: "Go",
    //   prefecture: "Tokyo",
    // },
    // colors: ["Red", "Green", "Blue"]
    // toggle: true
    // now: "-"
  }),
  // methods: {
  //   onClick: function() {
  //     // console.log("onClick")
  //     this.now = new Date().toLocaleString()
  //     console.log(this)
  //   }
  // }
});
app.mount("#app");
