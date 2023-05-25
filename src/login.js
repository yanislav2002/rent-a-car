import { carContainerSection, carDetailsSection, homePage } from './navigation.js';
import { homeSection, loginSection, logoutBtn, registerSection } from '/src/navigation.js';


const loginContainerBtn = document.getElementById('loginContainerBtn');
const registerContainerBtn = document.getElementById('registerContainerBtn');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

const users = {
    'user@gmail.com': '1234',
    'admin@abv.bg': '1234'
};

export let isLoggedIn = false;

export function login() {
    loginContainerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const emailText = document.getElementById('email').value;
        const passText = document.getElementById('password').value;

        for (const user in users) {
            if (emailText == '' || passText == '') {
                alert('Всички полета трябва да бъдат запълнени!');
                break;
            }
            if (emailText == user && passText == users[user]) {
                loginSection.style.display = 'none';
                loginBtn.style.display = 'none';
                registerBtn.style.display = 'none';
                logoutBtn.style.display = 'flex';
                homeSection.style.display = 'block';

                isLoggedIn = true;
                break;
            }
        }
        if (!isLoggedIn && !(emailText == '' || passText == '')) {
            alert('Грешно потребителско име или парола!');
        }
        homePage();
    });
}


export function register() {
    registerContainerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const registerText = document.getElementById('register-email').value;
        const registerPassText = document.getElementById('register-password').value;
        const registerRepassText = document.getElementById('repeat-password').value;

        if (registerText == '' || registerPassText == '' || registerRepassText == '') {
            alert('Всички полета трябва да бъдат запълнени!');
        } else if (registerPassText != registerRepassText) {
            alert('Паролите трябва да бъдат еднакви!');
        } else {
            users[registerText] = registerPassText;
            registerSection.style.display = 'none';
            registerBtn.style.display = 'none';
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            homeSection.style.display = 'block';

            isLoggedIn = true;
        }
        homePage();
    });
}

export function logout() {
    logoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        registerBtn.style.display = 'inline-block';
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        homeSection.style.display = 'block';
        loginSection.style.display = 'none';
        registerSection.style.display = 'none';
        carContainerSection.style.display = 'none';
        carDetailsSection.style.display = 'none';
        document.getElementById('rent').style.display = 'none';
        
        isLoggedIn = false;
    });
}
