

let sliders = ['slide-1', 'slide-2', 'slide-3','slide-4','slide-5','slide-6','slide-7','slide-8','slide-9']
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

let respuestasJuegoActividad2 = [
	8,//numerador
	-15,// numerador
	6,// numerador
	12, // denominador
	-1, // numerador
	12 // denominador
]



let respuestasJuegoActividad4 = [
	72,//numerador
	15,//numerador
	80,//numerador
	120, //denominador
	167,//numerador
	120//denominador
]
let respuestasJuegoActividad5 = [35, 147, 135, 105, 317 , 105]
let respuestasJuegoActividad6 = [75, 36, 80, 30, 191, 30]
let respuestasJuegoActividad7 = [
	48,//Input1 - numerador
	18,//Input2 - numerador
	28,//Input3 - numerador
	36,//Input1 - denominador
	94,//Resultado - numerador
	36//Resultado - denominador
]

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
		if (getCurrentSlider() == 0) {

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
		document.getElementById('atras').style.display = "inline-block"
		//document.getElementById('visubility').style.display = "inline-block"

	}  else if (presentacion_slide == sliders.length - 1) {
		document.getElementById('siguiente').style.display = "none"
		//document.getElementById('atras').style.display = "none"
		document.getElementById('atras').style.visibility = "none"
		document.getElementById('siguiente').style.display = "none"
	/* 	changeSound(audios_sond[presentacion_slide]) */
	} 
	else {
		document.getElementById('siguiente').style.display = "none"
		//document.getElementById('atras').style.display = "none"
		document.getElementById('atras').style.visibility = "hidden"
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
		case 4:
			document.getElementById('resultado-2-actividad3').classList.remove('imagen-correcta')
			document.getElementById('resultado-2-actividad3').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-1-actividad3').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad3').classList.remove('imagen-incorrecta')
			break;
		case 5:
			document.getElementById('resultado-2-actividad4').classList.remove('imagen-correcta')
			document.getElementById('resultado-2-actividad4').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-1-actividad4').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad4').classList.remove('imagen-incorrecta')
			break;
		case 6:
			document.getElementById('resultado-2-actividad5').classList.remove('imagen-correcta')
			document.getElementById('resultado-2-actividad5').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-1-actividad5').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad5').classList.remove('imagen-incorrecta')
				break;
		case 7:
			
			document.getElementById('resultado-1-actividad6').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad6').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-2-actividad6').classList.remove('imagen-correcta')
			document.getElementById('resultado-2-actividad6').classList.remove('imagen-incorrecta')
			break;
		case 8:
			
			document.getElementById('resultado-1-actividad7').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad7').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-2-actividad7').classList.remove('imagen-correcta')
			document.getElementById('resultado-2-actividad7').classList.remove('imagen-incorrecta')
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

function loadArrayInputsActividad3() {

	let input1Actividad3 = document.getElementById('InputC1').value//InputFormula1-0
	let input2Actividad3 = document.getElementById('InputC2').value//InputFormula2-1
	let input3Actividad3 = document.getElementById('InputC3').value//InputFormula3-2
	let input4Actividad3 = document.getElementById('InputC4').value//Resultado1-3
	let input5Actividad3 = document.getElementById('InputC5').value//Resultado2-4
	let input6Actividad3 = document.getElementById('InputC6').value//InputFormula4-5
	let input7Actividad3 = document.getElementById('InputC7').value//InputFormula4-5
	return [input1Actividad3, input2Actividad3, input3Actividad3, input4Actividad3, input5Actividad3, input6Actividad3,input7Actividad3]
}


function loadArrayInputsActividad4() {
	let input1Actividad4 = document.getElementById('InputD1').value//InputFormula1-0
	let input2Actividad4 = document.getElementById('InputD2').value//InputFormula2-1
	let input3Actividad4 = document.getElementById('InputD3').value//InputFormula3-2
	let input4Actividad4 = document.getElementById('InputD4').value//Resultado1-3
	let input5Actividad4 = document.getElementById('InputD5').value//Resultado2-4
	let input6Actividad4 = document.getElementById('InputD6').value//InputFormula4-5
	return [input1Actividad4, input2Actividad4, input3Actividad4, input4Actividad4, input5Actividad4, input6Actividad4]
}

function loadArrayInputsActividad5() {
	let input1Actividad5 = document.getElementById('InputF1').value//InputFormula1-0
	let input2Actividad5 = document.getElementById('InputF2').value//InputFormula2-1
	let input3Actividad5 = document.getElementById('InputF3').value//InputFormula3-2
	let input4Actividad5 = document.getElementById('InputF4').value//Resultado1-3
	let input5Actividad5 = document.getElementById('InputF5').value//Resultado2-4
	let input6Actividad5 = document.getElementById('InputF6').value//InputFormula4-5
	return [input1Actividad5, input2Actividad5, input3Actividad5, input4Actividad5, input5Actividad5, input6Actividad5]
}

