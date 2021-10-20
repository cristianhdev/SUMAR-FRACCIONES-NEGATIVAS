

let sliders = ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5', 'slide-6', 'slide-7', 'slide-8', 'slide-9']
let audios_sond = ['Audio1', '', '']
//Arrays Para configurar los numeros.
let respuestasJuegoDemo = [5, 3, 7, 4, 4, 1, 4]
let respuestasJuegoActividad1 = [
	{ numerador: [6, 3, 5, -2, 18, 10, 8] },
	{ denominador: [5, 3, 15] },
	{ operacion1: [18, -10] },
	{ operacion2: [15] },
	{ resultado: [8, 15] }
]

let respuestasJuegoActividad2 = [
	8,//numerador
	-15,// numerador
	6,// numerador
	12, // denominador
	-1, // numerador
	12 // denominador
]



let respuestasJuegoActividad5 = [
	72,//numerador
	15,//numerador
	80,//numerador
	120, //denominador
	167,//numerador
	120//denominador
]
let respuestasJuegoActividad6 = [35, 147, 135, 105, 317, 105]
let respuestasJuegoActividad7 = [75, 36, 80, 30, 191, 30]
let respuestasJuegoActividad4 = [
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
let operacion3 = false;
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

	} else if (presentacion_slide == sliders.length - 1) {
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
	operacion3 = false;
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
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-1 div .input')
			Actividad1(arrayvalidador);
			break;

		case 2:
			ReiniciarVariablesActividad()
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-2 div .input')
			Actividad2(arrayvalidador);
			break;
		case 3:
			ReiniciarVariablesActividad()
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-3 div .input')
			ActividadTresFraccionarios(arrayvalidador, 'resultado-1-actividad2', 'resultado-2-actividad2', 'btnContinuar2', 'contenedorResultado-actividad2', respuestasJuegoActividad2);
			break;
		case 4:
			ReiniciarVariablesActividad()
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-4 div .input')
			Actividad4(arrayvalidador, 'resultado-1-actividad3', 'resultado-2-actividad3', 'contenedorResultado-actividad3');
			break;
		case 5:
			ReiniciarVariablesActividad()
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-5 div .input')
			ActividadTresFraccionarios(arrayvalidador, 'resultado-1-actividad4', 'resultado-2-actividad4', 'btnContinuar4', 'contenedorResultado-actividad4', respuestasJuegoActividad4);
			break;
		case 6:
			ReiniciarVariablesActividad()
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-6 div .input')
			ActividadTresFraccionarios(arrayvalidador, 'resultado-1-actividad5', 'resultado-2-actividad5', 'btnContinuar5', 'contenedorResultado-actividad5', respuestasJuegoActividad5);
			break;
		case 7:
			ReiniciarVariablesActividad()
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-7 div .input')
			ActividadTresFraccionarios(arrayvalidador, 'resultado-1-actividad6', 'resultado-2-actividad6', 'btnContinuar6', 'contenedorResultado-actividad6', respuestasJuegoActividad6);
			break;
		case 8:
			ReiniciarVariablesActividad()
			arrayvalidador = document.querySelectorAll('.contenedor-inputs-8 div .input')
			ActividadTresFraccionarios(arrayvalidador, 'resultado-1-actividad7', 'resultado-2-actividad7', 'btnContinuar7', 'contenedorResultado-actividad7', respuestasJuegoActividad7);
			break;

		default:
			break;
	}





}


function validarCamposVacios(Inputs){
	let valoresInput = []

	Inputs.forEach((element) => {
		valoresInput.push(element.value)
	})

	return valoresInput.includes("")
}

