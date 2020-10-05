import {
    getResource
} from '../services/requests';

const dropDown = (trigger, wrapper) => {
    if (wrapper == '.dropList') {
        getResource('http://localhost:3000/modes')
            .then(res => loadModes(res))
            .catch(e => console.log(e));

        function loadModes(response) {
            response.forEach(({
                src,
                title,
                link
            }) => {
                let mode = document.createElement('a');
                mode.setAttribute('href', link);
                mode.classList.add('dropdown-item');
                mode.innerHTML = `${title}`;
                document.querySelector(wrapper).appendChild(mode);
            });
        }
    }

    const btn = document.querySelector(trigger),
        list = document.querySelector(wrapper);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('show');
        list.classList.toggle('show');
    });
};

export default dropDown;