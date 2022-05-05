//identifico al boton
const boton = document.querySelector(".boton");
//cuando le den click se crea una funcion que identifica los input y los resta
boton.addEventListener("click", () => {
	let contenedor = document.querySelector(".contenedor");
	let precioUno = document.querySelector(".input-uno").value;
	let precioDos = document.querySelector(".input-dos").value;
	let total = document.querySelector(".total");

	let res = precioDos - precioUno;

	total.innerHTML = "Su vuelto es de: $" + res;

});