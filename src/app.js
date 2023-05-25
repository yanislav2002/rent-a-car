import { start, homePage, loginPage, registerPage, carCatalogPage } from "./navigation.js";
import { carCatalog, homeCars } from "./car-catalog.js";
import { login, register, logout } from "./login.js";
import { footer } from "./footer.js";


start();

homePage();
loginPage();
registerPage();
carCatalogPage();
carCatalog();
homeCars();

footer();

login();
register();
logout();
