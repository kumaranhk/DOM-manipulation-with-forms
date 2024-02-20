function addData(){
    event.preventDefault();

    let names = ["first-name", "last-name", "address", "pincode", "inputCity", "inputState" ]
    let values = []
    for(let i of names){
    // console.log(!document.querySelector(`#${i}`).value)
        if(!document.querySelector(`#${i}`).value){
        values.push("No Data")
        } else {
        values.push(document.querySelector(`#${i}`).value)
        }
    }
    values.push(document.querySelector('input[name="options-outlined"]:checked')?.value ||  "No Data")
    
    let f = [];
    const foodCheckboxes = document.querySelectorAll('.food input[type="checkbox"]:checked');
    foodCheckboxes.forEach(function(checkbox) {
        f.push(checkbox.value );
    });
    if(f.length < 2){
        alert("Choose altleat two food");
    }
    else{
        values.push(f)
        const tableBody = document.querySelector("#dataTable tbody");
        const newRow = tableBody.insertRow(-1);

        for (let i = 0; i < values.length ; i++){
            const cell = newRow.insertCell(i);
            cell.innerHTML = values[i];
        }
        document.getElementById("form").reset();
        const noDataRow = document.querySelector("#dataTable .no-data");
        noDataRow.style.display = tableBody.rows.length > 0 ? "none" : "table-row";
        }
    return false;
}