var puesto_actual;
var id_actual;
var id_boton;
var reservas;
var hora_actual;
var horario;

window.onload = init;

function init()
{
	//pintarCuadricula();
	cerrar.addEventListener("click",cerrarVentana);
	hora_actual = localStorage.getItem("hora");
	cargarReserva();
}

function cargarReserva(){
	var puesto, usuario;
	reservas = [];

	if(localStorage.getItem("horario")!=null)
	{
		horario = JSON.parse(localStorage.getItem("horario"));
		reservas = (horario[hora_actual]==null)?[]:horario[hora_actual];

		if(reservas!=null)
		{
			for(var i=1;i<=9;i++)//i = i + 1
			{
				if(reservas[i]!=null)
				{
					puesto = document.getElementById("puesto_"+i);			
					usuario = reservas[i];
					actualizarEstado(puesto,usuario);
				}
			}
		}
	}
	else{
		horario = [];
	}
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}

function mostrarVentana(datos)
{
	id_actual = "puesto_"+datos.numero;
	id_boton = datos.numero;
	puesto_actual = document.getElementById(id_actual);
	ventana.className = "ligthbox";
	input_name.value = datos.nombre?datos.nombre:"";
}

function crearReserva(numero){
	mostrarVentana({nombre:"",numero:numero});
}

function editarReserva(numero){
	mostrarVentana({nombre:reservas[numero].nombre,numero:numero});	
}

function eliminarReserva(numero){
	alert("Se va a eliminar "+numero);
}

function actualizarEstado(puesto,usuario)
{
	 var temp;
	  puesto.className = "reservado";
		temp = "<h2>Reservado</h2>"+usuario.nombre;
		temp += '<img class="btn_editar" onClick="editarReserva('+usuario.id+');" src="imgs/btn_editar.svg" alt="">';
		temp += '<img src="imgs/btn_eliminar.svg" onClick="eliminarReserva('+usuario.id+');" class="btn_eliminar" alt="">';
		puesto.innerHTML = temp;
}

function reservar(){
	var usuario;
	if(input_name.value!="")
	{
		usuario = {nombre:input_name.value,id:id_boton};
		actualizarEstado(puesto_actual,usuario);
		reservas[id_boton] = usuario;
		horario[hora_actual] = reservas;
		localStorage.setItem("horario",JSON.stringify(horario));
		cerrarVentana();
	}
	else
	{
		alert("Error, introduzca el nombre de la reserva");
	}
}
