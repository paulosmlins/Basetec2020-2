<template>
  <q-page padding class="bg-dark text-yellow">
    <div class="text-h4 q-mb-md"> Planetas </div>
    <q-list>
      <q-item v-for="lista in listas" :key="lista.id" clickable v-ripple class="shadow-2 q-mb-sm">
        <q-item-section thumbnail>
          <img src="https://www.sharecg.com/images/original/115813.jpg">
        </q-item-section>
        <q-item-section>{{ lista.name }}</q-item-section>
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
      this.$axios.get('https://swapi.dev/api/planets/').then(response => {
        this.listas = response.data.results
      })
    }
  },
  beforeMount () {
    this.loadListas()
  }
}
</script>
