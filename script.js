

let sliders = ['slide-1', 'slide-2', 'slide-3','slide-4']
let audios_sond = ['Audio1', '', '']
//Arrays Para configurar los numeros.
let respuestasJuegoDemo = [5, 3, 7, 4, 4, 1, 4]
let respuestasJuegoActividad1 = [
	{numerador:[6,3,5,-2,18,10,8]},
	{denominador:[5,3,15]},
	{operacion1:[18,-10]},
	{operacion2:[15]},
	{resultado:[8,15]}
]
let respuestasJuegoActividad2 = [8, -15, 6, 12, 12, -1, 12]

let presentacion_slide = 0
let audio;
let audioOvers;
let audiosBotonesOver;
let path_sound = './public/sounds/'

let numerador = false;
let denominador = false;
let operacion1 = false;
let operacion2 = false;
let camposValidos = false;



function init() {
	document.body.addEventListener('keyup', presentacionteclado, false)
	document.getElementById('siguiente').addEventListener('mouseover', btnSoundOver, false)
	document.getElementById('siguiente').addEventListener('mouseout', btnSoundOut, false)
	document.getElementById('atras').addEventListener('mouseover', btnSoundOver, false)
	document.getElementById('atras').addEventListener('mouseout', btnSoundOut, false)
	document.getElementById('repetir2').addEventListener('mouseover', btnSoundOver, false)
	document.getElementById('repetir2').addEventListener('mouseout', btnSoundOut, false)
	document.getElementById('btnComprobar').addEventListener('mouseover', btnSoundOver, false)
	document.getElementById('btnComprobar').addEventListener('mouseout', btnSoundOut, false)
	cargarAudio();
}



function btnSoundOver() {
	audioOvers = new Audio(`${path_sound}61.mp3`);
	audioOvers.play();
}

function btnSoundOut() {
	audioOvers.pause();
}

function presentacionteclado(e) {


	if (e.keyCode == 39) {

		siguiente()
	}

	if (e.keyCode == 37) {
		if (getCurrentSlider() == 0 || getCurrentSlider() == 2) {

		} else {
			atras()
		}

	}


	if (e.keyCode == 13 && presentacion_slide == sliders.length - 1) {
		comprobar()
	}


}

function cargarAudio(loop = false) {
	if (audios_sond[presentacion_slide] != null || audios_sond[presentacion_slide] != undefined) {
		audio = new Audio(`${path_sound}${audios_sond[presentacion_slide]}.mp3`);
		audio.loop = loop
		audio.play();
	}

}

function changeSound(new_sond) {
	if (audios_sond[presentacion_slide] != null || audios_sond[presentacion_slide] != undefined) {
	audio.src = `${path_sound}${new_sond}.mp3`;
	audio.pause();
	audio.load();
	audio.play();
	audio.addEventListener('ended', function () {

	});
}
}


function presentacion() {
	if (presentacion_slide == 0) {
		document.getElementById('siguiente').style.display = "inline-block"
		document.getElementById('atras').style.visibility = "hidden"
		//document.getElementById('visubility').style.display = "inline-block"

	} /* else if (presentacion_slide == sliders.length - 3) {
		document.getElementById('siguiente').style.display = "none"
		//document.getElementById('atras').style.display = "none"
		document.getElementById('atras').style.visibility = "hidden"
		document.getElementById('siguiente').style.display = "none"
	/* 	changeSound(audios_sond[presentacion_slide]) */
	//} 
	else {
		document.getElementById('siguiente').style.display = "none"
		document.getElementById('atras').style.display = "none"
		document.getElementById('atras').style.visibility = "visible"
		document.getElementById('actividad').style.display = "none"

	}
	/* console.log(`slide-${presentacion_slide}`);*/
}


function siguiente() {
	if (presentacion_slide == sliders.length - 1) {
	} else {
		presentacion_slide++
		document.getElementById(sliders[presentacion_slide - 1]).style.display = "none"
		document.getElementById(sliders[presentacion_slide]).style.display = "block"
		audioOvers = new Audio(`${path_sound}60.mp3`);
		audioOvers.play();
		presentacion()
	}
}

