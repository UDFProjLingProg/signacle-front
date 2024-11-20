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

      <div class="row mt-4">
        <div class="col-md-4">
          <div class="card mb-3" v-if="topics.length">
            <div class="list-group list-group-flush">
              <div
                class="list-group-item list-group-item-action py-3"
                v-for="(topic, i) in topics"
                :key="i"
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

          <div class="card mt-4">
            <div class="card-header bg-light">
              <div class="d-flex align-items-center">
                <i class="bi bi-database me-2"></i>
                <span class="fs-5">Banco</span>
              </div>
            </div>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item list-group-item-action py-3">
                <div class="d-flex align-items-center">
                  <div class="icon-container me-3">
                    <i class="bi bi-filetype-sql"></i>
                  </div>
                  <span>Conteúdo Exemplo 1</span>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action py-3">
                <div class="d-flex align-items-center">
                  <div class="icon-container me-3">
                    <i class="bi bi-person-workspace"></i>
                  </div>
                  <span>Conteúdo Exemplo 2</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="card">
            <div class="card-body text-center">
              <i class="bi bi-cloud-upload display-1 text-primary mb-3"></i>
              <div
                class="play-button bg-dark text-white rounded-circle p-4 d-inline-block"
              >
                <i class="bi bi-play-fill fs-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const userStore = piniaUserStore();
const id = route.params.id;

let topics = ref([]);

const { loading, fetchTopicsById } = useTopicoComposable();

onMounted(async () => {
  topics.value = await fetchTopicsById(id);
});

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
</style>
