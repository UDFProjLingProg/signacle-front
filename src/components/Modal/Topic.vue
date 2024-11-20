<template>
    <div>
      <div class="modal fade" id="modalTopic" tabindex="-1" aria-labelledby="labelModalTopic" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
  
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="labelModalLogin">Tópico</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
  
            <div class="modal-body">
                ...
            </div>
  
            <div class="modal-footer d-flex flex-column-reverse align-items-center">
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
  
  let modal = null
  let toast = null

  
  onMounted(() => {
      const modalElement = document.getElementById('modalTopic')
      if (modalElement) {
        modalTopic = new Modal(modalElement)
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
  
  // Optional: Export methods to control the modal
  defineExpose({
      show: () => modal?.show(),
      hide: () => modal?.hide()
  })
  </script>