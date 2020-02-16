
<template>
  <div style="text-align:center;">
    <h1>Cadastrar cliente</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Nome</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Nome" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Email</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Email" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Nascimento</label>
              <input type="text" class="form-control" id="inputNascimento" />
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>

    <tr v-for="cliente in Clientes" :key="cliente.id">
      <td>Nome</td>
      <td>Nascimento</td>
      <td>Email</td>
    </tr>
  </div>
</template>

<script>


export default
{

mounted(){


},

}

</script>

<style scoped>
</style>

