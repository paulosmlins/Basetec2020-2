<template>
  <q-page padding class="bg-dark text-yellow">
    <div class="text-h4 q-mb-md"> Filmes </div>
    <q-list>
      <q-item v-for="lista in listas" :key="lista.id" clickable v-ripple class="shadow-2 q-mb-sm">
        <q-item-section thumbnail>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg">
        </q-item-section>
        <q-item-section>{{ lista.title }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'MinhasListas',
  data () {
    return {
      listas: []
    }
  },
  methods: {
    loadListas () {
      this.$axios.get('https://swapi.dev/api/films/').then(response => {
        this.listas = response.data.results
      })
    }
  },
  beforeMount () {
    this.loadListas()
  }
}
</script>
