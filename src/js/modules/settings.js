const settings = () => {
    try {
        const name = document.querySelector('.setting-name'),
            login = document.querySelector('.setting-login'),
            pass = document.querySelector('.setting-pass'),
            id = document.querySelector('.setting-id'),
            realId = localStorage.getItem('id'),
            checkShow = document.querySelector('.check-show');
        name.value = localStorage.getItem('name');
        login.value = localStorage.getItem('login');
        pass.value = (localStorage.getItem('pass')).replace(/\*/g, '*');
        id.textContent = 'Уникальный идентификатор: ' + realId;

        checkShow.addEventListener('click', () => {
            if (checkShow.checked) {
                pass.setAttribute('type', 'text');
            } else {
                pass.setAttribute('type', 'password');
            }
        });
    } catch (e) {}
};

export default settings;