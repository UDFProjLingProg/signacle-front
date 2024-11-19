<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div 
      id="liveToast" 
      class="toast" 
      role="alert" 
      aria-live="assertive" 
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Signacle</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{ toastStore.mensagem || 'Wow' }}
      </div>
    </div>
  </div>
</template>

<script setup>
const toastStore = piniaToastStore()
</script>
