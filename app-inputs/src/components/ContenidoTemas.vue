<template>
  <div class="recuadro-explicacion-1">
       <transition enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animated bounceOutRight">
    <div class="animate__animated animate__fadeIn" v-show="slider==1" id="slide-1">
      <div class="titulo-interactiva is-size-2 is-size-4-mobile">
        <h1
          class="animate__animated animate__fadeInLeft"
          style="text-shadow: 2px 3px 2px #a0a0ba"
        >
          Suma de números racionales
        </h1>

        <!--<img src="./public/assets/Img/images/Personaje_inicio.png" />-->
        <p
          class="
            is-size-6-mobile
            animate__animated animate__fadeIn animate_delay-s5
          "
        >
          A continuación podrás practicar haciendo varios ejercicios de Suma de
          números racionales con diferente signo.
        </p>
      </div>
    </div>
       </transition>
    <div class="animate__animated animate__fadeIn" v-show="slider==2" id="slide-2">
        <h2>Ejercicio 1</h2>
                <p>Este aplicativo nos ayudará a ejercitarnos en la multiplicación de números fraccionarios. Escribimos
                    en las casillas los números correspondientes a las fracciones que deseamos multiplicar y su
                    correspondiente desarrollo. la opción comprobar nos dará la oportunidad de varificar nuestras
                    respuestas.</p>
                    <ActividadInputs :inputsNumerados=4 :inputsDenominador=2 :inputsRespuestas=inputsValuesRespuesta></ActividadInputs>

    </div>
  </div>
</template>

<script>
export default {
    props: {
        slider:{
            type:Number,
            default:1
        }
    },
    data() {
        return {
            inputsValuesRespuesta: {
          'numerador':[{"inputA1":5},{"inputA2":3},{"inputA3":7}],
          'denominador':[{"inputB1":4}],
          'resultado1':[{"inputA4":1}],
          'resultado2':[{"inputB2":4}]
        },
        }
    },
}
</script>

<style lang="less" scoped>
.recuadro-explicacion-1 {
  display: flex;
    width: 100%;
    height: 85%;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-content: center;
}


</style>