function atras() {
	presentacion_slide--
	document.getElementById(sliders[presentacion_slide + 1]).style.display = "none"
	document.getElementById(sliders[presentacion_slide]).style.display = "block"
	audioOvers = new Audio(`${path_sound}60.mp3`);
	audioOvers.play();
	presentacion()
}

function getCurrentSlider() {
	return presentacion_slide
}

function ReiniciarActividad() {

}


function ReiniciarVariablesActividad() {

	numerador = false;
	denominador = false;
	operacion1 = false;
	operacion2 = false;
	camposValidos = false;
	switch (getCurrentSlider()) {
		case 1:
			document.getElementById('resultado-2').classList.remove('imagen-correcta')
			document.getElementById('resultado-2').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-1').classList.remove('imagen-correcta')
			document.getElementById('resultado-1').classList.remove('imagen-incorrecta')
			break;

		case 2:
			document.getElementById('resultado-3-actividad1').classList.remove('imagen-correcta')
			document.getElementById('resultado-3-actividad1').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-2-actividad1').classList.remove('imagen-correcta')
			document.getElementById('resultado-2-actividad1').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-1-actividad1').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad1').classList.remove('imagen-incorrecta')
			break;
		case 3:
			document.getElementById('resultado-2-actividad2').classList.remove('imagen-correcta')
			document.getElementById('resultado-2-actividad2').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-1-actividad2').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad2').classList.remove('imagen-incorrecta')
			break;

		default:
			break;
	}

	document.getElementById('mensajeActividadDemo').style.visibility = 'hidden'
	document.getElementById('mensajeActividad').style.visibility = 'hidden'
}

function loadArrayInputsDemo() {

	let input1Demo = document.getElementById('demo1').value//InputFormula1-0
	let input2Demo = document.getElementById('demo2').value//InputFormula2-1
	let input3Demo = document.getElementById('demo3').value//InputFormula3-2
	let input4Demo = document.getElementById('demo4').value//Resultado1-3
	let input5Demo = document.getElementById('demo5').value//Resultado2-4
	let input6Demo = document.getElementById('demo6').value//InputFormula4-5
	return [input1Demo, input2Demo, input3Demo, input4Demo, input5Demo, input6Demo]
}

function loadArrayInputsActividad1() {
	let input1 = document.getElementById('input1').value
	let input2 = document.getElementById('input2').value
	let input3 = document.getElementById('input3').value
	let input4 = document.getElementById('input4').value
	let input5 = document.getElementById('input5').value
	let input6 = document.getElementById('input6').value
	let input7 = document.getElementById('input7').value
	let input8 = document.getElementById('input8').value
	let input9 = document.getElementById('input9').value
	let input10 = document.getElementById('input10').value
	let input11 = document.getElementById('input11').value
	return [
		input1,//0
		input2,//1
		input3,//2 
		input4,//3 
		input5, //4
		input6, //5
		input7,//6
		input8,//7 
		input9, //8
		input10,//9
		input11//10
	]
}

function loadArrayInputsActividad2() {

	let input1Actividad2 = document.getElementById('InputB1').value//InputFormula1-0
	let input2Actividad2 = document.getElementById('InputB2').value//InputFormula2-1
	let input3Actividad2 = document.getElementById('InputB3').value//InputFormula3-2
	let input4Actividad2 = document.getElementById('InputB4').value//Resultado1-3
	let input5Actividad2 = document.getElementById('InputB5').value//Resultado2-4
	let input6Actividad2 = document.getElementById('InputB6').value//InputFormula4-5
	return [input1Actividad2, input2Actividad2, input3Actividad2, input4Actividad2, input5Actividad2, input6Actividad2]
}

function mostrarMensajeActividad() {
	switch (getCurrentSlider()) {
		case 1:
			document.getElementById('mensajeActividadDemo').style.visibility = 'visible'
			document.getElementById('mensajeActividadDemo').style.color = 'red'
			break;

		case 2:
			document.getElementById('mensajeActividad').style.visibility = 'visible'
			document.getElementById('mensajeActividad').style.color = 'red'
			break;
		case 3:
			document.getElementById('mensajeActividad2').style.visibility = 'visible'
			document.getElementById('mensajeActividad2').style.color = 'red'
			break;

		default:
			break;
	}
}

