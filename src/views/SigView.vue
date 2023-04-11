<template>

  

<h1 class="text-indigo-accent-4" >CREA UNA CUENTA</h1>
<v-card class="mx-auto px-6 py-8" max-width="850">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >

      <v-text-field 
          v-model="name"
          :readonly="loading"
          :rules="[required]"
          class="mb-2 outline" 
          clearable
          label="Nombre Completo"
        ></v-text-field>

        <v-text-field 
          v-model="id"
          :readonly="loading"
          :rules="[required]"
          class="mb-2 outline" 
          clearable
          label="Matricula"
        ></v-text-field>

        <v-text-field 
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2 outline" 
          clearable
          label="Correo Institucional"
        ></v-text-field>

        <v-text-field 
          v-model="emailp"
          :readonly="loading"
          :rules="[required]"
          class="mb-2 outline" 
          clearable
          label="Correo Personal"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Contraseña"
        ></v-text-field>

        <v-text-field
          v-model="pass"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Confirmar Contraseña"
        ></v-text-field>

        <v-row class="mx-5 my-3">
              <input type="checkbox" 
              color="indigo-accent-4"
              v-model="check"
              />
              <p class=" text-grey-darken-2 ml-3"> Acepto términos y condiciones</p>
            </v-row>

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

</template>

<script>
  import db from '@/fb.js'
  export default {
    data: () => ({
      form: false,
      name:null,
      id:null,
      email: null,
      emailp:null,
      password: null,
      pass:null,
      loading: false,

      
    }),

    methods: {
      
      /*onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },*/

      submit(){
        if(this.$refs.form.validate()){
          const user={
            name:this.name,
            id:this.id,
            email:this.email,
            emailp:this.emailp,
            password:this.password,
          }
          db.collection('user').add(user).then(() => {
            console.log('added to db')
          })
        }

      },

      required (v) {
        return !!v || 'Campo Obligatorio'
      },
    },
  }
</script>