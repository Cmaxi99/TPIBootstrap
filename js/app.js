function valor(){
    const ticket = 200;
    let cant = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria').value;
    let bruto = cant * ticket;
    let descuento = 0;
    switch (categoria) {
        case "Estudiante":
            descuento = 0.8;
            break;
        case "Trainee":
            descuento = 0.5;
            break;
        case "Junior":
            descuento = 0.15;
            break;
    };

    let total = bruto - (bruto * descuento);

    document.getElementById(
    "pagar"
    ).value = `Total a Pagar: $ ${total} pesos`;

    alert(`Usted debera pagar un total de: $ ${total} pesos`);
    
}