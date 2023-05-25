import { removeAllChildNodes } from "./car-catalog.js";
import { isLoggedIn } from "./login.js";


export function submit(car, currPrice) {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const finalText = document.getElementById('finalText');
        const startDate = document.getElementById('start-date').value.split('-');
        const endDate = document.getElementById('end-date').value.split('-');
        const currentDate = new Date();
        const lastDay = lastDayOfMonth(2023, Number(startDate[1]));

        const div = document.createElement('div');

        let days = 0;
        let sum = 0;

        removeAllChildNodes(finalText);

        if (startDate == '' || endDate == '') {
            alert('Моля въведете дата!');
            console.log('1');
        } else if (startDate[1] > endDate[1]) {
            alert('Моля въведете валидни дати!');
            console.log('2');
        } else if (startDate[2] >= endDate[2] && startDate[1] >= endDate[1]) {
            console.log('3');
            alert('Моля въведете валидни дати!');
        } else if (startDate[1] < Number(currentDate.getMonth()) || (startDate[2] < Number(currentDate.getDate()) && Number(startDate[1]) <= (currentDate.getMonth() + 1))) {
            console.log('4');
            alert('Моля въведете валидни дати!');
            } else if (!isLoggedIn) {
                alert('Моля влезте в профила си или си направете регистрация');
        } else {
            if (startDate[1] == endDate[1]) {
                days = endDate[2] - startDate[2];
            } else if (startDate[1] < endDate[1]) {
                days = Number(lastDay) - Number(startDate[2]);
                days += Number(endDate[2]);
            }

            sum = days * currPrice;

            div.innerHTML = `
            <p>Резервирахте успешно ${car} от ${startDate[2]}.${startDate[1]} до ${endDate[2]}.${endDate[1]}.
            Дължите ${sum} лв. Ще получите имейл с номер на банкова сметка.</p>
            `

            finalText.appendChild(div);
        }
    });
}

function lastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

