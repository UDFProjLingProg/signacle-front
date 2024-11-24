<template>
  <div>
    <div
      class="container-fluid text-white d-flex align-items-center pb-4"
      style="background-color: #1250ac; min-height: 80vh"
    >
      <div
        class="container d-flex align-items-center justify-content-between mt-4"
      >
        <div
          class="d-flex flex-column align-items-start justify-content-between"
        >
          <h1
            style="
              font-weight: 900;
              font-size: 52px;
              align-self: flex-start;
              color: #0db9fd;
            "
          >
            Signacle
          </h1>
          <br>
          <p class="fs-4 fw-semibold lh-sm" style="width: 80%">
            Signacle é um inovador site de busca dedicado à Língua Brasileira de
            Sinais (Libras). Com o Signacle, é possível realizar a busca de
            palavras e traduções em qualquer lugar e em qualquer hora, tornando
            a comunicação mais inclusiva e acessível para pessoas com
            deficiência auditiva.
          </p>
          <br />

          <button
            @click="navigatoToSignacle"
            class="btn btn-primary rounded-pill px-4 py-3 mt-4 fw-bold"
          >
            Acessar Signacle
            <i class="bi bi-arrow-down-right-square ms-3"></i>
          </button>
        </div>

        <div class="custom-iframe">
          <iframe
            src="https://www.youtube.com/embed/-ZDkdbPqUZg?si=4aCbBxEOXSYQdyzH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const router = useRouter();

const navigatoToSignacle = () => {
  router.push("/signacle");
};

useHead({
  title: "Signacle",
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
.btn-dark:hover {
  background-color: #444444 !important;
}

.custom-iframe iframe {
  height: 300px;
  width: 500px;
}
</style>
