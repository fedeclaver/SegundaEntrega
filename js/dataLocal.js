function appendObjectToLocalStorage(obj,nombre) {
    let  objets = [],
        data = localStorage.getItem(nombre);

    if (data !== null || data != "[]") {
        users = JSON.parse(data);
    }

    objets.push(obj);

    localStorage.setItem(nombre, JSON.stringify(objets));

}



function loadFromLocalStorage(nombre) {
    let objets = [],
        data = localStorage.getItem(nombre);
      

    if (data !== null) {
        objets = JSON.parse(data);
    }
      
    return objets
}

function removeFromLocalStorage(nombre){
    let  objets = [],
        data = localStorage.getItem(nombre);

        objets = JSON.parse(data);

        objets.splice(nombre, 1);

    localStorage.setItem(nombre, JSON.stringify(objets));


}
