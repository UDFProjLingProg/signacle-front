<template>

  <header class="header">
    <div class="row mb-4 d-flex">
      <div class="col-8 d-flex">
        <div class="col-md-2 d-flex">
          <img
            src="\assets\images\udf-logo.png"
            alt=""
            height="60"
          />
          <img
            src="\assets\images\logo-signacle.png"
            alt=""
            height="60"
          />
        </div>
        <div class="col-md-2 d-flex gap-3" style="align-self: center">
          <img
            src="https://www.udf.edu.br/wp-content/themes/cruzeiroportais2019/assets/imagens/svg-icon-contraste.svg"
            alt=""
            width="15"
          />
          <a class="accessibility">A+</a>
          <a class="accessibility">A-</a>
        </div>
      </div>
      <div class="col-4 d-flex gap-1" style="align-self: center">
        <button-component label="Início" />
        <button-component label="Sobre" />
        <button-component label="Equipe" />
        <button-component label="Signacle" />
        <button-component label="Contato" />
        <button-component label="Início" />
      </div>
    </div>


  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  border-bottom: 2px solid white;
}
.accessibility {
  color: white;
}

</style>