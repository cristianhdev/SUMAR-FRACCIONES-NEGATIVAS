<template>
    <div class="contenido-actividad-bienvenida">
       <slot name="contenido"></slot>
    <slot></slot>
      <!--  <router-view name="helper"/> -->
      <slot name="botones"></slot>
    </div>
</template>

<style lang="less" scoped>
.contenido-actividad-bienvenida {
    border: 13px #e65a37 double;
    border-radius: 28px 28px;
    width: 64vw;
    height: 66vh;
    background-color: white;
    margin: 0px auto;
    padding: 12px;
    background-image: url("../assets/1.png");
    opacity: 0.9;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
}


</style>