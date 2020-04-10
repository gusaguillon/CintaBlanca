// Entrada de datos
let nombre = document.getElementById("nombre")
let telefono = document.getElementById("telefono")
let pina = document.getElementById("inputGroupSelect01")
let direccion = document.getElementById("direccion")

// Salida de datos
let datoNombre = document.getElementById("datoNombre")
let datoTelefono = document.getElementById("datoTelefono")
let datoDireccion = document.getElementById("datoDireccion")
let datoPizza = document.getElementById("datoPizza")

// Imagenes Pizza
let pizzaH = document.getElementById("pizzaH")
let pizzaP = document.getElementById("pizzaP")

// Boton
let pizza = document.getElementById("pizza")

// Card
let card = document.getElementById("card")


// Funcion
const pedirPizza = () => {
    

    card.classList.remove("customCard") //Remueve la clase none en el CSS

    if(nombre.value === "" || telefono.value === "" || direccion.value === "" || inputGroupSelect01.value === "Seleciona si te gusta la piña"){
        datoNombre.innerHTML = "Te "
        datoTelefono.innerHTML = "faltan datos "
        datoDireccion.innerHTML = "por completar."
        pizzaP.classList.add("noPizza")
        pizzaH.classList.add("noPizza")
    }else{
        datoNombre.innerHTML = "Hola " + nombre.value
        datoTelefono.innerHTML = "Este es tu teléfono " + telefono.value
        datoDireccion.innerHTML = " Tu pedido llegara a " + direccion.value
   
    if(inputGroupSelect01.value === "1"){
        datoPizza.innerHTML = ":D"
        pizzaH.classList.remove("noPizza")
        pizzaP.classList.add("noPizza")

     }   else if (inputGroupSelect01.value === "2"){
        datoPizza.innerHTML = ":("
        pizzaP.classList.remove("noPizza")
        pizzaH.classList.add("noPizza")
    }   else{
        datoPizza.innerHTML = ""
        pizzaP.classList.add("noPizza")
        pizzaH.classList.add("noPizza")
    }

    }
}

// Llamar funcion
pizza.addEventListener("click" , pedirPizza)

