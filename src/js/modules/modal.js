const modal = (trigger, modal) => {
    const btn = document.querySelector(trigger),
        thisModal = document.querySelector(modal);
    btn.addEventListener('click', (e) => {
        // e.preventDefault();
        thisModal.classList.add('show');
        thisModal.style.display = 'block';
    });
    thisModal.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            thisModal.classList.remove('show');
            thisModal.style.display = 'none';
        });
    });

    const auth = thisModal.querySelector('[data-auth]'),
        reg = thisModal.querySelector('[data-reg]');

    auth.addEventListener('click', (e) => {
        thisModal.querySelector('.auth').style.display = "block";
        thisModal.querySelector('.reg').style.display = "none";
        auth.classList.add('btn-secondary');
        auth.classList.remove('btn-outline-secondary');
        reg.classList.remove('btn-secondary');
        reg.classList.add('btn-outline-secondary');
    });

    reg.addEventListener('click', (e) => {
        thisModal.querySelector('.reg').style.display = "block";
        thisModal.querySelector('.auth').style.display = "none";
        reg.classList.add('btn-secondary');
        reg.classList.remove('btn-outline-secondary');
        auth.classList.remove('btn-secondary');
        auth.classList.add('btn-outline-secondary');
    });
};

export default modal;