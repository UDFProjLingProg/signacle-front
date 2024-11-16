<template>
  <div class="signacle-page" :style="{ fontSize: fontSize + 'px' }">
    <header class="header">
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
        <img src="@/pages/signacle-logo.png" alt="Signacle Logo" class="signacle-logo" />
        <div class="video">
          <div class="video-placeholder">
            <i class="play-icon"></i>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.signacle-page {
  font-family: 'Poppins', sans-serif;
  color: white;
  background-color: #003b76;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 30px;
  background-color: #003b76;
  color: white;
  flex-wrap: wrap;
}

.description {
  flex: 2;
  max-width: 55%;
  line-height: 1.8;
}

.description h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.icons {
  display: flex;
  justify-content: center; 
  gap: 20px;
  margin-top: 160px; 
}

.icon-btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #005599;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
}

.icon-btn:hover {
  background-color: #0077cc;
  transform: scale(1.1);
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.signacle-logo {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.video {
  width: 400px;
  height: 250px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

.video-placeholder .play-icon {
  width: 0;
  height: 0;
  border-left: 40px solid white;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
</style>
