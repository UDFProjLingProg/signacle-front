<template>
  <div class="container">
    <button class="btn btn-outline-light mt-4" @click="navigateBack">
      <i class="bi bi-arrow-left"></i>
    </button>

    <div class="d-flex align-items-center justify-content-center mt-4">
      <div class="accordion-container">
        <div class="accordion" id="accordionCursos">
          <template v-if="data.length === 0">
            <div class="text-center p-4">Não há cursos disponíveis</div>
          </template>
          <template v-else>
            <div 
              v-for="(curso, cursoIndex) in data" 
              :key="curso.id || cursoIndex" 
              class="accordion-item"
            >
              <h2 class="accordion-header" :id="`headingCurso${cursoIndex}`">
                <button
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapseCurso${cursoIndex}`"
                  aria-expanded="false"
                  :aria-controls="`collapseCurso${cursoIndex}`"
                >
                  <span class="flex-grow-1">{{ curso.name }}</span>
                  <span class="action-buttons">
                    <button 
                      @click="addTopic(curso)"
                      class="btn btn-icon" 
                      data-bs-toggle="modal"
                      data-bs-target="#modalTopic"
                    >
                      <i class="bi bi-plus-lg icon-plus"></i>
                    </button>
                  </span>
                </button>
              </h2>
              <div
                :id="`collapseCurso${cursoIndex}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`headingCurso${cursoIndex}`"
                data-bs-parent="#accordionCursos"
              >
                <div class="accordion-body">
                  <div :id="`accordionTopicos${cursoIndex}`" class="accordion">
                    <template v-if="!curso.topic || curso.topic.length === 0">
                      <div class="text-center p-4">Não há matérias para esse curso</div>
                    </template>
                    <template v-else>
                      <div
                        v-for="(topico, topicoIndex) in curso.topic"
                        :key="topico.id || topicoIndex"
                        class="accordion-item"
                      >
                        <h2 
                          class="accordion-header" 
                          :id="`headingTopico${cursoIndex}-${topicoIndex}`"
                        >
                          <button
                            class="accordion-button collapsed d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            :data-bs-target="`#collapseTopico${cursoIndex}-${topicoIndex}`"
                            aria-expanded="false"
                            :aria-controls="`collapseTopico${cursoIndex}-${topicoIndex}`"
                          >
                            <span class="flex-grow-1">{{ topico.word }}</span>
                            <span class="action-buttons">
                              <button class="btn btn-icon" @click="addSign(topico)" data-bs-toggle="modal" data-bs-target="#modalContent">
                                <i class="bi bi-plus-lg icon-plus"></i>
                              </button>
                              <button class="btn btn-icon" @click="editTopic(topico)">
                                <i class="bi bi-pencil icon-edit"></i>
                              </button>
                              <button 
                                class="btn btn-icon" 
                                @click="deleteTopic(topico.id)"
                              >
                                <i class="bi bi-trash icon-delete"></i>
                              </button>
                            </span>
                          </button>
                        </h2>
                        <div
                        :id="`collapseTopico${cursoIndex}-${topicoIndex}`"
                        class="accordion-collapse collapse"
                        :aria-labelledby="`headingTopico${cursoIndex}-${topicoIndex}`"
                        :data-bs-parent="`#accordionTopicos${cursoIndex}`"
                        >
                          <div class="accordion-body">
                            <div v-if="!topico.libra || topico.libra.length === 0" class="text-center p-2">Não há sinais para essa matéria</div>
                            <ul v-else class="list-group">
                              <li
                                v-for="(materia, materiaIndex) in topico.libra"
                                :key="materia.id || materiaIndex"
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                {{ materia.name }}
                                <span class="action-buttons">
                                  <button 
                                    class="btn btn-icon" 
                                    @click="editLibra(materia)"
                                  >
                                    <i class="bi bi-pencil icon-edit"></i>
                                  </button>
                                  <button 
                                    class="btn btn-icon" 
                                    @click="deleteLibra(materia.id)"
                                  >
                                    <i class="bi bi-trash icon-delete"></i>
                                  </button>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <ModalTopic @fetchTopicsData="fetchDataAfterEmit"/>
    <ModalContent @fetch-data="fetchDataAfterEmit"/>
  </div>
</template>

<script setup>
import { Modal } from 'bootstrap'
const router = useRouter();
const { fetchAllCourses, deleteTopicById } = useManageComposable()
const modalStore = piniaModalStore()

const data = ref([])
const modalTopic = ref(null)
const modalContent = ref(null)

// Funções da página
const addSign = (topico) => {
  modalStore.saveIdTopic(topico.id)
}

const addTopic = (curso) => {
  modalStore.saveIdCourse(curso.id)
}

const navigateBack = () => {
  router.back();
};

const deleteTopic = async (id) => {  
  await deleteTopicById(id)
}

const fetchDataAfterEmit = async () => {
  data.value = await fetchAllCourses()
}

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
  script.async = true;
  document.body.appendChild(script);

  const modalTopicElement = document.getElementById('modalTopic')
  const modalContentElement = document.getElementById('modalContent')

  if (modalTopicElement) {
    modalTopic.value = new Modal(modalTopicElement)
  }

  if (modalContentElement) {
    modalContent.value = new Modal(modalContentElement)
  }
});

onBeforeMount(async() => {
  data.value = await fetchAllCourses()
})

onUnmounted(() => {
  if (modalContent.value != null) {
    modalContent.value.dispose()
  }

  if (modalTopic.value != null) {
    modalTopic.value.dispose()
  }
})

useHead({
  title: 'Gerenciamento'
})
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css");
.back-button:hover {
  background-color: #f8f9fa;
  color: #0d6efd;
}

.btn-success {
  position: absolute;
  top: 50px;
  right: 26%;
  border-radius: 20px;
  background-color: #23c617;
}

.btn-success:hover {
  background-color: #f8f9fa;
  color: #0d6efd;
}

.accordion-container {
  max-width: 50%;
  width: 50%;
  height: 50%;
  color: #77b1eb;
  padding: 10px;
  border-radius: 8px;
  align-self: center;
}

.accordion-item {
  background-color: #77b1eb;
  border: none;
  margin-bottom: 1px;
}

.list-group-item {
  background-color: #77b1eb;
  border: none;
  border-bottom: 1px solid #000000;
  border-radius: 0;
}

.accordion-button {
  background-color: #77b1eb;
  color: #000000;
}

.accordion-button::after {
  margin-left: 2rem;
}

.action-buttons {
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.action-buttons button {
  margin-left: 0.5rem;
}

.btn-icon {
  background: none;
  border: none;
  padding: 0.25rem;
  margin: 0 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon:hover {
  background: none;
}

.icon-edit {
  color: green;
  font-size: 1.1rem;
}

.icon-delete {
  color: #dc3545;
  font-size: 1.1rem;
}

.icon-plus {
  color: black;
  font-size: 1.1rem;
}

.icon-edit:hover {
  color: rgb(3, 94, 3);
}

.icon-delete:hover {
  color: #bb2d3b;
}

.icon-plus:hover {
  color: grey;
}
</style>
