<template>

  
  
  <div class="home">
    <h1 class="text-indigo-accent-4" >INFORMACIÓN DEL ALUMNO</h1>
    <v-container>
      <img  class="pa-6 rounded-circle d-inline-block" :src="require('../assets/juan-escutia2.jpeg')" />
    </v-container>
    

    <v-container class="w-50 mb-5">

      <v-row align-center justify-center >
        <v-col class="text-left">
          <p class="font-weight-black text-h5 text-indigo-accent-4" >
            Nombre Completo
          </p>
        <p class="text-h6  text-grey-darken-1" >
            Juan Escutia
        </p>
        </v-col>
        <v-col>
          <p  class="font-weight-black text-h5 text-indigo-accent-4" >
            Matrícula
          </p>
        <p class="text-h6 text-grey-darken-1 " >
            A01361234
        </p>
        </v-col>
      </v-row>

      <v-row align-center justify-center >
        <v-col class="text-left">
          <p class="font-weight-black text-h5 text-indigo-accent-4" >
            Correo Institucional
          </p>
        <p class="text-h6 text-grey-darken-1" >
            A01361234@tec.mx
        </p>
        </v-col>
        <v-col>
          <p  class="font-weight-black text-h5 text-indigo-accent-4" >
            Carrera
          </p>
        <p class="text-h6 text-grey-darken-1" >
            ISC
        </p>
        </v-col>
      </v-row>

      <v-row align-center justify-center >
        <v-col class="text-left">
          <p class="font-weight-black text-h5 text-indigo-accent-4" >
            Correo Personal
          </p>
        <p class="text-h6 text-grey-darken-1 " >
            murioporlapatria@gmail.con
        </p>
        </v-col>
      </v-row>
    </v-container>

  </div>

</template>

<script>
import { defineComponent } from 'vue';
//import navbar from '@/components/Nav-bar'

// Components


export default defineComponent({
  name: 'HomeView',
  //components: {navbar},

  data: () => ({
    //
  }),

});
</script>
