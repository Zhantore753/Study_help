const dropDown = (trigger, wrapper) => {
    const btn = document.querySelector(trigger),
        list = document.querySelector(wrapper);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('show');
        list.classList.toggle('show');
    });
};

export default dropDown;