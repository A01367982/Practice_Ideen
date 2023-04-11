<template>  

  <v-sheet >
    <h1 class="text-indigo-accent-4" >INICIAR SESIÓN</h1>
    <v-card class="mx-auto px-6 py-8" max-width="850">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field 
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2 outline" 
          clearable
          label="Correo Institucional"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Contraseña"
        ></v-text-field>

        <br>

        <v-btn
  
          :loading="loading"
          block
          color="indigo-accent-4"
          size="large"
          type="submit"
          variant="elevated"
        >
          Iniciar sesión
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Campo Obligatorio'
      },
    },
  }
</script>