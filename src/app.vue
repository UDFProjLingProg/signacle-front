<template>
  <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Footer />
  </div>
</template>

<script setup>
const userStore = piniaUserStore()

onMounted(() => {
  userStore.checkUserToken()
})
</script>