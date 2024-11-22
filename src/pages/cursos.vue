<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="col-md-6">
        <div style="margin-top: 50px">
          <div
            class="container text-start d-flex flex-column align-items-center animated-content"
          >
            <p
              class="ps-4 ms-4 fs-1"
              style="font-weight: 900; align-self: flex-start; color: #0db9fd"
            >
              {{ currentContent?.title || 'Signacle'}}
            </p>
            <p
              class="ps-4 ms-4 mt-2 fs-6 text-white fw-semibold lh-sm"
              style="text-align: justify"
              v-if="!chooseContent"
            >
              E se nós pudéssemos ter uma grande nuvem de dados para consultar,
              gratuita e virtualmente, vários sinais da Libras de diversas áreas
              do conhecimento, criados em resposta a demandas de vários
              contextos?<br /><br />

              Essa é a proposta do repositório SIGNACLE - Sinais e-Clouds - um
              ambiente on-line voltado ao armazenamento de fontes de conteúdos
              em Libras sobre assuntos presentes nos diversos contextos
              acadêmicos, para auxiliar o usuário no manejo de dicionários
              on-line de especialidade, orientando pesquisas documentais e dando
              suporte à aprendizagem científica de conteúdos terminológicos
              complexos por estudantes universitários surdos e ouvintes usuários
              da Libras.
            </p>
            <p v-else class="ps-4 ms-4 mt-2 fs-6 text-white fw-semibold lh-sm" style="text-align: justify">
              {{ currentContent.text }}
            </p>
            <button 
              @click="navigateToTopics"
              v-if="chooseContent" 
              class="btn btn-primary btn-block rounded-pill px-4 py-3 fw-bold fs-5 border" 
              :class="{
                'my-4': chooseContent === true
              }" 
              style="align-self: flex-start; margin-left: 3rem"
              type="button">Acessar repositório</button>
            <div
              class="row row-cols-auto d-flex align-items-center justify-content-evenly w-100"
            >
              <div class="col mt-4" v-for="(course, i) in courses" :key="i">
                <button
                  class="btn curso-btn d-flex align-items-center justify-content-center p-3"
                  @click="changeTopic(course.id, i)"
                >
                  <img :src="cursosImages[i]" alt="..." width="70px" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="custom-iframe" style="align-items: end; margin-top: 74px;">
          <iframe
            src="https://www.youtube.com/embed/EZxkymw426U"
            title="Alfabeto de LIBRAS - COMPLETO E INESQUECÍVEL"
            class="border"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import tiLogo from "@/assets/images/svgs/ti.svg";
import medVetLogo from "@/assets/images/svgs/medvet.svg";
import nutriLogo from "@/assets/images/svgs/nutri.svg";
import businessLogo from "@/assets/images/svgs/business.svg";
import data from '@/assets/data/dummydata.js'

import { Toast } from "bootstrap";

const router = useRouter();
const toastStore = piniaToastStore();
const { fetchCourses } = useCoursesComposable();

const cursosImages = [tiLogo, medVetLogo, nutriLogo, businessLogo];

const toast = ref(null);
const courses = ref([]);
const chooseContent = ref(false)
const currentContent = ref(null)
const currentTopicId = ref(null)

// Funções da página
onMounted(async () => {
  const toastElement = document.getElementById("liveToast");
  if (toastElement) {
    toast.value = new Toast(toastElement);
  }

  courses.value = await fetchCourses(toast.value, toastStore);
});

const changeTopic = (id, index) => {
  chooseContent.value = true
  currentContent.value = data[index]
  currentTopicId.value = id
};

const navigateToTopics = () => {
  router.push(`/topicos/${currentTopicId.value}`)
}

useHead({
  title: "courses",
});
</script>

<style>
.curso-btn {
  border: 2px solid #0db9fd;
}

.curso-btn:hover {
  transform: scale(1.2);
  transition: all 0.5s ease;
  box-shadow: 0 1rem 3rem rgb(174, 174, 174);
  background-color: #0d6efd;
}

.curso-btn:not(:hover) {
  transform: scale(1);
  transition: all 0.5s ease;
  box-shadow: 0
}

.curso-btn:focus {
  transition: all 0.5s ease;
  background-color: #0d6efd;
  transform: scale(1.2);
  box-shadow: 0
}

.custom-iframe iframe {
  height: 300px;
  width: 80%;
}

.animated-content {
  transform: opacity 0.5s ease-in;
}

</style>
