const sum = () => {
    try{
        const btnStart = document.querySelector('#start-sum'),
        btnNext = document.querySelector('#next-sum'),
        btnRes = document.querySelector('#result-sum'),
        pointsWrap = document.querySelector('.sum_points'),
        secondsWrap = document.querySelector('.seconds'),
        zadacha = document.querySelector('.sum_zadacha'),
        answer = document.querySelector('.sum_answer'),
        btnAnswer = document.querySelector('#sum-otvet'),
        sumBody = document.querySelector('.sum_body'),
        sumFooter = document.querySelector('.sum_footer'),
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
            sumFooter.innerHTML = '';
            answer.value = '';
            mark.remove();
            createZad();
            btnNext.style.display = 'none';
        });

        function createZad(){
            amountNum = getRandomBetween(3, 5);
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
                let oneStep = document.createElement('div');
                oneStep.setAttribute('id', i);
                oneStep.classList.add('d-flex');
                sumFooter.classList.remove('d-flex');
                sumFooter.style.display = "none";
                if (i == 0) {
                    trueAnswer = number;
                } else if (znak == 2) {
                    oneStep.innerHTML = `
                    <span class="pr-3">${i})</span>
                    <span class="pr-2 pt-2">+</span>
                    <span>
                        <div class="text-right">${trueAnswer}</div>
                        <div class="text-right">${number}</div>
                        <hr style="margin:0">
                        <div class="text-right">${trueAnswer + number}</div>
                    </span>
                    `;
                    sumFooter.append(oneStep);
                    trueAnswer = trueAnswer + number;
                } else {
                    oneStep.innerHTML = `
                    <span class="pr-3">${i})</span>
                    <span class="pr-2 pt-2">-</span>
                    <span>
                        <div class="text-right">${trueAnswer}</div>
                        <div class="text-right">${number}</div>
                        <hr style="margin:0">
                        <div class="text-right">${trueAnswer - number}</div>
                    </span>
                    `;
                    sumFooter.append(oneStep);
                    trueAnswer = trueAnswer - number;
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
                sumBody.appendChild(mark);
                btnNext.style.display = '';
                points++;
                pointsWrap.textContent = points;
            } else {
                mark.textContent = 'Ошибка!';
                sumBody.appendChild(mark);
                clearInterval(timerFunc);
                pointsWrapRes.value = points;
                secondsWrapRes.value = seconds;
                effWrap.value = `${(points / seconds).toFixed(5) * 100}%`;
                btnRes.style.display = '';
            }
            btnAnswer.style.display = "none";
            stepSol();
        });

        function stepSol(){
            sumFooter.style.display = "";
            sumFooter.classList.add('d-flex');
        }

        function getRandomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }catch(e){}
};
export default sum;