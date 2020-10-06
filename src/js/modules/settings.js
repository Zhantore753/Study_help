const settings = () => {
    const name = document.querySelector('.setting-name'),
        login = document.querySelector('.setting-login'),
        pass = document.querySelector('.setting-pass'),
        id = document.querySelector('.setting-id'),
        btnShow = document.querySelector('.btn-show');
    name.value = localStorage.getItem('name');
    login.value = localStorage.getItem('login');
    pass.value = localStorage.getItem('pass');
    id.textContent = 'Уникальный идентификатор: ' + localStorage.getItem('id');

};

export default settings;