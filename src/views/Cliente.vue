
<template>
  <div style="text-align:center;">
    <h1>Cadastrar cliente</h1>
    <div class="row form-group">
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

          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="row form-group">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Nascimento</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in Clientes" :key="cliente.id">
              <td>{{cliente.nome}}</td>
              <td>{{cliente.nascimento}}</td>
              <td>{{cliente.email}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
import Cliente from "../services/clientes";
export default {
  data() {
    return {
      Clientes: []
    };
  },
  mounted() {
    Cliente.Listar().then(resposta => {
      console.log(resposta);
      this.Clientes = resposta.data;
    });
  },
  methods(){

  },
};
</script>

<style scoped>
</style>

