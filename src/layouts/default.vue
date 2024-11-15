<template>
    <div>
        <header class="border-bottom border-white"><nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #003b76;">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="\assets\images\udf-logo.png" alt="" width="130" height="60">
    </a>
<NuxtLink class="navbar-brand" to="https://www.udf.edu.br/acessibilidade/libras/">Acessibilidade</NuxtLink>
<img src="https://www.udf.edu.br/wp-content/themes/cruzeiroportais2019/assets/imagens/svg-icon-contraste.svg" alt=""width="15">
<p class="fw-bold pe-auto text-white pl-3" style="margin-bottom: 0; margin-left: 15px; cursor: pointer;"> A+</p>
<p class="fw-bold pe-auto text-white pl-3" style="margin-bottom: 0; margin-left: 15px; cursor: pointer;">A-</p>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
    <!-- Toggle button -->
    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
      <!-- links da direita-->
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Equipe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Signacle</a>
        </li>
      </ul>
      <NuxtLink>
        <button class="btn btn-success rounded-pill">Contato</button>
      </NuxtLink>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-box-arrow-in-right ml-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
    </div>
  </div>
</nav>

        </header>
        <slot/>
    </div>
</template>

