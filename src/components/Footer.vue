<template>
    <footer class="d-flex align-items-center justify-content-around p-4">
      <img :src="logoUdf" style="object-fit: contain; height: 80px">
      <img :src="logoSignacle" style="object-fit: contain; height: 80px">

      <div class="d-flex flex-column align-items-start">
          <h4 class="border-bottom text-white fw-semibold">Contato</h4>
          <p class="text-white">contato@udf.edu.br</p>
      </div>
    </footer>
</template>

<script setup>
import logoUdf from '@/assets/images/udf-logo.png'
import logoSignacle from '@/assets/images/signacle-logo.png'

</script>

<style>

</style>