const sum = () => {
    const btnStart = document.querySelector('#start-sum'),
        pointsWrap = document.querySelector('.sum_points'),
        seconds = document.querySelector('.seconds'),
        zadacha = document.querySelector('.sum_zadacha'),
        answer = document.querySelector('.sum_answer'),
        btnAnswer = document.querySelector('#sum-otvet'),
        points = 0,
        timer = 0;

    let numbers = [],
        trueAnswer = 0;

    btnStart.addEventListener('click', () => {
        const amountNum = getRandomBetween(3, 5);
        numbers = [];
        zadacha.textContent = '';
        for (let i = 0; i < amountNum; i++) {
            let znak = getRandomBetween(1, 2);
            if (i != 0) {
                if (znak == 2) {
                    numbers.push('+');
                } else {
                    numbers.push('-');
                }
            }
            let number = getRandomBetween(1, 9999);
            numbers.push(number);
            if (i == 0) {
                trueAnswer = number;
            } else if (znak == 2) {
                trueAnswer = trueAnswer + number;
            } else {
                trueAnswer = trueAnswer - number;
            }
        }
        btnStart.textContent = "Дальше";
        console.log(numbers);
        console.log(trueAnswer);
        numbers.forEach(number => {
            zadacha.textContent += `${number} `;
        });
    });

    btnAnswer.addEventListener('click', () => {
        let userAnswer = answer.value;
        if (userAnswer == trueAnswer) {
            console.log('Все верно!');
        } else {
            console.log('Ошибка!');
        }
    });

    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
export default sum;