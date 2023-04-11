<template>
    <nav v-show="$route.name==='home'||$route.name==='materias'">
        <v-toolbar flat  app color="indigo-accent-4" height="60">
        
            <v-btn router-link to="/home">
                <img class="mr-3" :src="require('../assets/Tec.png')" height="40" />
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn flat color="white" router-link to="/home">
                <span >INICIO</span>
            </v-btn>
            <v-btn flat color="white" router-link to="/materias">
                <span>LISTA DE MATERIAS</span>
            </v-btn>
            <v-btn flat color="white" router-link to="/login">
                <v-icon icon="mdi:mdi-logout-variant" width="200" height="200"/>
            </v-btn>

        </v-toolbar>

    </nav>

    <nav v-show="$route.name==='signup'||$route.name==='login'">
        <v-toolbar flat  app color="indigo-accent-4" height="60">
        
            <v-btn router-link to="/login">
                <img class="mr-3" :src="require('../assets/Tec.png')" height="40" />
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn flat color="white" router-link to="/login">
                <span >INICIAR SESIÓN</span>
            </v-btn>
            <v-btn flat color="white" router-link to="/signup">
                <span>REGISTRO</span>
            </v-btn>
        </v-toolbar>

    </nav>

</template>

<script>
export default {
  

}</script>