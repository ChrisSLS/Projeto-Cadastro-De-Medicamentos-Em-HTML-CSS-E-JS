var medicines = [];

function addMed(){
    event.preventDefault();
    
    let newMed ={
        "medName": document.getElementById("mName").value,
        "qtdValue": document.getElementById("qValue").value,
        "medClass": document.getElementById("mClass").value 

    }
    resetForm();
    medicines.push(newMed);
    renderTable();
    }

    function removeMed(index){
        medicines.splice(index,1);
        renderTable();
    }

    function renderTable(){
        let table = document.getElementById("dataTable");
        table.innerHTML = ` <tr>
        <th>ID</th>
        <th>Medicamento</th>
        <th>Quantidade</th>
        <th>Classe do Remédio</th>
        <th>Remover</th>

        </tr>`;

        console.log(medicines.length);

        for(let i = 0; i < medicines.length; i++){

            table.innerHTML = table.innerHTML + `<tr>
            <td>${i}</td>
            <td>${medicines[i].medName}</td>
            <td>${medicines[i].qtdValue}</td>
            <td>${medicines[i].medClass}</td>
            <td><img id="remove" src="assets/images/remove.png" width="25px" height="25px" onclick="removeMed(${i})"></td>

            </tr>`
        }

    }

    function resetForm(){
        document.getElementById("mName").value
        document.getElementById("qValue").value
        document.getElementById("mClass").value
    }
    
    renderTable();

