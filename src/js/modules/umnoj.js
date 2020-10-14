const umnoj = () => {
    try {
        const btnStart = document.querySelector('#start-umnoj'),
        btnNext = document.querySelector('#next-umnoj'),
        btnRes = document.querySelector('#result-umnoj'),
        pointsWrap = document.querySelector('.umnoj_points'),
        secondsWrap = document.querySelector('.seconds'),
        zadacha = document.querySelector('.umnoj_zadacha'),
        answer = document.querySelector('.umnoj_answer'),
        btnAnswer = document.querySelector('#umnoj-otvet'),
        umnojBody = document.querySelector('.umnoj_body'),
        umnojFooter = document.querySelector('.umnoj_footer'),
        effWrap = document.querySelector('[data-eff]'),
        pointsWrapRes = document.querySelector('[data-points]'),
        secondsWrapRes = document.querySelector('[data-sec]');

        let numbers = [],
            trueAnswer = 0,
            points = 0,
            seconds = 0,
            amountNum = 0,
            timerFunc;
        pointsWrap.textContent = '';
        secondsWrap.textContent = '';

        let mark = document.createElement('h3');
        mark.classList.add('text-center');

        btnStart.addEventListener('click', () => {
            btnAnswer.style.display = "";
            createZad();
            timerFunc =  setInterval(()=>{
                seconds++;
                secondsWrap.textContent = seconds;
            }, 1000);
            btnStart.style.display = 'none';
        });

        btnNext.addEventListener('click', ()=>{
            btnAnswer.style.display = "";
            umnojFooter.innerHTML = '';
            answer.value = '';
            mark.remove();
            createZad();
            btnNext.style.display = 'none';
        });

        function createZad(){
            amountNum = getRandomBetween(2, 3);
            numbers = [];
            zadacha.textContent = '';
            for (let i = 0; i < amountNum; i++) {
                let znak = getRandomBetween(1, 2);
                if (i != 0) {
                    numbers.push('*');
                }
                let number = getRandomBetween(10, 999);
                numbers.push(number);
                let oneStep = document.createElement('div');
                oneStep.setAttribute('id', i);
                oneStep.classList.add('d-flex');
                umnojFooter.classList.remove('d-flex');
                umnojFooter.style.display = "none";
                if (i == 0) {
                    trueAnswer = number;
                } else {
                    oneStep.innerHTML = `
                    <span class="pr-3">${i})</span>
                    <span class="pr-2 pt-2">*</span>
                    <span>
                        <div class="text-right">${trueAnswer}</div>
                        <div class="text-right">${number}</div>
                        <hr style="margin:0">
                        <div class="text-right">${trueAnswer * number}</div>
                    </span>
                    `;
                    umnojFooter.append(oneStep);
                    trueAnswer = trueAnswer * number;
                }
            }
            console.log(numbers);
            console.log(trueAnswer);
            numbers.forEach(number => {
                zadacha.textContent += `${number} `;
            });
        }

        btnAnswer.addEventListener('click', () => {
            let userAnswer = answer.value;
            if (userAnswer == trueAnswer) {
                mark.textContent = 'Все верно!';
                umnojBody.appendChild(mark);
                btnNext.style.display = '';
                points++;
                pointsWrap.textContent = points;
            } else {
                mark.textContent = 'Ошибка!';
                umnojBody.appendChild(mark);
                clearInterval(timerFunc);
                pointsWrapRes.textContent = points;
                secondsWrapRes.textContent = seconds;
                effWrap.textContent = `${(points / seconds).toFixed(5) * 100}%`;
                btnRes.style.display = '';
            }
            btnAnswer.style.display = "none";
            stepSol();
        });

        function stepSol(){
            umnojFooter.style.display = "";
            umnojFooter.classList.add('d-flex');
        }

        function getRandomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    } catch (e) {
        console.log(e);
    }
}
export default umnoj;