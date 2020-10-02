import postData from '../services/requests';

const reg = () => {
    const forms = document.querySelectorAll('.reg-form');

    forms.forEach(form => {
        submitData(form);
    });

    function submitData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(form);
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            console.log(formData);
            console.log(json);
            postData('http://localhost:3000/auth', json)
                .then(res => {
                    console.log(res);
                    form.reset();
                })
                .catch(() => {
                    console.log("error");
                })
                .finally(() => {
                    console.log("end");
                    form.reset();
                });
        });
    }
};

export default reg;