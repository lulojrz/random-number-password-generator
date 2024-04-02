const boton = document.querySelector("button")
const respuesta = document.getElementById("respuesta")
const copy = document.getElementById("copy")

boton.addEventListener("click", function () {


    let contraseña = Math.trunc(Math.random() * 100000000000)
    console.log(contraseña)
    respuesta.innerHTML = contraseña 

}


)
copy.addEventListener("click", function() {

navigator.clipboard.writeText(respuesta.textContent)

})

32881577511