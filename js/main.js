window.onload = inicio;

/*window.onload = function(){
	//var texto = "\"hola mundo\""; //"Let's Go!";//'"hola mundo"';
	var texto = "Mensaje\n de\n varias\n lineas";
	alert(texto);
}*/

function inicio()
{
	var mensaje = "Escoja la operacion asi:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Potencia\n6. Raiz\n ";
	/*mensaje = mensaje + "\n1. Suma";
	mensaje = mensaje + "\n2. Resta";
	mensaje = mensaje + "\n3. Multiplicacion";
	mensaje = mensaje + "\n4. Division";
	mensaje = mensaje + "\n5. Potencia";
	mensaje = mensaje + "\n6. Raiz\n ";*/
	
	var operacion = prompt(mensaje);
	var a, b;//Declaracion
	// TODO LO QUE SE INGRESA CON EL TECLADO ES DE TIPO CADENA

	operacion = Number(operacion);//NaN

	if(operacion==1 || operacion==2 || operacion==3 || operacion==4 || operacion==5 || operacion==6)
	{
		a = prompt("Ingrese a");
		b = prompt("Ingrese b");
		a = Number(a);
		b = Number(b);
		//Identacion del codigo, para darle orden

		if(a != NaN && b!=NaN)
		{
			if(operacion == 1)
			{
				alert(a+b);
			}
			else
			{
				if(operacion == 2)
				{	
					alert(a-b);
				}
				else  
				{
					if(operacion == 3)
					{	
						alert(a*b);
					}
					else
					{
						if(operacion == 4)
						{	
							if(b != 0)
							{
								alert(a/b);
							}
							else
							{
								alert("Error: Division por cero");
							}
						}
						else
						{
							if(operacion == 5)
							{
								alert("Potencia");
							}
							else
							{
								if(operacion == 6)
								{
									alert("Raiz");
								}
								else{
									alert("Error: Operacion no valida");
								}
							}
						}		
					}	
				}
			}
		}
		else
		{
			alert("Error en el ingreso de datos")
		}
	}
	else
	{
		alert("Error en la seleccion de la operacion");
	}
	// document.writeln(typeof a);
	// document.writeln(typeof b);

	//NaN - Not a Number


	/*

	c = a + b;

	document.write(c);*/

	/*//Declaracion de variables
	var a;
	var b;
	var c;

	//Inicializacion
	a = 5;
	b = 2;

	//Operacion y asignacion
	c = a + b;

	//Impresion en consola
	console.log("suma",c);

	//Asignacion o reasignacion o inicializacion
	a = 24;
	b = 2;

	//Operacion y asignacion
	c = a-b;

	//Escritura en el documento, html concatenado con una variable que es c
	document.write("<h2>"+c+"</h2>");

	//Asignacion o reasignacion o inicializacion
	a = 24;
	b = 2;

	//Operacion y asignacion
	c = a*b;

	//Impresion de alerta
	alert("La multiplicacion es "+c);*/


	// document.write("<h1 id='titulo'>Mensaje</h1>");
	// document.write("<p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Rerum soluta perferendis corporis dolores, sit corrupti nam consequatur explicabo aut debitis nemo ullam harum a, eos impedit ut! Eos quod, ullam.</p>");
	//document.getElementById("mensaje").innerHTML = "<marquee>Texto desde javascript</marquee>";
	//document.write("<p>lorem</p>")
}
/*
1. Crear dos variables
2. Asignarles dos valores
3. Imprimir, la suma, la resta y la multiplicacion
4. Imprima usando 3 procedimientos diferentes
*/

/*1. sumar
2. restar
3. multiplicar
4. dividir
5. potencia
6. raiz*/