<template>
    <div class="Cadastro_usuario">
        <header class="header d-flex justify-content-between align-items-center px-4 ">
            <img src="@/assets/LogoUdf.jpeg" class="logo" />
            
            <nav  class="d-flex">
                <a href="#" class="nav-link  ">Inicio</a>
                <a href="#" class="nav-link ">Sobre</a>
                <a href="#" class="nav-link ">Equipe</a>
                <a href="#" class="nav-link ">Signacle</a>
                <a href="#" class="nav-link ">Contato</a>
                <a href="#" class="nav-link ">Entrar</a>
            </nav>
        </header>
        <div class="container  d-flex justify-content-center w-100% ">
            <form class=" d-flex flex-column align-items-center ">
                <div>
                    <input type="text" class="" placeholder="Nome"required />
                </div>
                <div>
                    <input type="text" class="" placeholder="Sobrenome" required />
                </div>
                <div>
                    <input type="email" class="" placeholder="Email"  required />
                </div>
                <div>
                    <input type="password" class="" placeholder="Senha"  required />
                </div>
                <div>
                    <input type="password" class="" placeholder="Confirmar senha"  required />
                </div>
                <button type="submit" class="btn btn-primary ">CADASTRAR USUÁRIO</button>
            </form>
         </div>
    </div>
</template> 

<style>
  .header {
    border-top: 5px solid #003b76;
    border-bottom: 5px solid #003b76;
  }
  
  .header .logo {
    width: 75px;
    height: auto;
    margin-left: 10px;
   
  
  }

 
  .header nav a {
    margin: 0 20px;
    font-family: Calibri;
    font-weight: bold;
    font-size: 25px;
    color: #444;
    text-decoration: none;

  }
  
  .container {
    min-width: 100%;
    height: 647px;
    background-color: #0b4279; 
    
 
}

  .container form {
    width: 100%;
    padding: 25px;
    margin-top: 25px;

  }
  
  .container form input{
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
  