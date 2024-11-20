<template>
  <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
  </div>
</template>

<script setup>
const userStore = piniaUserStore()

onMounted(() => {
  userStore.checkUserToken()
  console.log(userStore.apiToken);
  
})
</script>