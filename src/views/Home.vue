<template>
  <div class="home">
    <div>
      <h1>Page Accueil</h1>
    </div>
    <router-link :to="{name :'Phishing'+ $store.state.currentPhishing}">Accéder au test</router-link>
        <router-view />

  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  components: {
 
  }
}
</script>
