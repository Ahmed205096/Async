async function getData(){

    let clients = ["client1","client2","client3"];
    if (clients.length != 0){
        return "Accepted";
    }
    else{
        return Error("Rejected");
    }
}

console.log(getData());

getData()
    .then
    (
        (result) => {console.log(result);},
        (rej) => {console.log(rej);}
    );