import { cars } from './car-library.js';
import { slide } from './slider.js';
import { carContainerSection, carDetailsSection, loginSection, homeSection, registerSection, rentPage } from './navigation.js'


let counter = 0;

export function carCatalog() {

    for (const car in cars) {
        let childElement = document.createElement('div');
        childElement.classList.add('car');

        childElement.innerHTML =
            `<img class="img-responsive image-resize" src="${cars[car]['img1']}">
        <h2 id="currCar">${car} ${cars[car]['model']}</h2>
        <h3>${cars[car]['price']} лв/ден</h3>
        <p>${cars[car]['transmission']} скоростна кутия</p>`

        carContainerSection.appendChild(childElement);
    }
}

export function carDetails(vehicles) {

    for (const vehicle of vehicles) {

        vehicle.addEventListener('click', (event) => {
            event.preventDefault();
       
            loginSection.style.display = 'none';
            carDetailsSection.style.display = 'block';
            homeSection.style.display = 'none';
            registerSection.style.display = 'none';
            carContainerSection.style.display = 'none';
            const currentCar = '.' + vehicle.childNodes[0].src.split('0')[4];

            if (counter >= 1) {
                removeAllChildNodes(carDetailsSection);
                counter = 0;
            }

            for (const car in cars) {
                let childElement = document.createElement('div');

                childElement.innerHTML = `
            <div class="slider">
                <div class="slider-container">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                    <img src="${cars[car]['img1']}" class="slider-img active">
                    <img src="${cars[car]['img2']}" class="slider-img">
                    <img src="${cars[car]['img3']}" class="slider-img">
                </div>
            </div>
            <div class="car-details-info">
                <h2>${car} ${cars[car]['model']}</h2>
                <p><strong>Година: </strong>${cars[car]['year']}</p>
                <p><strong>Трансмисия: </strong>${cars[car]['transmission']}</p>
                <p><strong>Гориво: </strong>${cars[car]['fuel']}</p>
                <p><strong>Двигател: </strong>${cars[car]['engine']}</p>
                <p><strong>Седалки: </strong>${cars[car]['seats']}</p>
                <p><strong>Врати: </strong>${cars[car]['doors']}</p>
                <p><strong>Цена: </strong>${cars[car]['price']}</p>
                <button id="rentBtn">Поръчай сега</button>
            </div>`

                const currCar = car + ' ' + cars[car]['model'];
                const price = cars[car]['price'];

                if (cars[car]['img1'] == currentCar) {
                    carDetailsSection.appendChild(childElement);
                    counter++;
                    slide();
                    rentPage(currCar, price);
                }
            }
        });
    }
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function homeCars() {
    const vehicle1 = document.getElementById('vehicle-1');
    const vehicle2 = document.getElementById('vehicle-2');
    const vehicles = [vehicle1, vehicle2];

    for (const vehicle of vehicles) {

        vehicle.addEventListener('click', (event) => {
            event.preventDefault();

            loginSection.style.display = 'none';
            carDetailsSection.style.display = 'block';
            homeSection.style.display = 'none';
            registerSection.style.display = 'none';
            carContainerSection.style.display = 'none';
            const currentCar = '.' + vehicle.childNodes[1].src.split('0')[4];

            if (counter >= 1) {
                removeAllChildNodes(carDetailsSection);
                counter = 0;
            }

            for (const car in cars) {
                let childElement = document.createElement('div');

                childElement.innerHTML = `
            <div class="slider">
                <div class="slider-container">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                    <img src="${cars[car]['img1']}" class="slider-img active">
                    <img src="${cars[car]['img2']}" class="slider-img">
                    <img src="${cars[car]['img3']}" class="slider-img">
                </div>
            </div>
            <div class="car-details-info">
                <h2>${car} ${cars[car]['model']}</h2>
                <p><strong>Година: </strong>${cars[car]['year']}</p>
                <p><strong>Трансмисия: </strong>${cars[car]['transmission']}</p>
                <p><strong>Гориво: </strong>${cars[car]['fuel']}</p>
                <p><strong>Двигател: </strong>${cars[car]['engine']}</p>
                <p><strong>Седалки: </strong>${cars[car]['seats']}</p>
                <p><strong>Врати: </strong>${cars[car]['doors']}</p>
                <p><strong>Цена: </strong>${cars[car]['price']}</p>
                <button id="rentBtn">Поръчай сега</button>
            </div>`

                const currCar = car + ' ' + cars[car]['model'];
                const price = cars[car]['price'];

                if (cars[car]['img1'] == currentCar) {
                    carDetailsSection.appendChild(childElement);
                    counter++;
                    slide();
                    rentPage(currCar, price);
                }
            }
        });
    }
}










