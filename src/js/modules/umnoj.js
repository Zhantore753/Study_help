const umnoj = () => {
    const firstNumber = document.querySelector("#firstNumber"),
        secondNumber = document.querySelector("#secondNumber"),
        firstRandom = String(getRandomBetween(1, 9)),
        secondRandom = String(getRandomBetween(1, 9)),
        thirdRandom = String(getRandomBetween(1, 9)),
        foursRandom = String(getRandomBetween(1, 9)),
        firstValue = firstRandom + secondRandom,
        secondValue = thirdRandom + foursRandom,
        thirdNumber = document.querySelector("#thirdNumber"),
        giveAnswer = document.querySelector(".giveAnswer"),
        giveSolution = document.querySelector(".giveSolution"),
        modal = document.querySelector(".modal"),
        modalDialog = document.querySelector(".modal__dialog"),
        answerTeg = document.querySelector(".answer"),
        solDiv = document.querySelector(".solution"),
        step1 = document.querySelector(".step1"),
        step2 = document.querySelector(".step2"),
        step3 = document.querySelector(".step3"),
        step4 = document.querySelector(".step4");

    let firstSol = 0;
    let secondSol = 0;
    let thirdSol = 0;
    let foursSol = 0;
    firstNumber.innerHTML = `
    <span id="first">${firstRandom}</span>
    <span id="second">${secondRandom}</span>
`;
    secondNumber.innerHTML = `
    <span id="third">${thirdRandom}</span>
    <span id="fours">${foursRandom}</span>
`;

    thirdNumber.innerHTML = ``;
    let arr = String(+firstValue * +secondValue);
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i].replace(/./g, "*");
        thirdNumber.innerHTML += `
        <span id="${i}">${elem}</span>
    `;
    }

    giveAnswer.addEventListener("click", () => {
        thirdNumber.innerHTML = ``;
        let arr = String(+firstValue * +secondValue);
        for (let i = 0; i < arr.length; i++) {
            thirdNumber.innerHTML += `
        <span id="${i}">${arr[i]}</span>
    `;
        }
    });

    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const first = document.querySelectorAll("#firstNumber span"),
        second = document.querySelectorAll("#secondNumber span");

    giveSolution.addEventListener("click", () => {
        modal.classList.add("on");
        modal.classList.remove("off");
        let solution = foursRandom * secondRandom;
        modalDialog.textContent = `${foursRandom} * ${secondRandom} = ${solution}`;
        first[1].classList.add("active");
        second[1].classList.add("active");

        solDiv.innerHTML = `
    <h2 class="firstSol number"></h2>
  `;

        let solDivIn = document.querySelector(".firstSol");

        let arr = String(solution);
        for (let i = 0; i < arr.length; i++) {
            solDivIn.innerHTML += `
        <span class="second-active">${arr[i]}</span>
    `;
        }
        firstSol = solution;
    });

    step1.addEventListener("click", () => {
        let solution = foursRandom * firstRandom;
        modalDialog.textContent = `${foursRandom} * ${firstRandom} = ${solution}`;
        first[1].classList.remove("active");
        first[0].classList.add("active");
        second[1].classList.add("active");
        solDiv.innerHTML += `
    <h2 class="secondSol number">
    </h2>
  `;

        let solDivInPrev = document.querySelectorAll(".firstSol span");
        let solDivIn = document.querySelector(".secondSol");

        for (let k = 0; k < solDivInPrev.length; k++) {
            solDivInPrev[k].classList.remove("second-active");
        }

        let arr = String(solution);
        for (let i = 0; i < arr.length; i++) {
            solDivIn.innerHTML += `
        <span class="second-active">${arr[i]}</span>
    `;
        }

        solDivIn.innerHTML += `
    <span class="third-active">0</span>
  `;

        step1.classList.add("off");
        step1.classList.remove("on-btn");

        step2.classList.add("on-btn");
        step2.classList.remove("off");

        secondSol = solution;
        secondSol += "0";
    });

    step2.addEventListener("click", () => {
        let solution = thirdRandom * secondRandom;
        modalDialog.textContent = `${thirdRandom} * ${secondRandom} = ${solution}`;
        first[1].classList.add("active");
        first[0].classList.remove("active");
        second[1].classList.remove("active");
        second[0].classList.add("active");
        solDiv.innerHTML += `
      <h2 class="thirdSol number"></h2>
    `;

        let solDivInPrev = document.querySelectorAll(".secondSol span");
        let solDivIn = document.querySelector(".thirdSol");

        for (let k = 0; k < solDivInPrev.length; k++) {
            solDivInPrev[k].classList.remove("second-active");
        }

        let arr = String(solution);
        for (let i = 0; i < arr.length; i++) {
            solDivIn.innerHTML += `
          <span class="second-active">${arr[i]}</span>
      `;
        }

        solDivIn.innerHTML += `
    <span class="third-active">0</span>
  `;

        step2.classList.add("off");
        step2.classList.remove("on-btn");

        step3.classList.add("on-btn");
        step3.classList.remove("off");

        thirdSol = solution;
        thirdSol += "0";
    });

    step3.addEventListener("click", () => {
        let solution = thirdRandom * firstRandom;
        modalDialog.textContent = `${thirdRandom} * ${firstRandom} = ${solution}`;
        first[0].classList.add("active");
        first[1].classList.remove("active");
        second[1].classList.remove("active");
        second[0].classList.add("active");
        solDiv.innerHTML += `
        <h2 class="foursSol number"></h2>
      `;

        let solDivInPrev = document.querySelectorAll(".thirdSol span");
        let solDivIn = document.querySelector(".foursSol");

        for (let k = 0; k < solDivInPrev.length; k++) {
            solDivInPrev[k].classList.remove("second-active");
        }

        let arr = String(solution);
        for (let i = 0; i < arr.length; i++) {
            solDivIn.innerHTML += `
            <span class="second-active">${arr[i]}</span>
        `;
        }

        solDivIn.innerHTML += `
      <span class="third-active">0</span>
      <span class="third-active">0</span>
    `;

        step3.classList.add("off");
        step3.classList.remove("on-btn");

        step4.classList.add("on-btn");
        step4.classList.remove("off");

        foursSol = solution;
        foursSol += "00";
    });

    step4.addEventListener("click", () => {
        let solution = +firstSol + +secondSol + +thirdSol + +foursSol;
        modalDialog.textContent = `${firstSol} + ${secondSol} + ${thirdSol} + ${foursSol} = ${solution}`;
        first[0].classList.remove("active");
        first[1].classList.remove("active");
        second[1].classList.remove("active");
        second[0].classList.remove("active");

        let solDivInPrev = document.querySelectorAll(".foursSol span");
        for (let k = 0; k < solDivInPrev.length; k++) {
            solDivInPrev[k].classList.remove("second-active");
        }

        thirdNumber.innerHTML = ``;
        let arr = String(+firstValue * +secondValue);
        for (let i = 0; i < arr.length; i++) {
            thirdNumber.innerHTML += `
        <span>${arr[i]}</span>
    `;
        }

        thirdNumber.classList.add("second-active");

        solDiv.classList.add("active");

        step4.classList.remove("on-btn");
        step4.classList.add("off");
    });
}
export default umnoj;