import "../css/styles.css";

import 'alpinejs'

import $ from "jquery";
import Home from "./modules/home";


// setup for AlpineJs
// import navigationBar from "./components/NavigationBar";
//window.navigationBar = navigationBar;


export default class Main {
  constructor() {
    // classMapping associates js Class to string value from data-js-module attribute on Html element(s)
    this.classMapping = {
      home: Home,
    };
  }

  // Run all initialization things
  init() {
    this.createModules();
    Main.setupPage();
  }

  createModules() {
    $("[data-js-module]").each((index, element) => {
      let modules = $(element).attr("data-js-module");
      modules = modules.trim().split(" ");

      // For any modules found on the page ...
      modules.forEach(m => {
        try {
          // Instantiate their associated class
          const mod = new this.classMapping[m](element);
        } catch (err) {
          // console.log(err);
        }
      });
    });
  }

  static setupPage() {}
}

const main = new Main();
main.init();
