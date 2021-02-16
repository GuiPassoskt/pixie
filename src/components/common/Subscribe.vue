<template>
  <section class="subscribe">
    <h1>Inscreva-se agora!</h1>
    <p>
      Inscreva-se e receba informações sobre novos produtos. Não quer perder
      nenhum lancamento? <br />
      Ficar por dentro das novidades?
    </p>
    <form class="is-flex">
      <div class="control">
        <input
          type="text"
          class="input is-outline"
          placeholder="Digite seu Email..."
          required
        />
      </div>
      <div class="ml-3">
        <button type="submit" class="button is-white has-text-info">
          Inscrever-se!
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Subscribe'
}
</script>

<style lang="scss" scoped>
.subscribe {
  background-color: #3a8bcd;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  padding: 30px 15px;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  p {
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 30px;
  }
}
.is-outline {
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  width: 350px;
  &::placeholder {
    color: #fff;
  }
}
button {
  text-transform: uppercase;
  font-weight: 300;
  padding: 10px 50px;
}
</style>