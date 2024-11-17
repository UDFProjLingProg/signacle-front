<template>
  <div class="row">
    <div class="container">
      <form class="d-flex flex-column align-items-center ">
        <div>
          <input type="text" class="" placeholder="Nome" required/>
        </div>
        <div>
          <input type="text" class="" placeholder="Sobrenome" required/>
        </div>
        <div>
          <input type="email" class="" placeholder="Email" required/>
        </div>
        <div>
          <input type="password" class="" placeholder="Senha" required/>
        </div>
        <div>
          <input type="password" class="" placeholder="Confirmar senha" required/>
        </div>
        <button type="submit" class="btn btn-primary">CADASTRAR USUÁRIO</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container form {
  width: 100%;
  padding: 25px;
  margin-top: 25px;
}

.container form input {
  width: 50vw;
  padding: 12px;
  margin-bottom: 15px;
  background-color: #d9d9d9;
  border: solid;
  border-radius: 12px;
  font-size: 25px;
}

.container form input::placeholder {
  font-size: 25px;
}

.container form button {
  width: 25%;
  padding: 20px;
  margin-top: 45px;
  cursor: pointer;
  background-color: #00a3e7;
  color: black;
  border-radius: 25px;
  font-size: 15px;
  border: none;
}
</style>
  