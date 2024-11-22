<template>
  <div>
    <div
      class="modal fade"
      id="modalTopic"
      tabindex="-1"
      aria-labelledby="labelModalTopic"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content topic-background fw-semibold">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="labelModalTopic">Tópico</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label for="inputtopic" class="form-label">Nome do tópico</label>
              <input
                v-model="topicName"
                type="text"
                class="form-control border border-primary"
                id="inputtopic"
                placeholder="Digite o nome do sinal"
              />
              <div v-if="validationErrors.topicName" class="text-danger">
                {{ validationErrors.topicName }}
              </div>
            </div>

            <div class="mb-3">
              <label for="inputDescription" class="form-label">Descrição</label>
              <textarea
                v-model="topicDescription"
                class="form-control border border-primary"
                id="inputDescription"
                rows="3"
                placeholder="Digite uma descrição"
              ></textarea>
              <div v-if="validationErrors.topicDescription" class="text-danger">
                {{ validationErrors.topicDescription }}
              </div>
            </div>

            <div class="mb-3">
              <label for="inputImage" class="form-label"
                >Imagem (PNG/SVG)</label
              >
              <input
                @change="handleFileUpload"
                type="file"
                class="form-control border border-primary"
                id="inputImage"
                accept=".svg, .png"
              />
              <div v-if="validationErrors.imageFile" class="text-danger">
                {{ validationErrors.imageFile }}
              </div>
            </div>

            <div class="mb-3">
              <label for="inputVideo" class="form-label"
                >Vídeo (link do YouTube)</label
              >
              <input
                v-model="topicVideo"
                type="url"
                class="form-control border border-primary"
                id="inputVideo"
                placeholder="Cole o link do vídeo do YouTube"
              />
              <div v-if="validationErrors.topicVideo" class="text-danger">
                {{ validationErrors.topicVideo }}
              </div>
            </div>

            <div class="mb-3">
              <label for="inputComment" class="form-label">Comentário</label>
              <input
                v-model="topicComment"
                type="text"
                class="form-control border border-primary"
                id="inputComment"
                placeholder="Digite o comentário"
              />
              <div v-if="validationErrors.topicComment" class="text-danger">
                {{ validationErrors.topicComment }}
              </div>
            </div>
          </div>

          <div class="modal-footer d-flex align-items-center">
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
              @click="handleAddNewTopic"
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
import { ref, onMounted, onUnmounted } from "vue";

const modal = ref(null);
const toast = ref(null);

const topicName = ref("");
const topicDescription = ref("");
const topicVideo = ref("");
const topicComment = ref("");
const imageFile = ref("");

const validationErrors = ref({
  topicName: "",
  topicDescription: "",
  topicVideo: "",
  topicComment: "",
  imageFile: "",
});

const { addNewTopicByCourseId, loading } = useTopicComposable();
const modalStore = piniaModalStore();
const emits = defineEmits(["fetchTopicsData"]);

const validateFields = () => {
  let isValid = true;
  validationErrors.value = {
    topicName: "",
    topicDescription: "",
    topicVideo: "",
    topicComment: "",
    imageFile: "",
  };

  if (!topicName.value.trim()) {
    validationErrors.value.topicName = "O nome do tópico é obrigatório.";
    isValid = false;
  }
  if (!topicDescription.value.trim()) {
    validationErrors.value.topicDescription = "A descrição é obrigatória.";
    isValid = false;
  }
  if (
    !topicVideo.value.trim() ||
    !/^https?:\/\/(www\.)?youtube\.com\/embed\/[\w-]+$/.test(topicVideo.value)
  ) {
    validationErrors.value.topicVideo =
      "Insira um link válido no formato embed.";
    isValid = false;
  }
  if (!topicComment.value.trim()) {
    validationErrors.value.topicComment = "O comentário é obrigatório.";
    isValid = false;
  }
  if (!imageFile.value) {
    validationErrors.value.imageFile = "Uma imagem (PNG/SVG) é obrigatória.";
    isValid = false;
  }

  return isValid;
};

const handleAddNewTopic = async () => {
  if (!validateFields()) {
    return;
  }

  const body = {
    word: topicName.value,
    description: topicDescription.value,
    image: imageFile.value,
    video: topicVideo.value,
    comment: topicComment.value,
    idCourse: modalStore.idCourse,
  };

  await addNewTopicByCourseId(body, toast.value);
  emits("fetchTopicsData");
  setTimeout(() => {
    modal.value.hide();
  }, 500);
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file && (file.type === "image/svg+xml" || file.type === "image/png")) {
    const reader = new FileReader();

    reader.onloadend = () => {
      imageFile.value = reader.result;
    };

    reader.readAsDataURL(file);
  } else {
    alert("Por favor, selecione apenas arquivos PNG ou SVG.");
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
    modal?.value.dispose();
  }
});

// Optional: Export methods to control the modal
defineExpose({
  show: () => modal?.value.show(),
  hide: () => modal?.value.hide(),
});
</script>