function Actividad1(arrayInputs) {
	

	let resultadofind = validarCamposVacios(arrayInputs)


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()
	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//Validamos las 3 primaras cajas.
		if (arrayInputs[0].value == respuestasJuegoDemo[0] && arrayInputs[1].value == respuestasJuegoDemo[1] && arrayInputs[2].value == respuestasJuegoDemo[2]) {
			operacion1 = true
		} else {
			operacion1 = operacion1
		}

		
		//validamos la ultima caja de la formula.
		if (arrayInputs[3].value == respuestasJuegoDemo[3]) {
			operacion2 = true
		} else {
			operacion2 = operacion2
		}



		if (operacion1 && operacion2) {
			/* document.getElementById('contenedorResultado').style.visibility = "visible" */
			document.getElementById('resultado-1').classList.add('imagen-correcta')
			if (arrayInputs[4].value == ((respuestasJuegoDemo[0] + respuestasJuegoDemo[1]) - respuestasJuegoDemo[2])) {
				numerador = true
			} else {
				numerador = numerador
			}
			
			if (arrayInputs[5].value == respuestasJuegoDemo[6]) {
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

	let resultadofind = validarCamposVacios(arrayInputs)


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//validamos Inputs 1-2-3-4
		//Validamos numeradoees

		if (arrayInputs[0].value == respuestasJuegoActividad1[0].numerador[0]) {

			if (arrayInputs[1].value == respuestasJuegoActividad1[0].numerador[1]) {

				if (arrayInputs[2].value == respuestasJuegoActividad1[0].numerador[2]) {

					if (arrayInputs[3].value == respuestasJuegoActividad1[0].numerador[3]) {

						operacion1 = true
					} else {
						operacion1 = operacion1

					}
				}
			}
		}

		//Validamos operacion1 denominadores.

		if (arrayInputs[4].value == respuestasJuegoActividad1[1].denominador[0]) {
	

			if (arrayInputs[5].value == respuestasJuegoActividad1[1].denominador[1]) {
				operacion2 = true
			} else {
				operacion2 = operacion2
			}
		}




		//validamos la denominadores.
		if (operacion1 && operacion2) {
			document.getElementById('resultado-1-actividad1').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad1').classList.remove('imagen-incorrecta')
			document.getElementById('resultado-1-actividad1').classList.add('imagen-correcta')


			if (arrayInputs[6].value == respuestasJuegoActividad1[2].operacion1[0] && arrayInputs[7].value == respuestasJuegoActividad1[2].operacion1[1]) {
				numerador = true
			} else {
				numerador = numerador
			}

			if (arrayInputs[8].value == respuestasJuegoActividad1[3].operacion2[0]) {
				denominador = true
			} else {
				denominador = denominador
			}


			if (numerador == true && denominador == true) {
				document.getElementById('btnContinuar').classList.remove('enabled')
				document.getElementById('contenedorResultado').style.visibility = "visible"
				document.getElementById('resultado-2-actividad1').classList.remove('imagen-correcta')
				document.getElementById('resultado-2-actividad1').classList.remove('imagen-incorrecta')
				document.getElementById('resultado-2-actividad1').classList.add('imagen-correcta')
				if (arrayInputs[9].value == respuestasJuegoActividad1[4].resultado[0] && arrayInputs[10].value == respuestasJuegoActividad1[4].resultado[1]) {
					document.getElementById('btnContinuar').classList.remove('enabled')
					document.getElementById('contenedorResultado').style.visibility = "visible"
					document.getElementById('resultado-3-actividad1').classList.remove('imagen-correcta')
					document.getElementById('resultado-3-actividad1').classList.remove('imagen-incorrecta')
					document.getElementById('resultado-3-actividad1').classList.add('imagen-correcta')
				} else {
					document.getElementById('btnContinuar').classList.add('enabled')
					document.getElementById('contenedorResultado').style.visibility = "visible"
					document.getElementById('resultado-3-actividad1').classList.remove('imagen-correcta')
					document.getElementById('resultado-3-actividad1').classList.remove('imagen-incorrecta')
					document.getElementById('resultado-3-actividad1').classList.add('imagen-incorrecta')
				}

			}
			else {
				document.getElementById('btnContinuar').classList.add('enabled')
				document.getElementById('contenedorResultado').style.visibility = "visible"
				document.getElementById('resultado-2-actividad1').classList.remove('imagen-correcta')
				document.getElementById('resultado-2-actividad1').classList.remove('imagen-incorrecta')
				document.getElementById('resultado-2-actividad1').classList.add('imagen-incorrecta')
			}
		} else {
			document.getElementById('resultado-1-actividad1').classList.remove('imagen-correcta')
			document.getElementById('resultado-1-actividad1').classList.remove('imagen-incorrecta')
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

function ActividadTresFraccionarios(arrayInputs, idresultadoOperacion1, idresultadoOperacion2, idbtnContinuar, idContenedorResultado, arrayRespuestas) {

	

	let resultadofind = validarCamposVacios(arrayInputs)


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//Validamos las 3 primaras cajas.

		if (arrayInputs[0].value == arrayRespuestas[0] && arrayInputs[1].value == arrayRespuestas[1] && arrayInputs[2].value == arrayRespuestas[2]) {
			operacion1 = true
		} else {
			operacion1 = operacion1
		}


		//validamos la ultima caja de la formula.
		if (arrayInputs[3].value == arrayRespuestas[3]) {
			operacion2 = true
		} else {
			operacion2 = operacion2
		}

		if (operacion1 && operacion2) {
			/* document.getElementById('contenedorResultado').style.visibility = "visible" */

			document.getElementById(idresultadoOperacion1).classList.add('imagen-correcta')


			if (arrayInputs[4].value == ((arrayRespuestas[0] + (arrayRespuestas[1])) + arrayRespuestas[2])) {
				numerador = true
			} else {
				numerador = numerador
			}

			if (arrayInputs[5].value == arrayRespuestas[5]) {
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
function Actividad4(arrayInputs, idresultadoOperacion1, idresultadoOperacion2, idContenedorResultado) {
	

	let resultadofind = validarCamposVacios(arrayInputs)


	if (!resultadofind) {
		camposValidos = true

	} else {
		mostrarMensajeActividad()

	}

	if (camposValidos) {
		ocultarMensajeActividad()
		//Validamos las 2 primaras cajas.
		if (arrayInputs[4].value == (parseInt(arrayInputs[0].value) * parseInt(arrayInputs[3].value))) {
			operacion1 = true
		} else {
			operacion1 = operacion1
		}


		//validamos la ultima caja de la formula.

		if (arrayInputs[5].value == (parseInt(arrayInputs[1].value) * parseInt(arrayInputs[2].value))) {
			operacion2 = true
		} else {
			operacion2 = operacion2
		}

		if (arrayInputs[6].value == (parseInt(arrayInputs[1].value) * parseInt(arrayInputs[3].value))) {
			operacion3 = true
		} else {
			operacion3 = operacion3
		}



		if (operacion1) {
			document.getElementById(idresultadoOperacion1).classList.remove('imagen-correcta')
			document.getElementById(idresultadoOperacion1).classList.remove('imagen-incorrecta')
			document.getElementById(idresultadoOperacion1).classList.add('imagen-correcta')
			if (operacion2) {
				document.getElementById(idresultadoOperacion1).classList.remove('imagen-correcta')
				document.getElementById(idresultadoOperacion1).classList.remove('imagen-incorrecta')
				document.getElementById(idresultadoOperacion1).classList.add('imagen-correcta')
				if (operacion3) {
					document.getElementById(idresultadoOperacion1).classList.remove('imagen-correcta')
					document.getElementById(idresultadoOperacion1).classList.remove('imagen-incorrecta')
					document.getElementById(idresultadoOperacion1).classList.add('imagen-correcta')
					if (parseInt(arrayInputs[7].value) == parseInt(arrayInputs[4].value) + parseInt(arrayInputs[5].value)) {
						numerador = true
					} else {
						numerador = numerador
					}

					if (parseInt(arrayInputs[8].value) == parseInt(arrayInputs[6].value)) {
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
					document.getElementById(idresultadoOperacion1).classList.remove('imagen-correcta')
					document.getElementById(idresultadoOperacion1).classList.remove('imagen-incorrecta')
					document.getElementById(idresultadoOperacion1).classList.add('imagen-incorrecta')
				}
			} else {
				document.getElementById(idresultadoOperacion1).classList.remove('imagen-correcta')
				document.getElementById(idresultadoOperacion1).classList.remove('imagen-incorrecta')
				document.getElementById(idresultadoOperacion1).classList.add('imagen-incorrecta')
			}
			/* document.getElementById('contenedorResultado').style.visibility = "visible" */
		} else {
			document.getElementById(idresultadoOperacion1).classList.remove('imagen-correcta')
			document.getElementById(idresultadoOperacion1).classList.remove('imagen-incorrecta')
			document.getElementById(idresultadoOperacion1).classList.add('imagen-incorrecta')
		}

	}
}

function repetirTextosEscena(slide) {
	location.reload()
}

function continuar() {
	document.getElementById('btnContinuar').classList.add('enabled')
	ReiniciarVariablesActividad()
}