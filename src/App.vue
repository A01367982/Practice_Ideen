<template>
  <v-app>
    <navbar/>
    <v-main class="ma-5 pa-auto text-center">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '@/components/Nav-bar'

export default {
  name: 'App',
  components: {navbar},

  data: () => ({
    //
  }),
}

</script>
