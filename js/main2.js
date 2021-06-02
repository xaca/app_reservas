window.onload = init;

function init()
{
	//pintarCuadricula();
	cerrar.addEventListener("click",cerrarVentana);
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}

function crearReserva(numero){
	//alert(numero);
	ventana.className = "ligthbox";
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