function loadArrayInputsActividad6() {
	let input1Actividad6 = document.getElementById('InputG1').value//InputFormula1-0
	let input2Actividad6 = document.getElementById('InputG2').value//InputFormula2-1
	let input3Actividad6 = document.getElementById('InputG3').value//InputFormula3-2
	let input4Actividad6 = document.getElementById('InputG4').value//Resultado1-3
	let input5Actividad6 = document.getElementById('InputG5').value//Resultado2-4
	let input6Actividad6 = document.getElementById('InputG6').value//InputFormula4-5
	return [input1Actividad6, input2Actividad6, input3Actividad6, input4Actividad6, input5Actividad6, input6Actividad6]
}

function loadArrayInputsActividad7() {
	let input1Actividad7 = document.getElementById('InputH1').value//InputFormula1-0
	let input2Actividad7 = document.getElementById('InputH2').value//InputFormula2-1
	let input3Actividad7 = document.getElementById('InputH3').value//InputFormula3-2
	let input4Actividad7 = document.getElementById('InputH4').value//Resultado1-3
	let input5Actividad7 = document.getElementById('InputH5').value//Resultado2-4
	let input6Actividad7 = document.getElementById('InputH6').value//InputFormula4-5
	return [input1Actividad7, input2Actividad7, input3Actividad7, input4Actividad7, input5Actividad7, input6Actividad7]
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
		case 4:
			document.getElementById('mensajeActividad3').style.visibility = 'visible'
			document.getElementById('mensajeActividad3').style.color = 'red'
			break;
		case 5:
			document.getElementById('mensajeActividad4').style.visibility = 'visible'
			document.getElementById('mensajeActividad4').style.color = 'red'
			break;
		case 6:
			document.getElementById('mensajeActividad5').style.visibility = 'visible'
			document.getElementById('mensajeActividad5').style.color = 'red'
			break;
		case 7:
			document.getElementById('mensajeActividad6').style.visibility = 'visible'
			document.getElementById('mensajeActividad6').style.color = 'red'
			break;
		case 8:
			document.getElementById('mensajeActividad7').style.visibility = 'visible'
			document.getElementById('mensajeActividad7').style.color = 'red'
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
		case 3:
			document.getElementById('mensajeActividad2').style.visibility = 'hidden'
			document.getElementById('mensajeActividad2').style.color = 'red'
			break;
		case 4:
			document.getElementById('mensajeActividad3').style.visibility = 'hidden'
			document.getElementById('mensajeActividad3').style.color = 'red'
			break;
		case 5:
			document.getElementById('mensajeActividad4').style.visibility = 'hidden'
			document.getElementById('mensajeActividad4').style.color = 'red'
			break;
		case 6:
			document.getElementById('mensajeActividad5').style.visibility = 'hidden'
			document.getElementById('mensajeActividad5').style.color = 'red'
			break;
		case 7:
			document.getElementById('mensajeActividad6').style.visibility = 'hidden'
			document.getElementById('mensajeActividad6').style.color = 'red'
			break;
		case 8:
			document.getElementById('mensajeActividad7').style.visibility = 'hidden'
			document.getElementById('mensajeActividad7').style.color = 'red'
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
			ActividadTresFraccionarios(arrayvalidador,'resultado-1-actividad2','resultado-2-actividad2','btnContinuar2','contenedorResultado-actividad2',respuestasJuegoActividad2);
			break;
		case 4:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsActividad3()
			Actividad4(arrayvalidador,'resultado-1-actividad3','resultado-2-actividad3','contenedorResultado-actividad3');
			break;
		case 5:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsActividad4()
			ActividadTresFraccionarios(arrayvalidador,'resultado-1-actividad4','resultado-2-actividad4','btnContinuar4','contenedorResultado-actividad4',respuestasJuegoActividad4);
			break;
		case 6:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsActividad5()
			ActividadTresFraccionarios(arrayvalidador,'resultado-1-actividad5','resultado-2-actividad5','btnContinuar5','contenedorResultado-actividad5',respuestasJuegoActividad5);
			break;
		case 7:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsActividad6()
			ActividadTresFraccionarios(arrayvalidador,'resultado-1-actividad6','resultado-2-actividad6','btnContinuar6','contenedorResultado-actividad6',respuestasJuegoActividad6);
			break;
		case 8:
			ReiniciarVariablesActividad()
			arrayvalidador = loadArrayInputsActividad7()
			ActividadTresFraccionarios(arrayvalidador,'resultado-1-actividad7','resultado-2-actividad7','btnContinuar7','contenedorResultado-actividad7',respuestasJuegoActividad7);
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

/**
 * Funcion que verifica la actividad de 3 fraccionarios de diferentes denomindador.
 * @param {Array de los inpys de la actividad} arrayInputs 
 * @param {Id del contendor de resutado operacion1} idresultadoOperacion1 
 * @param {Id del contendor de resutado operacion2} idresultadoOperacion2 
 * @param {Id del boton de continuar para la actividad.} idbtnContinuar 
 * @param {Id del contenedor resultado.} idContenedorResultado 
 * @param {Array de respuestas de la actividad} arrayRespuestas 
 */

function ActividadTresFraccionarios(arrayInputs,idresultadoOperacion1,idresultadoOperacion2,idbtnContinuar,idContenedorResultado,arrayRespuestas) {

	let resultadofind = arrayInputs.includes("")


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//Validamos las 3 primaras cajas.
		if (arrayInputs[0] == arrayRespuestas[0] && arrayInputs[1] == arrayRespuestas[1] && arrayInputs[2] == arrayRespuestas[2]) {
			operacion1 = true
		} else {
			operacion1 = operacion1
		}


		//validamos la ultima caja de la formula.
		if (arrayInputs[5] == arrayRespuestas[3]) {
			operacion2 = true
		} else {
			operacion2 = operacion2
		}

		if (operacion1 && operacion2) {
			/* document.getElementById('contenedorResultado').style.visibility = "visible" */
			
			document.getElementById(idresultadoOperacion1).classList.add('imagen-correcta')
			
			

			if (arrayInputs[3] == ((arrayRespuestas[0] + (arrayRespuestas[1])) + arrayRespuestas[2])) {
				numerador = true
			} else {
				numerador = numerador
			}

			if (arrayInputs[4] == arrayRespuestas[5]) {
				denominador = true
				
			} else {
				denominador = denominador
				
			}
			
			if (numerador == true && denominador == true) {
				document.getElementById(idbtnContinuar).classList.remove('enabled')
				document.getElementById(idContenedorResultado).style.visibility = "visible"
				document.getElementById(idresultadoOperacion2).classList.add('imagen-correcta')

			}
			else {
				
				document.getElementById(idbtnContinuar).classList.add('enabled')
				document.getElementById(idContenedorResultado).style.visibility = "visible"
				document.getElementById(idresultadoOperacion2).classList.add('imagen-incorrecta')


			}
		} else {
			document.getElementById(idresultadoOperacion1).classList.add('imagen-incorrecta')
		}

	}
}

