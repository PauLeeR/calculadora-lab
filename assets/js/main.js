$(document).ready(function() {  /*este es el código que utilizaremos para nuestra calculadora*/
	$("input:button").click(function(){ /*al hacer click en los input button se ejecuta esta función*/
		btn = $(this).val();  //guarda el valor del input button q se presiona gracias a "this"
		pantalla = $("#resultado").val(); //guarda el valor que mostrará en la calculadora
		if(btn=="C"){
			$("#resultado").val(""); //si se presiona "C" la pantalla se muestra en blanco
		}else{
			if(btn=="="){//si se presiona "=", evalúa lo q está guardado en "pantalla" y gracias a "eval" resuelve la operación
				$("#resultado").val(eval(pantalla)); //"eval" funciona con las operaciones matemáticas básicas y nos ahorra código que, de no usar jquery, tendríamos que crear para cada operación matemática
			}else{
				$("#resultado").val(pantalla + btn);//si se presiona otro botón, ingresa su valor y los concatena con los que ya estaban en pantalla
			}
		}
	})
});