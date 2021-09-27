<template>
  <div class="contendor-input">
    <input
      v-model=inputValue
      type="text"
      tabindex="1"
      :id="id"
      autocomplete="false"
      :maxlength="maxlenth"
      @input="checkValue($event,id)"
      oninput="this.value = this.value.replace(/[^0-9-.]/g, '').replace(/(\..*?)\..*/g, '$1');"
    />
  </div>
</template>

<script>
export default {
  props: {
      id:{
          type:String
      },
      maxlenth:{
          type:String,
          default:'3'
      }
    },
  data() {
    return {
        inputValue:''
    };
  },
  methods: {
      checkValue(event,id){
          this.$emit('eventInput',{'id':id,'value':event.target.value})
      }
  }
};
</script>

<style lang="less" scoped>


input[type="text"],
input[type="phone"] {
    border: 3px rgb(44, 40, 236) solid;
    background-color: #5998ba;
    text-align: center;
    font-size: 21px;
    font-family: 'Open Sans', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: 40%;
    height: 56%;
    color: white; 
}

/* #inputA1{
    position: relative;
    left: 18px;
}
#inputB1{
    position: relative;
    left: -107px;
} */


#inputA2{
    position: relative;
    right: 22%;
}
#inputA3{
    position: relative;
    right: 56%;
}
#inputA4{
    position: relative;
    left: -58%;
}


</style>