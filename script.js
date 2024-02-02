// get data and show in outBox 
var toDoData = [];

// const toDoData=[];
function toDoList() {



    let data = document.getElementById("txtData").value;
    console.log(data);


    toDoData.push(data);
    console.log("toDoData", toDoData)

    document.getElementById("box1").innerHTML += '<div style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;padding: 0.5rem;text-align: left;   "   >' + data + '</div>' + '</br>';

    document.getElementById("txtData").value = "";
}

// ye data ki jagah tha 



























