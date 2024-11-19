<template>
  <div>
    <div class="d-flex">
      <div class="col-md-8">
        <div class="icons" style="margin-top: 50px;">
          <div class="container text-center">
            <div class="row row-cols-auto d-flex align-items-center justify-content-evenly">
              <div class="col" v-for="(curso, i) in cursos" :key="i">
                <div class="hover-div position-relative d-flex flex-column align-items-center">
                  <button class="btn rounded-circle" style="width: 110px; height: 110px;" @click="navigateToTopics(curso.id)">
                    <img :src="curso.logo" class="rounded-circle" alt="..." style="width: 110px; height: 110px;">
                  </button>

                  <img :src="curso.auxImg" width="400px" alt="Imagem " class="dropdown-image rounded">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 d-flex flex-column align-items-center ">
        <div class="logo-signacle" style="height: 200px; width: 200px;">
          <img
            src="https://s3-alpha-sig.figma.com/img/46b1/ce85/7615b51c226c2d30c3b094c4f6606489?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYz7~rokEtDjtwQ3ymwovLGJ28zjunI-5ZBjuttpVpiXNV-eoFpsYndehqGSD~zG1JM1kmfzqcTB~AzHKKyiImaTzJOv3htiYVaYQpEo7G-04mI3t0cMN29j-YPcToy13na1RnhIYks40WZPclKpJXsXGfiRJhJZn86uBsicDGylu1o4063VpsBebXFl4r~JF5tOfH0E-nJrMoFKdfkVjKyUocXo4~zw1p-pT63Ce6GYs77jkHO2B733w8wEjxU3k2fhjOOOWQBDETht64HYdyznqetK8zROwj3VSDEaedSY-Q5Q1gJZhGk0ghmSj2sB1yxT7ZA00eNCZgTFdfXhcg__"
            class="card-img-top" alt="...">
        </div>
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
import tiBg from '@/assets/images/ti-background.png'
import medVetBg from '@/assets/images/medvet-background.png'
import nutriBg from '@/assets/images/nutri-background.png'
import bsBg from '@/assets/images/business-background.png'
const router = useRouter()

const navigateToTopics = (id) => {
  router.push(`topicos/${id}`)
}

const cursos = [
  {
    id: '8aa30d39-254e-49e2-8677-ac7b2d0a2d88',
    logo: tiLogo,
    auxImg: tiBg
  },
  {
    id: '1bab5fb5-1d49-4726-a1c1-7e18c6c92566',
    logo: medVetLogo,
    auxImg: medVetBg
  },
  {
    id: '64d72ac2-3725-4448-b7d1-5f4006c2babf',
    logo: nutriLogo,
    auxImg: nutriBg
  },
  {
    id: 'd6b43986-81de-4c49-9d6e-f24e5c6e304f',
    logo: businessLogo,
    auxImg: bsBg
  },

]
</script>

<style>
.dropdown-image {
  margin-top: 20px;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  left: 0;
  right: 0;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Exibe a imagem quando passa o mouse */
.hover-div:hover .dropdown-image {
  display: block;
}

.embed-responsive-item {
  background-color: black;
}
</style>
  