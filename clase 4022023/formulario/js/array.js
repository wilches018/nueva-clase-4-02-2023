function validar() {
    const inputEdad = document.getElementById("edad");
    let edad = inputEdad.value;

    if (edad < 17) {
        alert("Usted es menor de edad");
        alertify.error('Ready!');
    } else {
        alert("Usted es mañor de edad");
        alertify.success('Ready!');
        
    }    
}