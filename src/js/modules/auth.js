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
        authBtn = document.querySelector('.auth-btn');
    if (localStorage.getItem('deadline-year') && localStorage.getItem('deadline-month') && localStorage.getItem('deadline-day')) {
        const localDateYear = localStorage.getItem('deadline-year'),
            localDateMonth = localStorage.getItem('deadline-month'),
            localDateDay = localStorage.getItem('deadline-day');

        if (+localDateYear >= +year && +localDateMonth >= +month && +localDateDay >= +day) {
            const localLogin = localStorage.getItem('login');
            nick.textContent = localLogin;
            authBtn.style.display = 'none';
            nickWrap.style.display = '';
        } else {
            localStorage.removeItem('deadline');
            localStorage.removeItem('login');
        }
    }
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const login = form.querySelector('[name="login"]'),
                password = form.querySelector('[name="password"]'),
                checkbox = form.querySelector('[name="checkbox"]');

            let loginCheck = false,
                passwordCheck = false,
                trueLogin = '';

            getResource('http://localhost:3000/auth')
                .then(res => {
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].login == login.value) {
                            trueLogin = res[i].login;
                            loginCheck = true;
                        }
                        if (res[i].password == password.value) {
                            passwordCheck = true;
                        }
                    }
                }).catch(e => {
                    console.log(e);
                }).finally(() => {
                    const checked = document.createElement('div');
                    if (loginCheck && passwordCheck) {
                        if (checkbox.checked == true) {
                            console.log(date);
                            const dead = {
                                year: year,
                                month: month,
                                day: day + 1
                            }
                            localStorage.setItem('deadline-year', dead.year);
                            localStorage.setItem('deadline-month', dead.month);
                            localStorage.setItem('deadline-day', dead.day);
                            localStorage.setItem('login', trueLogin);
                        }
                        nick.textContent = trueLogin;
                        authBtn.style.display = 'none';
                        nickWrap.style.display = '';

                        checked.innerHTML = `<div class="text-center">
                            Вы зашли!
                        </div>`
                        form.appendChild(checked);
                    } else {
                        checked.innerHTML = `<div class="text-center">
                            Неправильный логин или пароль!
                        </div>`;
                        form.appendChild(checked);
                    }
                });

        });
    });
};
export default auth;