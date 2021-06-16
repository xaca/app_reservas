var puesto_actual;
var id_actual;
var id_boton;

window.onload = init;

function init()
{
	//pintarCuadricula();
	cerrar.addEventListener("click",cerrarVentana);
	cargarReserva();
}

function cargarReserva(){
	var puesto;
	for(var i=1;i<=9;i++)
	{
		//console.log(localStorage.getItem("puesto_"+i));
		if(localStorage.getItem("puesto_"+i)!=null)
		{
			puesto = document.getElementById("puesto_"+i);
			puesto.className = "reservado";
			puesto.innerHTML = localStorage.getItem("puesto_"+i);
		}
	}
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}

function crearReserva(numero){
	id_actual = "puesto_"+numero;
	id_boton = numero;
	puesto_actual = document.getElementById(id_actual);
	ventana.className = "ligthbox";
	input_name.value = "";
}

function editarReserva(numero){
	alert(numero);
}

function reservar(){
	var temp;
	if(input_name.value!="")
	{
		puesto_actual.className = "reservado";
		temp = "<h2>Reservado</h2>"+input_name.value;
		temp += '<img class="btn_editar" onClick="editarReserva('+id_boton+');" src="imgs/btn_editar.svg" alt="">';
		puesto_actual.innerHTML = temp;
		console.log(temp);
		localStorage.setItem(id_actual,temp);
		cerrarVentana();
	}
	else
	{
		alert("Error, introduzca el nombre de la reserva");
	}
}

function pintarCuadricula(){
	
	var html = "";
	//var inicio = 1;
	var fin = 3;
	var grid = document.getElementById("cuadricula");
	var contador = 1;
	var valor = 0;
	var salon = [];
	salon[0] = [true,false,true];
	salon[1] = [false,false,true];
	salon[2] = [true,false,false];

	var fila = 0;
	var col = 0;

	console.log(salon[0][0]);
	console.log(salon[1][1]);
	console.log(salon[2][2]);

	if(localStorage.getItem("esta_logeado")=="true")
	{
		while(contador<=fin)
		{
			console.log(fila,col);
			valor = salon[0][col];
			fila = fila + 1;
			col = col + 1;

			if(valor)// if(contador%2==0)
			{
				html = html + '<input type="button" class="naranja" value="'+contador+'">';
			}
			else
			{
				html = html + '<input type="button" class="gris" value="'+contador+'">';
			}
			contador = contador + 1;
		}

		grid.innerHTML = html;

	}
	else{
		grid.innerHTML = "<h1>Esta seccion es bajo logeo</h1>";
	}


}