/**
 * 
 * @param {Array que contiene los valores de los inputs} arrayInputs 
 * @param {Representa el id que  contiene el validador operacion1 (bueno o malo)} idresultadoOperacion1 
 * @param {Representa el id que  contiene el validador operacion2 (bueno o malo)} idresultadoOperacion2 
 * @param {Representa el id del contenedor que muestra el resultado} idContenedorResultado 
 */
function Actividad4(arrayInputs,idresultadoOperacion1,idresultadoOperacion2,idContenedorResultado) {
	let resultadofind = arrayInputs.includes("")


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//Validamos las 3 primaras cajas.
		if (arrayInputs[2] == (parseInt(arrayInputs[0]) * parseInt(arrayInputs[6]))) {
			operacion1 = true
		} else {
			operacion1 = operacion1
		}


		//validamos la ultima caja de la formula.
		if (arrayInputs[3]== (parseInt(arrayInputs[5]) * parseInt(arrayInputs[1]))) {
			operacion2 = true
		} else {
			operacion2 = operacion2
		}

		if (operacion1 && operacion2) {
			/* document.getElementById('contenedorResultado').style.visibility = "visible" */
			document.getElementById(idresultadoOperacion1).classList.add('imagen-correcta')

			

			if (parseInt(arrayInputs[4]) === parseInt(arrayInputs[2]) + parseInt(arrayInputs[3])) {
				numerador = true
			} else {
				numerador = numerador
			}

			if (arrayInputs[8] == arrayInputs[7]) {
				denominador = true
			} else {
				denominador = denominador
			}

			
			if (numerador == true && denominador == true) {
				document.getElementById('btnContinuar3').classList.remove('enabled')
				document.getElementById(idContenedorResultado).style.visibility = "visible"
				document.getElementById(idresultadoOperacion2).classList.add('imagen-correcta')

			}
			else {
				document.getElementById('btnContinuar3').classList.add('enabled')
				document.getElementById(idContenedorResultado).style.visibility = "visible"
				document.getElementById(idresultadoOperacion2).classList.add('imagen-incorrecta')


			}
		} else {
			document.getElementById(idresultadoOperacion1).classList.add('imagen-incorrecta')
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