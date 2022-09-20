<template>
  <p>Sem a diretiva</p>
  <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">
    Minha primeira diretiva customizada
  </p>
  <p v-texto="configuracaoTexto">Teste</p>
  <div v-posicao:absolute="100" v-texto="{cor:'green', totalCaracteres: 100}"> Olá, eu sou um binding de argumento e valor</div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    configuracaoTexto: {
      cor: "blue",
      tamanhoFonte: "300%",
      totalCaracteres: 4,
    },
  }),
};
</script>

<style>
</style>
