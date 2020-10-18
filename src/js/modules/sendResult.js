import {
    postData
} from '../services/requests';

const sendResult = () => {
    try{
    const forms = document.querySelectorAll('.result-form'),
        name = document.querySelector('[data-name]');

    name.value = localStorage.getItem('name');

    forms.forEach(form => {
        submitData(form);
    });

    function submitData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/results', json)
                .then(res => {
                    form.reset();
                })
                .catch(() => {
                    console.log("error");
                })
                .finally(() => {
                    form.reset();
                });
        });
    }
    }catch(e){}
};
export default sendResult;