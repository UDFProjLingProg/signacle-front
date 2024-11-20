<template>
  <div>
    <div class="d-flex">
      <div class="col-md-8">
        <div class="icons" style="margin-top: 50px;">
          <div class="container text-start d-flex flex-column ">
            <div class="row row-cols-auto d-flex align-items-center justify-content-evenly">
              <div class="col" v-for="(curso, i) in cursos" :key="i">
          
                  <button class="btn rounded-circle curso-btn d-flex align-items-center justify-content-center"  
                    style="width: 140px; height: 140px;" @click="navigateToTopics(curso.id)"
                  >
                    <img :src="cursosImages[i]" class="rounded-circle" alt="..." style="width: 140px; height: 140px;">
                  </button>

              </div>
            </div>
            <p class="p-4 m-4 fs-6 text-white" style="text-align: justify;">
              E se nós pudéssemos ter uma grande nuvem de dados para consultar, gratuita e virtualmente, 
              vários sinais da Libras de diversas áreas do conhecimento, 
              criados em resposta a demandas de vários contextos?<br/><br/>

              Essa é a proposta do repositório SIGNACLE - Sinais e-Clouds - um ambiente on-line voltado 
              ao armazenamento de fontes de conteúdos em Libras sobre assuntos presentes nos diversos 
              contextos acadêmicos, para auxiliar o usuário no manejo de dicionários on-line de especialidade, 
              orientando pesquisas documentais e dando suporte à aprendizagem científica de conteúdos 
              terminológicos complexos por estudantes universitários surdos e ouvintes usuários da Libras.
            </p>
          </div>
        </div>
      </div>


      <div class="col-sm-4 d-flex flex-column align-items-center ">
          <img
            :src="signacleLogo"
            class="card-img-top" style="height: 300px; width: 300px;">
        <div class="embed-responsive embed-responsive-16by9" style="align-items: end;">
          <iframe src="https://www.youtube.com/embed/EZxkymw426U" title="Alfabeto de LIBRAS - COMPLETO E INESQUECÍVEL"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import tiLogo from '@/assets/images/ti-logo.png'
import medVetLogo from '@/assets/images/med-vet-logo.png'
import nutriLogo from '@/assets/images/nutri-logo.png'
import businessLogo from '@/assets/images/business-logo.png'
import signacleLogo from '@/assets/images/signacle-logo.png'

import { Toast } from 'bootstrap'

const router = useRouter()
const toastStore = piniaToastStore()
const { fetchAllCourses } = useCursosComposable()

const cursosImages = [
    tiLogo,
    medVetLogo,
    nutriLogo,
    businessLogo,
]

const toast = ref(null)
const cursos = ref([])

// Funções da página
onMounted(async () => {
  const toastElement = document.getElementById('liveToast')
    if (toastElement) {
        toast.value = new Toast(toastElement)
    }

  cursos.value = await fetchAllCourses(toast.value, toastStore)
})

const navigateToTopics = (id) => {
  router.push(`topicos/${id}`)
}

useHead({
  title: 'Cursos'
})
</script>

<style>
.curso-btn:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0);
  background-color: transparent;
}

</style>
  