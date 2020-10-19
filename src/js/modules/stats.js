import {
    getResource
} from '../services/requests';

const tops = () =>{
    try{
    const tbody = document.querySelector('.tbody-stats'),
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
            if(name == localStorage.getItem('name')){
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
            }
        });
        tableUpdate(all);
    }
    
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
}catch(e){}
};

export default tops;