function message() {

    let string = document.getElementById('mensaje').value;
    let offset = parseInt(document.getElementById('valor').value);
    
    document.getElementById('decodificado').value = cipher.encode(string,offset);
}

function message1() {

    let string = document.getElementById('mensaje').value;
    let offset = parseInt(document.getElementById('valor').value);
    
    document.getElementById('decodificado').value = cipher.decode(string,offset);
}

    
    