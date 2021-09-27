<template>
  <div>
    <div id="mensajeActividad" v-show="mostrarresultado">
      <div>Se deben ingresar los campos.</div>
    </div>
    <div class="contenedor-inputs">
      <div id="div-inputs" style="width: 100%; text-align: right">
        <div
          class="contendor-input-render-numerador"
          v-for="i in inputsNumerados"
          :key="i"
        >
          <Inputs
            :id="`inputA${i}`"
            :maxlength="4"
            @eventInput="inputsEvent"
          ></Inputs>
        </div>

        <!-- <input type="text" tabindex="1" id="input1" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="2" id="input2" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="3" id="input3" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="4" id="input4" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="5" id="input5" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');"> -->
      </div>

      <div style="width: 100%; text-align: right">
        <div
          class="contendor-input-render-denominador"
          v-for="i in inputsDenominador"
          :key="i"
        >
          <Inputs :id="`inputB${i}`" @eventInput="inputsEvent"></Inputs>
        </div>
        <!--  <input type="text" tabindex="6" id="input6" size="2" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="7" id="input7" size="2" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="8" id="input8" size="2" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="9" id="input9" size="2" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                        <input type="text" tabindex="10" id="input10" size="5" autocomplete="false" maxlength="3"
                            oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');"> -->
      </div>
    </div>

    <div class="contenedor-resultados" id="contenedorResultado-actividad">
      <div id="resultado-1-actividad"></div>
      <div id="resultado-2-actividad"></div>
    </div>
    <div class="botones-resultado-actividad">
      <div
        onclick="repetirTextosEscena(1)"
        id="repetir2"
        alt="Repetir"
        class="button"
      >
        <div class="texto-boton">Repetir &nbsp;↻</div>
      </div>
      <div @click="comprobar()" id="btnComprobar" class="button">
        <div class="texto-boton">Comprobar &nbsp;✍</div>
      </div>
      <div onclick="continuar()" id="btnContinuar" class="button">
        <div class="texto-boton">Continuar &nbsp;▶</div>
      </div>
    </div>
    <!-- <div class="titulo-interactiva is-size-2 is-size-4-mobile">
        <h1
          class="animate__animated animate__fadeInLeft"
          style="text-shadow: 2px 3px 2px #a0a0ba"
        >
          Suma de números racionales
        </h1> -->

    <!--<img src="./public/assets/Img/images/Personaje_inicio.png" />-->
    <!-- <p
          class="
            is-size-6-mobile
            animate__animated animate__fadeIn animate_delay-s5
          "
        >
          A continuación podrás practicar haciendo varios ejercicios de Suma de
          números racionales con diferente signo.
        </p>
      </div> -->
  </div>
</template>

<script>
export default {
  props: {
    inputsRespuestas: {
      type: Object,
    },
    inputsNumerados: {
      type: Number,
      default: 1,
    },
    inputsDenominador: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      mostrarresultado: false,
      inputsGenerados:[]
    };
  },
  methods: {
    inputsEvent(data) {
      /* let findNumerador = this.inputsRespuestas.numerador.find((element) => {
        return element.id == data.id;
      }); */
      console.log(this.inputsRespuestas.denominador)
      Object.values(this.inputsRespuestas.numerador).forEach((element) => {
        console.log(element);
      });

      let df = this.inputsRespuestas.numerador.includes(data.id);
      console.log(df);

      /*    console.log(data.id == "inputB1");
      if (data.id == "inputB1") {
        data.value = this.inputsValues.juego1?console.log('ok'):console.log('not')
      } */
    },
    comprobar() {},
  },
};
</script>

<style lang="less" scoped>
.contenedor-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  background-image: url("../assets/operadores.png");
  background-repeat: no-repeat;
  background-position: center center;
  height: 15vh;
  background-size: 92%;
  width: 100%;
  margin: 0px auto;
}

.contendor-input-render-numerador {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  width: 12%;
  padding: 2px 2%;
}

.contendor-input-render-denominador {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  width: 12%;
  padding: 2px 9%;
}

.botones-resultado-actividad {
  margin: 23px 0px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  height: 38px;
}

.btn-mixin-background {
  background-color: #3ba4c7;
  background-image: -moz-linear-gradient(to top, #3ba4c7 0%, #1982a5 100%);
  background-image: -webkit-linear-gradient(to top, #3ba4c7 0%, #1982a5 100%);
  background-image: -o-linear-gradient(to top, #3ba4c7 0%, #1982a5 100%);
  background-image: -ms-linear-gradient(to top, #3ba4c7 0%, #1982a5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1982A5', endColorstr='#1982A5', GradientType=0);
  background-image: linear-gradient(to top, #3ba4c7 0%, #1982a5 100%);
  -webkit-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  -moz-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
}

.btn-mixin-background-hover {
  background-color: #66b4cc;
  background-image: -moz-linear-gradient(to top, #66b4cc 0%, #3c7385 100%);
  background-image: -webkit-linear-gradient(to top, #66b4cc 0%, #3c7385 100%);
  background-image: -o-linear-gradient(to top, #66b4cc 0%, #3c7385 100%);
  background-image: -ms-linear-gradient(to top, #66b4cc 0%, #3c7385 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3c7385', endColorstr='#3c7385', GradientType=0);
  background-image: linear-gradient(to top, #66b4cc 0%, #3c7385 100%);
  -webkit-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  -moz-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
}

.button {
  width: 118px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 9px 13px;
  border: solid 1px #004f72;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font: 18px Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #e5ffff;
  .btn-mixin-background();
  margin: 0px auto;
  cursor: pointer;
}

.button:hover {
  width: 118px;
  margin: 0px auto;
  padding: 9px 13px;
  border: solid 1px #004f72;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font: 18px Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #e5ffff;
  .btn-mixin-background-hover();
}
</style>