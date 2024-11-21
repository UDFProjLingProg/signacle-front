<template>
  <div>
    <div
      class="modal fade"
      id="modalConteudo"
      tabindex="-1"
      aria-labelledby="labelModalConteudo"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content topic-background fw-semibold">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="labelModalConteudo">Conteúdo</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label for="inputPalavra" class="form-label">Nome do sinal</label>
              <input
                v-model="sinalNome"
                type="text"
                class="form-control border border-primary"
                id="inputPalavra"
                placeholder="Digite o nome do sinal"
              />
            </div>

            <div class="mb-3">
              <label for="inputDescricao" class="form-label">Descrição</label>
              <textarea
                v-model="sinalDescricao"
                class="form-control border border-primary"
                id="inputDescricao"
                rows="3"
                placeholder="Digite uma descrição"
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="inputImagem" class="form-label"
                >Imagem (apenas SVG)</label
              >
              <input
                @change="handleFileUpload"
                type="file"
                class="form-control border border-primary"
                id="inputImagem"
                accept=".svg"
              />
            </div>

            <div class="mb-3">
              <label for="inputVideo" class="form-label"
                >Vídeo (link do YouTube)</label
              >
              <input 
                v-model="sinalVideo"
                type="url"
                class="form-control border border-primary"
                id="inputVideo"
                placeholder="Cole o link do vídeo do YouTube"
              />
            </div>
          </div>

          <div
            class="modal-footer d-flex align-items-center"
          >
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>

            <button
              type="button"
              class="btn btn-primary"
              @click="handleAddNewSign"
            >
              <div
                v-if="loading"
                class="spinner-grow spinner-grow-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              <div v-else>Adicionar</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ToastComponent />
  </div>
</template>

<script setup>
import { Modal, Toast } from "bootstrap";
import { render } from "vue";

const modal = ref(null);
const toast = ref(null);

const emailError = ref(null);
const passwordError = ref(null);
const sinalNome = ref('')
const sinalDescricao = ref('')
const imageFile = ref('')
const sinalVideo = ref(null)

const { addNewSignToTopic, loading } = useTopicoComposable()
const modalStore = piniaModalStore()


// Funções da página
const handleAddNewSign = async () => {
  const body = {
    name: sinalNome.value,
    description: sinalDescricao.value,
    urlImage: imageFile.value,
    urlVideo: sinalVideo.value,
    idTopic: modalStore.idTopic
  }
  await addNewSignToTopic(body, toast.value)
  setTimeout(() => {
    modal.value.hide()
  }, 500)
}

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type === "image/svg+xml") {
    const reader = new FileReader()

    reader.onloadend = () => {
      imageFile.value = reader.result
    }
    
    reader.readAsDataURL(file)
  } else {
    alert("Por favor, selecione apenas arquivos SVG.");
    event.target.value = "";
  }
};

onMounted(() => {
  const modalElement = document.getElementById("modalLogin");
  if (modalElement) {
    modal.value = new Modal(modalElement);
  }

  const toastElement = document.getElementById("liveToast");
  if (toastElement) {
    toast.value = new Toast(toastElement);
  }
});

onUnmounted(() => {
  if (modal) {
    modal.value.dispose();
  }
});

// Optional: Export methods to control the modal
defineExpose({
  show: () => modal?.value.show(),
  hide: () => modal?.value.hide(),
});
</script>
