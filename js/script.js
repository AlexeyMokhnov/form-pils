var input = document.querySelector("#phone");
window.intlTelInput(input, {
  preferredCountries: ["ru", "kz"],
  // any initialisation options go here
  utilsScript: "js/utils.js",
});
