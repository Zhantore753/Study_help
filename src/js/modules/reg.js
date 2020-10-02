import {
    postData
} from '../services/requests';

const reg = () => {
    const forms = document.querySelectorAll('.reg-form');

    forms.forEach(form => {
        submitData(form);
    });

    function submitData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/auth', json)
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
};

export default reg;