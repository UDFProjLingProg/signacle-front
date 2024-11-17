<template>
  <div class="container" :style="{ fontSize: fontSize + 'px' }">
    <div class="description">
      <h1>Bem-vindo ao Signacle</h1>
      <p>
        Signacle é um inovador site de busca dedicado à Língua Brasileira de Sinais (Libras).
        Com o Signacle, é possível realizar a busca de palavras e traduções em qualquer lugar
        e em qualquer hora, tornando a comunicação mais inclusiva e acessível para pessoas com
        deficiência auditiva.
      </p>
      <!-- Ícones centralizados -->
      <div class="icons">
        <button class="icon-btn">
          <i class="fas fa-info-circle"></i>
        </button>
        <button class="icon-btn">
          <i class="fas fa-users"></i>
        </button>
        <button class="icon-btn">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <!-- Vídeo abaixo da logo -->
    <div class="logo">
      <img src="../assets/images/logo-signacle.png" alt="Signacle Logo" class="signacle-logo" />
      <div class="video">
        <div class="video-placeholder">
          <i class="play-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
