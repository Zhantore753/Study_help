import {
    getResource
} from '../services/requests';

const auth = () => {
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const login = form.querySelector('[name="login"]'),
                password = form.querySelector('[name="password"]'),
                checkbox = form.querySelector('[name="checkbox"]');
            let loginCheck = false,
                passwordCheck = false;


            getResource('http://localhost:3000/auth')
                .then(res => {
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].login == login.value) {
                            console.log(true);
                            loginCheck = true;
                        }
                        if (res[i].password == password.value) {
                            console.log(true);
                            passwordCheck = true;
                        }
                    }
                }).catch(e => {
                    console.log(e);
                }).finally(() => {
                    const checked = document.createElement('div');
                    if (loginCheck && passwordCheck) {
                        checked.innerHTML = `<div class="text-center">
                            Вы зашли!
                        </div>`
                        form.appendChild(checked);
                    } else {
                        checked.innerHTML = `<div class="text-center">
                            Неправильный логин или пароль!
                        </div>`
                        form.appendChild(checked);
                    }
                });
        });
    });
};
export default auth;