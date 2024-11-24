<template>
  <div>
    <div style="background-color: #1250ac; min-height: 70vh">
      <div class="container pt-5 d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-between w-100">
          <h1 style="color: #0db9fd" class="fw-bold">Listagem de Usuários</h1>
          <button class="btn btn-primary" @click="toggleInput">
            {{ showInput ? "Cancelar" : "Adicionar Usuário" }}
          </button>
        </div>

        <div v-if="showInput" class="mt-3" style="width: 50rem">
          <div class="input-group">
            <input
              v-model="newUser"
              type="email"
              class="form-control"
              placeholder="Digite email de um novo usuário"
            />
            <button class="btn btn-success" @click="addUser">Adicionar</button>
          </div>
        </div>

        <div class="list-group mb-4 mt-4" style="width: 50rem">
          <div
            v-for="(user, i) in users"
            :key="i"
            class="list-group-item d-flex align-items-center justify-content-between"
          >
            <p>{{ user.fullName }} | {{ user.email }}</p>
            <button class="btn btn-icon" @click="removeUser(user.id)">
              <i class="bi bi-trash icon-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const { getUsers, inviteUserByEmail, deleteUserById } = useUsersComposable();

const users = ref([]);
const showInput = ref(false);
const newUser = ref("");

// FUNÇÕES DA PÁGINA
onMounted(async () => {
  users.value = await getUsers();
});

const toggleInput = () => {
  showInput.value = !showInput.value;
  newUser.value = "";
};

const addUser = async () => {
  if (newUser.value.trim()) {
    const body = {
      email: newUser.value,
    };
    await inviteUserByEmail(body);

    newUser.value = "";
    showInput.value = false;
  }
};

const removeUser = async (id) => {
  await deleteUserById(id);
  users.value = await getUsers();
};
</script>

<style scoped>
.icon-delete {
  color: #dc3545;
}
</style>
