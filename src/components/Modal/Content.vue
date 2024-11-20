<template>
    <div>
      <div class="modal fade" id="modalConteudo" tabindex="-1" aria-labelledby="labelModalConteudo" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
  
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="labelModalConteudo">Conteúdo</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
  
            <div class="modal-body">
                Conteúdex
            </div>
  
            <div class="modal-footer d-flex flex-columnn-reverse align-items-center">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  
              <button type="button" class="btn btn-primary" style="width: 5rem;" @click="validateAndLogin">
                <div v-if="loading" class="spinner-grow spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div v-else>
                  Login
                </div>
              </button>
            </div>
  
          </div>
        </div>
      </div>
      <ToastComponent />
    </div>
  </template>
  
  <script setup>
  import { Modal, Toast } from 'bootstrap'
  import { useModalComposable } from '~/composables/ModalLoginComposable';
  
  let modal = null
  let toast = null
  const emailError = ref(null)
  const passwordError = ref(null)
  
  const {email, loading, password, login} = useModalComposable()
  
  onMounted(() => {
      const modalElement = document.getElementById('modalLogin')
      if (modalElement) {
          modal = new Modal(modalElement)
      }
  
      const toastElement = document.getElementById('liveToast')
      if (toastElement) {
          toast = new Toast(toastElement)
      }
  })
  
  onUnmounted(() => {
      if (modal) {
          modal.dispose()
      }
  })
  
  watch
  
  const validateAndLogin = () => {
    emailError.value = null
    passwordError.value = null
  
    if (!email.value) {
      emailError.value = 'O e-mail é obrigatório.'
    } else if (!isValidEmail(email.value)) {
      emailError.value = 'Insira um e-mail válido.'
    }
  
    if (!password.value) {
      passwordError.value = 'A senha é obrigatória.'
    }
  
    if (!emailError.value && !passwordError.value) {
      console.log("Chegou no login");
      
      login(email.value, password.value, toast)
    }
  }
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  
  // Optional: Export methods to control the modal
  defineExpose({
      show: () => modal?.show(),
      hide: () => modal?.hide()
  })
  </script>