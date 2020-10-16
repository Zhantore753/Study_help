const delen = ()=>{
    try {
        const btnStart = document.querySelector('#start-delen'),
        btnNext = document.querySelector('#next-delen'),
        btnRes = document.querySelector('#result-delen'),
        pointsWrap = document.querySelector('.delen_points'),
        secondsWrap = document.querySelector('.seconds'),
        zadacha = document.querySelector('.delen_zadacha'),
        answer = document.querySelector('.delen_answer'),
        btnAnswer = document.querySelector('#delen-otvet'),
        delenBody = document.querySelector('.delen_body'),
        delenFooter = document.querySelector('.delen_footer'),
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
            delenFooter.innerHTML = '';
            answer.value = '';
            mark.remove();
            createZad();
            btnNext.style.display = 'none';
        });

        function createZad(){
            amountNum = getRandomBetween(2, 2);
            numbers = [];
            zadacha.textContent = '';
            for (let i = 0; i < amountNum; i++) {
                if (i != 0) {
                    numbers.push('/');
                }
                let number = getRandomBetween(10, 999);
                numbers.push(number);
                let oneStep = document.createElement('div');
                oneStep.setAttribute('id', i);
                oneStep.classList.add('d-flex');
                delenFooter.classList.remove('d-flex');
                delenFooter.style.display = "none";
                if (i == 0) {
                    trueAnswer = number;
                } else {
                    oneStep.innerHTML = `
                    <span class="pr-3">${i})</span>
                    <span class="pr-2 pt-2">/</span>
                    <span>
                        <div class="text-right">${trueAnswer}</div>
                        <div class="text-right">${number}</div>
                        <hr style="margin:0">
                        <div class="text-right">${trueAnswer / number}</div>
                    </span>
                    `;
                    delenFooter.append(oneStep);
                    trueAnswer = trueAnswer / number;
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
                delenBody.appendChild(mark);
                btnNext.style.display = '';
                points++;
                pointsWrap.textContent = points;
            } else {
                mark.textContent = 'Ошибка!';
                delenBody.appendChild(mark);
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
            delenFooter.style.display = "";
            delenFooter.classList.add('d-flex');
        }

        function getRandomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    } catch (e) {}
};

export default delen;