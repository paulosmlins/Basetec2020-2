<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark text-yellow">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="bg-dark text-yellow"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="bg-dark text-yellow">
          The Star Wars API - Atividade SPA
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-dark text-yellow"
    >
      <q-list>
        <q-item-label
          header
          class="text-yellow"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Inicio',
    icon: 'label',
    link: '/'
  },
  {
    title: 'Filmes',
    caption: 'Filmes da saga Star Wars',
    icon: 'perm_media',
    link: '/filmes'
  },
  {
    title: 'Personagens',
    caption: 'Personagens da saga Star Wars',
    icon: 'assignment_ind',
    link: '/personagens'
  },
  {
    title: 'Planetas',
    caption: 'Planetas da saga Star Wars',
    icon: 'bedtime',
    link: '/planetas'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
