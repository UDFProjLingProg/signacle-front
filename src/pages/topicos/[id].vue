<template>
  <div>
    <div class="container py-4">
      <button class="btn btn-outline-light mt-4" @click="navigateBack">
        <i class="bi bi-arrow-left"></i>
      </button>

      <button
        v-if="userStore.apiToken"
        class="btn btn-outline-light mt-4 ms-4"
        @click="navigatoToManage"
      >
        <i class="bi bi-gear"></i>
      </button>

      <div class="d-flex align-items-start justify-content-between mt-4">
        <div class="d-flex flex-column">
          <div class="card mb-3" style="width: 22rem;" v-if="topics.length">
            <div class="list-group list-group-flush">
              <div
                class="list-group-item list-group-item-action py-3"
                v-for="(topic, i) in topics"
                :key="i"
                style="cursor: pointer;"
                @click="getContentFromTopic(topic)"
              >
                <div class="d-flex align-items-center">
                  <div class="icon-container bg-secondary p-2 rounded me-3">
                    <i class="bi bi-database text-white"></i>
                  </div>
                  <span class="fs-5">{{ topic.word }}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card p-4 mb-3 d-flex align-items-center justify-content-center"
            v-if="!topics.length && loading == false"
          >
            Não há dados para esse curso
          </div>

          <div
            class="d-flex align-items-center justify-content-center"
            v-if="loading"
          >
            <div class="spinner-grow text-white" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <!--Card com conteúdo do tópico clicado-->
          <div v-if="loading" class="spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="card mt-4" style="width: 22rem;" v-if="conteudo.length > 0">
            <div class="card-header bg-light d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <i class="bi bi-database me-2"></i>
                <span class="fs-6">{{ clickedTopic }}</span>
              </div>
              <i class="bi bi-x-square text-black p-2" style="cursor: pointer;" @click="closeContentCard"></i>
            </div>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item list-group-item-action py-3" v-for="(content, cIndex) in conteudo" :key="cIndex" @click="changeVideoContent(content.urlVideo)">
                <div class="d-flex align-items-center">
                  <div class="icon-container me-3">
                    <img v-if="content.urlImage != ''" :src="content.urlImage" alt="" height="30px" style="object-fit: contain;">
                    <i v-else class="bi bi-filetype-sql"></i>
                  </div>
                  <span style="font-size: 14px">{{ content.name }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6" v-if="selectedVideo">
          <div class="custom-iframe" style="align-items: end; margin-top: 74px;">
            <iframe
              :src="selectedVideo"
              class="border"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <ToastComponent />
  </div>
</template>

<script setup>
import { Toast } from 'bootstrap'

const route = useRoute();
const router = useRouter();
const userStore = piniaUserStore();
const id = route.params.id;
const { loading, fetchTopicsById, fetchTopicContent } = useTopicoComposable();

const topics = ref([]);
const conteudo = ref([])
const clickedTopic = ref(null)
const toast = ref(null)
const selectedVideo = ref(null)

// Funções da página
onMounted(async () => {
  topics.value = await fetchTopicsById(id);

  const toastElement = document.getElementById('liveToast')
  if (toastElement) {
    toast.value = new Toast(toastElement)
  }
});

const getContentFromTopic = async (topico) => {
  const topicoId = topico.id
  const response = await fetchTopicContent(topicoId, toast.value)

  if (response) {
    clickedTopic.value = topico.word
    conteudo.value = response
  }
}

const changeVideoContent = (urlVideo) => {
  selectedVideo.value = urlVideo.replace("watch?v=", "embed/")
  console.log(selectedVideo.value);
  
}

const closeContentCard = () => {
  conteudo.value = []
  clickedTopic.value = null
  selectedVideo.value = null
}

const navigateBack = () => {
  router.back();
};

const navigatoToManage = () => {
  router.push("/gerenciamento_libras");
};
</script>

<style>
.icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-button {
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.custom-iframe iframe {
  height: 300px;
  width: 80%;
}
</style>
