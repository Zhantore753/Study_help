import {
    getResource
} from '../services/requests';

const tops = () =>{
    const allBtn = document.querySelectorAll('.col-title'),
        btnId = document.querySelector('[data-col="id"]'),
        btnName = document.querySelector('[data-col="name"]'),
        btnPoints = document.querySelector('[data-col="points"]'),
        btnTime = document.querySelector('[data-col="time"]'),
        btnEff = document.querySelector('[data-col="eff"]'),
        btnMode = document.querySelector('[data-col="mode"]'),
        tbody = document.querySelector('.tbody'),
        originalAll = [];

    let all = [];

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
            let object = {
                id: id,
                name: name,
                mode: mode,
                points: points,
                time: time,
                eff: eff
            }
            all.push(object);
            originalAll.push(object);
        });
        tableUpdate(all);
    }
    console.log(all);

    btnName.addEventListener('click', ()=>{
        all = originalAll;
        all.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
        });
        allBtn.forEach(btn=>{
            btn.classList.remove('bg-info');
        });
        btnName.classList.add('bg-info');
        tableUpdate(all);
    });

    btnId.addEventListener('click', ()=>{
        all = originalAll;
        all.sort(function (a, b) {
            if (+a.id > +b.id) {
              return 1;
            }
            if (+a.id < +b.id) {
              return -1;
            }
            return 0;
        });
        allBtn.forEach(btn=>{
            btn.classList.remove('bg-info');
        });
        btnId.classList.add('bg-info');
        tableUpdate(all);
    });

    btnPoints.addEventListener('click', ()=>{
        all = originalAll;
        all.sort(function (a, b) {
            if (+a.points > +b.points) {
              return -1;
            }
            if (+a.points < +b.points) {
              return 1;
            }
            return 0;
        });
        allBtn.forEach(btn=>{
            btn.classList.remove('bg-info');
        });
        btnPoints.classList.add('bg-info');
        tableUpdate(all);
    });

    btnTime.addEventListener('click', ()=>{
        all = originalAll;
        all.sort(function (a, b) {
            if (+a.time > +b.time) {
              return 1;
            }
            if (+a.time < +b.time) {
              return -1;
            }
            return 0;
        });
        allBtn.forEach(btn=>{
            btn.classList.remove('bg-info');
        });
        btnTime.classList.add('bg-info');
        tableUpdate(all);
    });

    btnMode.addEventListener('click', ()=>{
        all = originalAll;
        all.sort(function (a, b) {
            if (a.mode > b.mode) {
              return -1;
            }
            if (a.mode < b.mode) {
              return 1;
            }
            return 0;
        });
        allBtn.forEach(btn=>{
            btn.classList.remove('bg-info');
        });
        btnMode.classList.add('bg-info');
        tableUpdate(all);
    });

    btnEff.addEventListener('click', ()=>{
        all = originalAll;
        all.sort(function (a, b) {
            if (+a.eff.slice(0, -1) > +b.eff.slice(0, -1)) {
              return -1;
            }
            if (+a.eff.slice(0, -1) < +b.eff.slice(0, -1)) {
              return 1;
            }
            return 0;
        });
        allBtn.forEach(btn=>{
            btn.classList.remove('bg-info');
        });
        btnEff.classList.add('bg-info');
        tableUpdate(all);
    });
    
    function tableUpdate(array){
        tbody.innerHTML='';
        array.forEach(obj=>{
            let tr = document.createElement('tr');

            tr.innerHTML = `
                <th scope="row">${obj.id}</th>
                <td>${obj.name}</td>
                <td>${obj.mode}</td>
                <td>${obj.points}</td>
                <td>${obj.time}</td>
                <td>${obj.eff}</td>
            `;
            tbody.appendChild(tr);
        });
    }
};

export default tops;