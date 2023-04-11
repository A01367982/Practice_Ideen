<template>
  

  

  <div class="about">
    <h1 class="text-indigo-accent-4" >MATERIAS INSCRITAS</h1>

    <v-container align-center justify-center>
      <v-card  class="text-right pa-5 ma-5">
        <h2 class=" text-left text-indigo-accent-4" >Título de la materia</h2>
        <h3 class=" text-left text-grey-darken-1" >Profesor: Cristiano Ronaldo</h3>
      
        <v-btn  
            color="indigo-accent-4"
            variant="text"
            @click="dialog = true"
            >
              Ver detalle
            </v-btn>
      </v-card>
      <v-dialog
      v-model="dialog"
      width="50%"
    >
      <v-card>
        <v-card-text class=" text-left pa-3 ma-5">
          <h2 class=" text-center text-indigo-accent-4 ma-4" >Título de la materia</h2>
          <h3 class=" text-grey-darken-1 mt-3" >Profesor: Cristiano Ronaldo</h3>
          <h3 class="text-left text-grey-darken-1 mt-3" >Salón: La Congeladora</h3>
          <h3 class="  text-grey-darken-1 mt-3" >Días: Lunes, Martes & Jueves</h3>
          <h3 class=" text-grey-darken-1 mt-3" >Horario: 7:00-9:00</h3>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class=" mr-5 mb-3" color="indigo-accent-4" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-container>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>