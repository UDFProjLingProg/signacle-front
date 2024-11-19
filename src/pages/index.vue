<template>
  <div class="container-fluid text-white d-flex align-items-center" style="background-color: #003B76">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12 d-flex align-items-center justify-content-between">
          <p class="fs-5" style="max-width: 60%;">
            Signacle é um inovador site de busca dedicado à Língua Brasileira de Sinais (Libras). 
            Com o Signacle, é possível realizar a busca de palavras e traduções em qualquer lugar 
            e em qualquer hora, tornando a comunicação mais inclusiva e acessível para pessoas com 
            deficiência auditiva.
          </p>
          <img
            src="/assets/images/logo-signacle.png"
            alt="Signacle Logo"
            class="img-fluid mb-4"
            style="max-width: 300px;"
          />
        </div>

        <div class="col-md-12 text-center d-flex align-items-center justify-content-between">
          <div class="d-flex gap-3 mt-4">
            <button class="btn btn-dark rounded-circle d-flex align-items-center justify-content-center" style="width: 100px; height: 100px;">
              <i class="fas fa-info-circle text-white"></i>
            </button>
            <button class="btn btn-dark rounded-circle d-flex align-items-center justify-content-center" style="width: 100px; height: 100px;">
              <i class="fas fa-users text-white"></i>
            </button>
            <button class="btn btn-dark rounded-circle d-flex align-items-center justify-content-center" style="width: 100px; height: 100px;">
              <i class="fas fa-arrow-right text-white"></i>
            </button>
          </div>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe  src="https://www.youtube.com/embed/-ZDkdbPqUZg?si=4aCbBxEOXSYQdyzH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
.btn-dark:hover {
  background-color: #444444 !important;
}
</style>
