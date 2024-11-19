<template>
  <header class="header border-bottom border-white">
    <nav class="navbar navbar-expand-lg">
      <div class="container header-container">
        <!-- Esquerda -->
        <div class="header-left">
          <img src="/assets/images/udf-logo.png" alt="" height="60" />
          <img src="/assets/images/logo-signacle.png" alt="" height="60" />
          <!--
          <img
            src="https://www.udf.edu.br/wp-content/themes/cruzeiroportais2019/assets/imagens/svg-icon-contraste.svg"
            alt=""
            width="15"
          />
          <a class="accessibility text-white">A+</a>
          <a class="accessibility text-white">A-</a>-->
        </div>

        <!-- Direita -->
        <div class="header-right">
          <nuxt-link to="/">
            <button-component label="Início" />
          </nuxt-link>
          <button-component label="Signacle" @click="navigateToSignacle"/>
          <nuxt-link to="https://udf.edu.br">
            <button-component label="Contato" />
          </nuxt-link>
          <!-- Ícone de Login -->
          <button type="button" class="btn btn-link pl-2 text-white" data-bs-toggle="modal" data-bs-target="#modalLogin">
            <i class="fas fa-user fs-4"></i>
          </button>
        </div>
      </div>
    </nav>

    <ToastComponent v-if="toastIsVisible" :data="dataToPass"/>
    <modal-login />
  </header>
</template>

<script setup>
import { Toast } from 'bootstrap'
import ToastComponent from './ToastComponent.vue';
const router = useRouter()

let toast = ref(null);
let toastIsVisible = ref(false);

onMounted(() => {
  const toastElement = document.getElementById('liveToast');
  if (toastElement) {
    toast.value = new Toast(toastElement);
  }
});

const navigateToSignacle = () => {
  router.push('/cursos');
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px; /* Espaço entre os itens */
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px; /* Espaço entre os botões */
}

.accessibility {
  margin-left: 10px;
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
}

.btn-link i {
  color: #fff; /* Cor do ícone de login */
}

.modal-content {
  border-radius: 8px;
}
</style>