function ocultarMensajeActividad() {
	switch (getCurrentSlider()) {
		case 1:
			document.getElementById('mensajeActividadDemo').style.visibility = 'hidden'
			document.getElementById('mensajeActividadDemo').style.color = 'red'
			break;

		case 2:
			document.getElementById('mensajeActividad').style.visibility = 'hidden'
			document.getElementById('mensajeActividad').style.color = 'red'
			break;

		default:
			break;
	}
}

function comprobar() {
	//Inputs actividad

	//Inputs demo 

	let arrayvalidador;
	switch (getCurrentSlider()) {
		case 1:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsDemo()
			Actividad1(arrayvalidador);
			break;

		case 2:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsActividad1()
			Actividad2(arrayvalidador);
			break;
		case 3:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsActividad2()
			Actividad3(arrayvalidador);
			break;

		default:
			break;
	}





}


function Actividad1(arrayInputs) {
	let resultadofind = arrayInputs.includes("")


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//Validamos las 3 primaras cajas.
		if (arrayInputs[0] == respuestasJuegoDemo[0] && arrayInputs[1] == respuestasJuegoDemo[1] && arrayInputs[2] == respuestasJuegoDemo[2]) {
			operacion1 = true
		} else {
			operacion1 = operacion1
		}


		//validamos la ultima caja de la formula.
		if (arrayInputs[5] == respuestasJuegoDemo[3]) {
			operacion2 = true
		} else {
			operacion2 = operacion2
		}

		if (operacion1 && operacion2) {
			/* document.getElementById('contenedorResultado').style.visibility = "visible" */
			document.getElementById('resultado-1').classList.add('imagen-correcta')

			console.log(arrayInputs[5], ((respuestasJuegoDemo[0] + respuestasJuegoDemo[1]) - respuestasJuegoDemo[2]));

			if (arrayInputs[3] == ((respuestasJuegoDemo[0] + respuestasJuegoDemo[1]) - respuestasJuegoDemo[2])) {
				numerador = true
			} else {
				numerador = numerador
			}

			if (arrayInputs[5] == respuestasJuegoDemo[6]) {
				denominador = true
			} else {
				denominador = denominador
			}
			if (numerador == true && denominador == true) {
				document.getElementById('btnContinuar-demo').classList.remove('enabled')
				document.getElementById('contenedorResultado').style.visibility = "visible"
				document.getElementById('resultado-2').classList.add('imagen-correcta')

			}
			else {
				document.getElementById('btnContinuar-demo').classList.add('enabled')
				document.getElementById('contenedorResultado').style.visibility = "visible"
				document.getElementById('resultado-2').classList.add('imagen-incorrecta')


			}
		} else {
			document.getElementById('resultado-1').classList.add('imagen-incorrecta')
		}

	}
}

