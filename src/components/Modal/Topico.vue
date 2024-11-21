<template>
  <div>
    <div class="modal fade" id="modalTopic" tabindex="-1" aria-labelledby="labelModalTopic" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content topic-background fw-semibold">

          <div class="modal-header">
            <h1 class="modal-title fw-bold fs-5" id="labelModalTopic">Tópico</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label for="inputPalavra" class="form-label">Palavra</label>
              <input type="text" class="form-control border border-primary" id="inputPalavra" placeholder="Digite uma palavra" />
            </div>

            <div class="mb-3">
              <label for="inputDescricao" class="form-label">Descrição</label>
              <textarea class="form-control border border-primary" id="inputDescricao" rows="3" placeholder="Digite uma descrição"></textarea>
            </div>

            <div class="mb-3">
              <label for="inputImagem" class="form-label">Imagem (apenas SVG)</label>
              <input type="file" class="form-control border border-primary" id="inputImagem" accept=".svg" />
            </div>

            <div class="mb-3">
              <label for="inputVideo" class="form-label">Vídeo (link do YouTube)</label>
              <input type="url" class="form-control border border-primary" id="inputVideo" placeholder="Cole o link do vídeo do YouTube" />
            </div>

            <div class="mb-3">
              <label for="inputComentario" class="form-label">Comentário</label>
              <textarea class="form-control border border-primary" id="inputComentario" rows="3" placeholder="Adicione um comentário"></textarea>
            </div>
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

const modalTopic = ref(null)
const toast = ref(null)

onMounted(() => {
  const modalElement = document.getElementById('modalTopic')
  if (modalElement) {
    modalTopic.value = new Modal(modalElement)
  }

  const toastElement = document.getElementById('liveToast')
  if (toastElement) {
    toast.value = new Toast(toastElement)
  }
})

onUnmounted(() => {
  if (modalTopic) {
    modalTopic.value.dispose()
  }
})

// Optional: Export methods to control the modal
defineExpose({
  show: () => modalTopic?.value.show(),
  hide: () => modalTopic?.value.hide()
})
</script>