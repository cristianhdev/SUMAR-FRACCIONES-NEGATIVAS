<template>
  <div class="home">
    <Banderin />
    <ContenedorBienvenida>
      <ContenedorTemas :slider="root_slider" />
      <template v-slot:botones>
        <Navegacion :isNumeroSlider="8" @onchangeSlider="onDetectSlider" />
      </template>
    </ContenedorBienvenida>
    <Audios :isLoop=false :isMute=true :isSliderActual="root_slider"/>
  </div>
</template>

<script>
import ContenedorBienvenida from "../components/ContenedorBienvenida.vue";
// @ is an alias to /src

export default {
  components: { ContenedorBienvenida },
  name: "Home",
  data() {
    return {
      /*  root_component:<ConetedorBienvenida/> */
      root_slider: 1,
    };
  },
  methods: {
    onDetectSlider(data) {
      this.root_slider = data;
    },
  },
};
</script>
