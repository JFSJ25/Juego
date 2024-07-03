//let cf = confirm("Quieres jugar a adivina el numero?");

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector(".button");
    button.addEventListener("click", () => {
        let numSecret = Math.trunc(Math.random() * 100 + 1);
        alert("Adivina un numero del 1 al 100");

        for (var numIn = 0, intentos = 10; numIn !== numSecret && intentos > 0; intentos--) {
            numIn = parseInt(prompt("Ingresa un número (tienes " + intentos + " intentos)"));
            if (intentos > 1 && numIn != numSecret) {
                if (numIn > numSecret) {
                    alert("Te pasate")
                } else {
                    alert("Te falta")
                }
            }
        }
        if (intentos > 0) {
            alert("Adivinaste el numero en " + (10 - intentos) + " intentos");
        } else {
            alert("FALLASTE, el numero era " + numSecret);
        }
        button.textContent = "INTENTAR DE NUEVO";
        button.style.width = "250px";
        button.style.height = "80px";
    })
});

/*while (cf == true) {
    
    cf = confirm("Deseas intentar de nuevo?");
}*/