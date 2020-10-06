import {
    getResource
} from '../services/requests';

const auth = () => {
    const date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        nick = document.querySelector('.nick-inner'),
        nickWrap = document.querySelector('.nick'),
        authBtn = document.querySelector('.auth-btn'),
        localDateYear = localStorage.getItem('deadline-year'),
        localDateMonth = localStorage.getItem('deadline-month'),
        localDateDay = localStorage.getItem('deadline-day');
    if (localDateYear && localDateMonth && localDateDay) {

        if (+localDateYear >= +year && +localDateMonth >= +month && +localDateDay >= +day) {
            const localLogin = localStorage.getItem('login');
            nick.textContent = localLogin;
            authBtn.style.display = 'none';
            nickWrap.style.display = '';
        } else {
            localStorage.removeItem('deadline-year');
            localStorage.removeItem('deadline-month');
            localStorage.removeItem('deadline-day');
            localStorage.removeItem('login');
            localStorage.removeItem('name');
            localStorage.removeItem('pass');
            localStorage.removeItem('id');
        }
    }
    const form = document.querySelector('.auth-form'),
        exitBtn = document.querySelector('[data-exit]'),
        exitModal = document.querySelector('.exit-modal'),
        authModal = document.querySelector('.auth-modal');
    // forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const login = form.querySelector('[name="login"]'),
            password = form.querySelector('[name="password"]'),
            checkbox = form.querySelector('[name="checkbox"]');

        let loginCheck = false,
            passwordCheck = false,
            trueLogin = '',
            trueName = '',
            truePass = '',
            id = 0;

        getResource('http://localhost:3000/auth')
            .then(res => {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].login == login.value) {
                        trueLogin = res[i].login;
                        loginCheck = true;
                        trueName = res[i].name;
                        id = res[i].id;
                    }
                    if (res[i].password == password.value) {
                        passwordCheck = true;
                        truePass = res[i].password;
                    }
                }
            }).catch(e => {
                console.log(e);
            }).finally(() => {
                const checked = document.createElement('div');
                if (loginCheck && passwordCheck) {
                    if (checkbox.checked == true) {
                        const dead = {
                            year: year,
                            month: month,
                            day: day + 1
                        }
                        localStorage.setItem('deadline-year', dead.year);
                        localStorage.setItem('deadline-month', dead.month);
                        localStorage.setItem('deadline-day', dead.day);
                        localStorage.setItem('login', trueLogin);
                        localStorage.setItem('name', trueName);
                        localStorage.setItem('pass', truePass);
                        localStorage.setItem('id', id);
                    }
                    nick.textContent = trueLogin;
                    authBtn.style.display = 'none';
                    nickWrap.style.display = '';

                    checked.innerHTML = `<div class="text-center">
                            Вы зашли!
                        </div>`;

                    form.appendChild(checked);

                    setTimeout(() => {
                        document.querySelector('[name="login"]').value = '';
                        document.querySelector('[name="password"]').value = '';
                        document.querySelector('[name="checkbox"]').value = '';
                        checked.remove();
                    }, 3000);

                    setTimeout(() => {
                        authModal.classList.remove('show');
                        authModal.style.display = 'none';
                    }, 7000);
                } else {
                    checked.innerHTML = `<div class="text-center">
                            Неправильный логин или пароль!
                        </div>`;
                    form.appendChild(checked);
                }
            });

    });
    // });
    exitBtn.addEventListener('click', () => {
        nick.textContent = '';
        authBtn.style.display = '';
        nickWrap.style.display = 'none';
        localStorage.removeItem('deadline-year');
        localStorage.removeItem('deadline-month');
        localStorage.removeItem('deadline-day');
        localStorage.removeItem('login');
        localStorage.removeItem('name');
        localStorage.removeItem('pass');
        localStorage.removeItem('id');
        exitModal.classList.remove('show');
        exitModal.style.display = 'none';
    });
};
export default auth;