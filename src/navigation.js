import { carDetails, removeAllChildNodes } from "./car-catalog.js";
import { submit } from "./rent-now.js";


console.log('working...');

const homeSection = document.getElementById('home-section');
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');
const carContainerSection = document.getElementById('car-container');
const carDetailsSection = document.getElementById('car-details-container');
const logoutBtn = document.getElementById('logoutBtn');
const rentContainer = document.getElementById('rent')

loginSection.style.display = 'none';
registerSection.style.display = 'none';
carContainerSection.style.display = 'none';
carDetailsSection.style.display = 'none';
homeSection.style.display = 'block';
logoutBtn.style.display = 'none';
rentContainer.style.display = 'none';

export function start() {

  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('register-email').value = '';
  document.getElementById('register-password').value = '';
  document.getElementById('repeat-password').value = '';
  document.getElementById('start-date').value = '';
  document.getElementById('end-date').value = '';
  removeAllChildNodes(document.getElementById('finalText'));
}

export function homePage() {
  document.getElementById('logo').addEventListener('click', (event) => {
    event.preventDefault();

    loginSection.style.display = 'none';
    registerSection.style.display = 'none';
    carContainerSection.style.display = 'none';
    carDetailsSection.style.display = 'none';
    homeSection.style.display = 'block';
    rentContainer.style.display = 'none';
    start();
  });
}

export function loginPage() {
  document.getElementById('loginBtn').addEventListener('click', (event) => {
    event.preventDefault();

    homeSection.style.display = 'none';
    registerSection.style.display = 'none';
    carContainerSection.style.display = 'none';
    carDetailsSection.style.display = 'none';
    loginSection.style.display = 'block';
    rentContainer.style.display = 'none';
    start();
  });
}

export function registerPage() {
  document.getElementById('registerBtn').addEventListener('click', (event) => {
    event.preventDefault();

    loginSection.style.display = 'none';
    carContainerSection.style.display = 'none';
    carDetailsSection.style.display = 'none';
    homeSection.style.display = 'none';
    registerSection.style.display = 'block';
    rentContainer.style.display = 'none';
    start();
  });
}


export const vehicleArray = [];

export function carCatalogPage() {
  document.getElementById('carBtn').addEventListener('click', (event) => {
    event.preventDefault();

    loginSection.style.display = 'none';
    carDetailsSection.style.display = 'none';
    homeSection.style.display = 'none';
    registerSection.style.display = 'none';
    carContainerSection.style.display = 'flex';
    rentContainer.style.display = 'none';


    const vehicles = document.querySelectorAll('.car');
    for (const vehicle of vehicles) {
      vehicleArray.push(vehicle);
    }
    carDetails(vehicleArray);
    start();
  });
}

export function rentPage(car, price) {
  document.getElementById('rentBtn').addEventListener('click', (event) => {
    event.preventDefault();

    loginSection.style.display = 'none';
    carDetailsSection.style.display = 'none';
    homeSection.style.display = 'none';
    registerSection.style.display = 'none';
    carContainerSection.style.display = 'none';
    rentContainer.style.display = 'block';
    submit(car, price);
    start();
  });
}

export { homeSection, loginSection, logoutBtn, registerSection, carContainerSection, carDetailsSection, };






