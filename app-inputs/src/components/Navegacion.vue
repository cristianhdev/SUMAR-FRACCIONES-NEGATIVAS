<template>
  <div
    style="
      height: 38px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    "
  >
    {{ getPosicionSlider }}
    <div
      @click="atras"
        @mouseover="btnSoundOver"
      @mouseout="btnSoundOut"
      :class="{
        ocultar: getPosicionSlider == 1,
        visible: getPosicionSlider != 1,
      }"
      id="atras"
      class="button"
    >
      ◀&nbsp;Atras
    </div>

    <div
      @click="siguiente"
      @mouseover="btnSoundOver"
      @mouseout="btnSoundOut"
      :class="{
        ocultar: getPosicionSlider == isNumeroSlider,
        visible: getPosicionSlider != isNumeroSlider,
      }"
      id="siguiente"
      class="button"
    >
      Siguiente&nbsp;▶
    </div>

    <div
      @click="siguiente"
     
      id="actividad"
      class="button"
      v-show="isfinActividad"
    >
      Listo&nbsp;✍
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isfinActividad: {
      Boolean,
      default: false,
    },
    isNumeroSlider: {
      Number,
      default: 4,
    },
  },

  data() {
    return {
      posicion_slider: 1,
      audioOvers: null,
    };
  },
  beforeMount() {
    document.body.addEventListener("keyup", this.presentacionteclado, false);
  },
  destroyed() {
    document.body.removeEventListener("keyup", this.presentacionteclado, false);
  },
  computed: {
    getPosicionSlider() {
      return this.posicion_slider;
    },
  },
  methods: {
    siguiente() {
      this.posicion_slider++;
      this.$emit("onchangeSlider", this.posicion_slider);
    },
    atras() {
      this.posicion_slider--;
      this.$emit("onchangeSlider", this.posicion_slider);
    },
    presentacionteclado(e) {
      if (e.keyCode == 39 && this.posicion_slider != this.isNumeroSlider) {
        this.siguiente();
      }

      if (e.keyCode == 37) {
        this.posicion_slider == 1 ? "" : this.atras();
      }

      if (e.keyCode == 13 && this.posicion_slider == this.isNumeroSlider) {
        this.comprobar();
      }
    },
    comprobar() {},
    btnSoundOver() {
    /* alert('over') */
     /*  this.audioOvers = new Audio(`${path_sound}61.mp3`);
      this.audioOvers.play(); */
    },
    btnSoundOut() {
        /*  alert('out') */
      /* this.audioOvers.pause(); */
    },
  },
};
</script>

<style lang="less" scoped>
.ocultar {
  visibility: hidden;
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