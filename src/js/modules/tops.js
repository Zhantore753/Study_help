import {
    getResource
} from '../services/requests';

const tops = () =>{
    const table = document.querySelector('.table'),
        btnId = document.querySelector('[data-col="id"]'),
        btnName = document.querySelector('[data-col="name"]'),
        btnPoints = document.querySelector('[data-col="points"]'),
        btnTime = document.querySelector('[data-col="time"]'),
        btnEff = document.querySelector('[data-col="eff"]'),
        btnMode = document.querySelector('[data-col="mode"]'),
        tbody = document.querySelector('.tbody');

    getResource('http://localhost:3000/results')
        .then(res => createRows(res))
        .catch(error => console.log(error));


    function createRows(response) {
        response.forEach(({
            mode,
            name,
            points,
            time,
            eff,
            id
        }) => {
            let tr = document.createElement('tr');

            tr.innerHTML = `
            <th scope="row">${id}</th>
            <td>${name}</td>
            <td>${mode}</td>
            <td>${points}</td>
            <td>${time}</td>
            <td>${eff}</td>
        `;

            tbody.appendChild(tr);
        });
    }
};

export default tops;