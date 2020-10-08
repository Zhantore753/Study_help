import {
    getResource
} from '../services/requests';

const loadCards = (wrapper) => {
    try {
        getResource('http://localhost:3000/modes')
            .then(res => createCards(res))
            .catch(error => console.log(error));

        function createCards(response) {
            response.forEach(({
                src,
                title,
                link
            }) => {
                let card = document.createElement('a');

                card.setAttribute('href', link);
                card.style.width = "18rem";
                card.classList.add('card', 'col-lg-3', 'col-md-4', 'col-sm-6', 'col-12', 'mb-2', 'p-0');

                card.innerHTML = `
                    <img
                    class="card-img-top"
                    src="${src}"
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">
                    Складывайте и отнимайте числа от 1 до 1000(до 5 чисел)
                    </p>
                </div>
            `;

                document.querySelector(wrapper).appendChild(card);
            });
        }
    } catch (e) {}
};

export default loadCards;