function Actividad2(arrayInputs) {
	let resultadofind = arrayInputs.includes("")


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//validamos Inputs 1-2-3-4
		//Validamos numeradoees
		
		
		if(arrayInputs[0] == respuestasJuegoActividad1[0].numerador[0]){
			if(arrayInputs[1] == respuestasJuegoActividad1[0].numerador[1]){
				if(arrayInputs[2] == respuestasJuegoActividad1[0].numerador[2]){
					if(arrayInputs[3] == respuestasJuegoActividad1[0].numerador[3]){
						operacion1 = true
					}else{
						operacion1 = operacion1
					
					}
				}
			}
		}
	
		//Validamos operacion1 denominadores.
		if (arrayInputs[7] == respuestasJuegoActividad1[1].denominador[0]){
			if(arrayInputs[8] == respuestasJuegoActividad1[1].denominador[1]){
				operacion2 = true
			}else{
				operacion2 = operacion2
			}
		}



		//validamos la denominadores.
		if (operacion1 && operacion2) {
			document.getElementById('resultado-1-actividad1').classList.add('imagen-correcta')


			if (arrayInputs[4] == respuestasJuegoActividad1[2].operacion1[0] && arrayInputs[5]==respuestasJuegoActividad1[2].operacion1[1]) {
				numerador = true
			} else {
				numerador = numerador
			}

			if (arrayInputs[10] == respuestasJuegoActividad1[3].operacion2[0]) {
				denominador = true
			} else {
				denominador = denominador
			}


			if (numerador == true && denominador == true) {
				document.getElementById('btnContinuar').classList.remove('enabled')
				document.getElementById('contenedorResultado').style.visibility = "visible"
				document.getElementById('resultado-2-actividad1').classList.add('imagen-correcta')
				if(arrayInputs[6]==respuestasJuegoActividad1[4].resultado[0] && arrayInputs[9]==respuestasJuegoActividad1[4].resultado[1] ){
					document.getElementById('btnContinuar').classList.remove('enabled')
					document.getElementById('contenedorResultado').style.visibility = "visible"
					document.getElementById('resultado-3-actividad1').classList.add('imagen-correcta')
				}else {
					document.getElementById('btnContinuar').classList.add('enabled')
					document.getElementById('contenedorResultado').style.visibility = "visible"
					document.getElementById('resultado-3-actividad1').classList.add('imagen-incorrecta')
				}
				
			}
			else {
				document.getElementById('btnContinuar').classList.add('enabled')
				document.getElementById('contenedorResultado').style.visibility = "visible"
				document.getElementById('resultado-2-actividad1').classList.add('imagen-incorrecta')
			}

			
		} else {
			document.getElementById('resultado-1-actividad1').classList.add('imagen-incorrecta')
		}

	}
}

function Actividad3(arrayInputs) {

	let resultadofind = arrayInputs.includes("")


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//Validamos las 3 primaras cajas.
		if (arrayInputs[0] == respuestasJuegoActividad2[0] && arrayInputs[1] == respuestasJuegoActividad2[1] && arrayInputs[2] == respuestasJuegoActividad2[2]) {
			operacion1 = true
		} else {
			operacion1 = operacion1
		}


		//validamos la ultima caja de la formula.
		if (arrayInputs[5] == respuestasJuegoActividad2[3]) {
			operacion2 = true
		} else {
			operacion2 = operacion2
		}

		if (operacion1 && operacion2) {
			/* document.getElementById('contenedorResultado').style.visibility = "visible" */
			document.getElementById('resultado-1-actividad2').classList.add('imagen-correcta')
			
			console.log(arrayInputs[3], respuestasJuegoActividad2[0] + (respuestasJuegoActividad2[1]) + respuestasJuegoActividad2[2]);
			console.log(arrayInputs[3], respuestasJuegoActividad2[0], respuestasJuegoActividad2[1],respuestasJuegoActividad2[2]);

			if (arrayInputs[3] == ((respuestasJuegoActividad2[0] + (respuestasJuegoActividad2[1])) + respuestasJuegoActividad2[2])) {
				numerador = true
			} else {
				numerador = numerador
			}

			if (arrayInputs[5] == respuestasJuegoActividad2[6]) {
				denominador = true
			} else {
				denominador = denominador
			}
			if (numerador == true && denominador == true) {
				document.getElementById('btnContinuar').classList.remove('enabled')
				document.getElementById('contenedorResultado-actividad2').style.visibility = "visible"
				document.getElementById('resultado-2-actividad2').classList.add('imagen-correcta')

			}
			else {
				document.getElementById('btnContinuar').classList.add('enabled')
				document.getElementById('contenedorResultado-actividad2').style.visibility = "visible"
				document.getElementById('resultado-2-actividad2').classList.add('imagen-incorrecta')


			}
		} else {
			document.getElementById('resultado-1-actividad2').classList.add('imagen-incorrecta')
		}

	}
}

function repetirTextosEscena(slide) {
	location.reload()
}

function continuar() {
	document.getElementById('input1').value = ""
	document.getElementById('input2').value = ""
	document.getElementById('input3').value = ""
	document.getElementById('input4').value = ""
	document.getElementById('input5').value = ""
	document.getElementById('input6').value = ""
	document.getElementById('input7').value = ""
	document.getElementById('input8').value = ""
	document.getElementById('input9').value = ""
	document.getElementById('input10').value = ""
	document.getElementById('input11').value = ""
	document.getElementById('btnContinuar').classList.add('enabled')
	ReiniciarVariablesActividad()
}