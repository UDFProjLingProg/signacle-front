<template>
  <div>
    <div style="background-color: #1250ac; min-height: 70vh">
      <div class="container pt-5 pb-5">
        <h1 class="fw-bolder" style="color: #0db9fd">Cadastro de Usuário</h1>

        <!-- Formulário de Cadastro -->
        <form
          @submit.prevent="registerUser"
          class="d-flex flex-column align-items-center"
        >
          <!-- Nome -->
          <div style="width: 50rem">
            <div class="mb-3">
              <label for="nome" class="form-label fw-bold text-white">Nome</label>
              <input
                v-model="nome"
                type="text"
                id="nome"
                class="form-control py-2"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <!-- Sobrenome -->
            <div class="mb-3">
              <label for="sobrenome" class="form-label fw-bold text-white">Sobrenome</label>
              <input
                v-model="sobrenome"
                type="text"
                id="sobrenome"
                class="form-control py-2"
                placeholder="Digite seu sobrenome"
                required
              />
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label fw-bold text-white">Email</label>
              <input
                v-model="email"
                readonly
                type="email"
                id="email"
                class="form-control py-2"
                placeholder="Digite seu email"
                required
              />
            </div>

            <!-- Senha -->
            <div class="mb-3">
              <label for="senha" class="form-label fw-bold text-white">Senha</label>
              <input
                v-model="senha"
                type="password"
                id="senha"
                class="form-control py-2"
                placeholder="Digite sua senha"
                required
                minlength="6"
              />
            </div>

            <!-- Botão de Cadastro -->
            <button type="submit" class="btn btn-primary" @click="registerUser">
              Cadastrar
            </button>
          </div>
        </form>

        <!-- Mensagem de Sucesso -->
        <div
          v-if="successMessage"
          class="alert alert-success mt-3"
          role="alert"
        >
          {{ successMessage }}
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const router = useRouter()
const { signupNewUser, getUserDetailsByEmail } = useUsersComposable();
const userStore = piniaUserStore()
const route = useRoute()
const userDetails = ref(null)

const nome = ref("");
const sobrenome = ref("");
const email = ref(route.query.email);
const senha = ref("");

onMounted(async () => {
  const body = {
    email: email.value
  }
  userDetails.value = await getUserDetailsByEmail(body)
  console.log(userDetails);
})

const registerUser = async () => {
  const body = {
    id: userDetails.value.id,
    firstName: nome.value,
    lastName: sobrenome.value,
    email: email.value,
    password: senha.value
  }
    await signupNewUser(body);
    userStore.currentUserDetails = await getUserDetailsByEmail(body)

    setTimeout(() => {
      router.replace('/')
    }, 1000)
};
</script>
