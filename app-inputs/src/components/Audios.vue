<template>
    <div>
      
        <audio  autoplay :loop="isLoop" :mute="isMuted" >
             <source :src="audio_nuevo[isSliderActual]" type="audio/ogg">
                <source :src="audio_nuevo[isSliderActual]" type="audio/mpeg">
                Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>


export default {
    props: {
        isSliderActual:{
            type:Number,
            default:0
        },
        isLoop:{
            type:Boolean,
            default:false
        },
        isMuted:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
           audio_nuevo:[require('@/sounds/Audio1.mp3'),require('@/sounds/Audio2.mp3')],
           audio_actual:null,
           audio:null  
        }
    },
    watch: {
    isSliderActual(val) {
      console.log(this.audio_nuevo[val-1]);
    },
  },
 /*  computed: {
      getAudioActual(){
          return this.isSliderActual-1
      }
  } */
}
</script>