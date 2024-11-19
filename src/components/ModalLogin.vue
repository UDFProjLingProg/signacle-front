<template>
  <div>
    <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="labelModalLogin" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Faça login para continuar</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <p>E-mail</p>
              <input type="email" placeholder="E-mail" class="form-control border border-primary" v-model="email"/>
              <p style="margin-top: 2rem;">Senha</p>
              <input type="text" placeholder="Senha" class="form-control border border-primary" v-model="password"/>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>

              <button type="button" class="btn btn-primary" style="width: 5rem;" @click="teste">
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
      <ToastComponent/>
    </div>
</template>

<script setup>
import { Modal, Toast } from 'bootstrap'
import { useModalComposable } from '~/composables/ModalLoginComposable';

let modal = null
let toast = null

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

const teste = () => {
    if (email.value && password.value) {
        login(email.value, password.value, toast)
    }

    // Verifique se o toast foi inicializado antes de chamá-lo
    if (toast) {
        toast.show()
    } else {
        console.error('Toast not initialized.')
    }
}

// Optional: Export methods to control the modal
defineExpose({
    show: () => modal?.show(),
    hide: () => modal?.hide()
})
</script>