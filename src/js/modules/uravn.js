const uravn = ()=>{
    try{
        const btnStart = document.querySelector('#start-uravn'),
        btnNext = document.querySelector('#next-uravn'),
        btnRes = document.querySelector('#result-uravn'),
        pointsWrap = document.querySelector('.uravn_points'),
        secondsWrap = document.querySelector('.seconds'),
        zadacha = document.querySelector('.uravn_zadacha'),
        answer = document.querySelector('.uravn_answer'),
        btnAnswer = document.querySelector('#uravn-otvet'),
        uravnBody = document.querySelector('.uravn_body'),
        uravnFooter = document.querySelector('.uravn_footer'),
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
            uravnFooter.innerHTML = '';
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
                let znak = getRandomBetween(1, 4);
                if (i != 0) {
                    if (znak == 1) {
                        numbers.push('+');
                    } else if (znak == 2) {
                        numbers.push('-');
                    } else if (znak == 3){
                        numbers.push('*');
                    } else {
                        numbers.push('/');
                    }
                }
                let number = getRandomBetween(1, 9999);
                numbers.push(number);
            }
            console.log(numbers);
            numbers.forEach(number => {
                zadacha.textContent += `${number} `;
            });
            soluton();
        }

        const soluton = function(){
            let counter = 1;
            for(let i = 0; i < numbers.length; i++){
                let oneStep = document.createElement('div');
                    
                oneStep.setAttribute('id', i);
                oneStep.classList.add('d-flex');
                uravnFooter.classList.remove('d-flex');
                uravnFooter.style.display = "none";
                if(numbers[i] == '*'){
                    let solvedNum = numbers[i-1] * numbers[i+1];
                    oneStep.innerHTML = `
                        <span class="pr-3">${counter})</span>
                        <span class="pr-2 pt-2">*</span>
                        <span>
                            <div class="text-right">${numbers[i - 1]}</div>
                            <div class="text-right">${numbers[i + 1]}</div>
                            <hr style="margin:0">
                            <div class="text-right">${solvedNum}</div>
                        </span>
                    `;
                    uravnFooter.append(oneStep);
                    counter++;
                    numbers.splice(i-1, 3, solvedNum);
                    i-=2;
                }else if(numbers[i] == '/') {
                    let solvedNum = numbers[i-1] / numbers[i+1];
                    oneStep.innerHTML = `
                        <span class="pr-3">${counter})</span>
                        <span class="pr-2 pt-2">/</span>
                        <span>
                            <div class="text-right">${numbers[i - 1]}</div>
                            <div class="text-right">${numbers[i + 1]}</div>
                            <hr style="margin:0">
                            <div class="text-right">${solvedNum}</div>
                        </span>
                    `;
                    uravnFooter.append(oneStep);
                    counter++;
                    numbers.splice(i-1, 3, solvedNum);
                    i-=2;
                }
            }
            for(let i = 0; i < numbers.length; i++){
                let oneStep = document.createElement('div');
                    
                oneStep.setAttribute('id', i);
                oneStep.classList.add('d-flex');
                uravnFooter.classList.remove('d-flex');
                uravnFooter.style.display = "none";
                if(numbers[i] == '-'){
                    let solvedNum = numbers[i-1] - numbers[i+1];
                    oneStep.innerHTML = `
                        <span class="pr-3">${counter})</span>
                        <span class="pr-2 pt-2">-</span>
                        <span>
                            <div class="text-right">${numbers[i - 1]}</div>
                            <div class="text-right">${numbers[i + 1]}</div>
                            <hr style="margin:0">
                            <div class="text-right">${solvedNum}</div>
                        </span>
                    `;
                    uravnFooter.append(oneStep);
                    counter++;
                    numbers.splice(i-1, 3, solvedNum);
                    i-=2;
                }else if(numbers[i] == '+') {
                    let solvedNum = numbers[i-1] + numbers[i+1];
                    oneStep.innerHTML = `
                        <span class="pr-3">${counter})</span>
                        <span class="pr-2 pt-2">+</span>
                        <span>
                            <div class="text-right">${numbers[i - 1]}</div>
                            <div class="text-right">${numbers[i + 1]}</div>
                            <hr style="margin:0">
                            <div class="text-right">${solvedNum}</div>
                        </span>
                    `;
                    uravnFooter.append(oneStep);
                    counter++;
                    numbers.splice(i-1, 3, solvedNum);
                    i-=2;
                }
            }
            trueAnswer = numbers[0];
            trueAnswer = Math.round(trueAnswer);
            console.log(trueAnswer);
        };

        btnAnswer.addEventListener('click', () => {
            let userAnswer = answer.value;
            if (userAnswer == trueAnswer) {
                mark.textContent = 'Все верно!';
                uravnBody.appendChild(mark);
                btnNext.style.display = '';
                points++;
                pointsWrap.textContent = points;
            } else {
                mark.textContent = 'Ошибка!';
                uravnBody.appendChild(mark);
                clearInterval(timerFunc);
                // pointsWrapRes.textContent = points;
                // secondsWrapRes.textContent = seconds;
                pointsWrapRes.value = points;
                secondsWrapRes.value = seconds;
                // effWrap.textContent = `${(points / seconds).toFixed(5) * 100}%`;
                effWrap.value = `${(points / seconds).toFixed(5) * 100}%`;
                btnRes.style.display = '';
            }
            btnAnswer.style.display = "none";
            stepSol();
        });

        function stepSol(){
            uravnFooter.style.display = "";
            uravnFooter.classList.add('d-flex');
        }

        function getRandomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    } catch(e){}
};
export default uravn;