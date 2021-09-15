<template>
<section>
  
    <b-container class="bv-example-row">
        <b-row>
            
            <b-col id="Box">
                <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>

    <b-form @submit.prevent="loginRequest" id="login-form">
      <!-- <b-icon icon="plus" class="rounded-circle bg-dark "  font-scale="4" variant="light" ></b-icon> -->
       <p class="text-center"><i class="fas fa-4x fa-user"></i></p>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="password:" label-for="input-2">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          placeholder="password"
          required
        ></b-form-input>
      </b-form-group><br><hr>

      
      <!-- <b-button class="text-center" type="submit" variant="primary" @click="$router.push('/DashBoard')">Login</b-button><br><br> -->
      <div class="col-sm-12 text-center form-group">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-lg btn-info ">
                            <span v-if="! xhrRequest">Login</span>
                            <span v-if="xhrRequest">Please Wait...</span>
                        </button>
                        <div v-if="xhrRequest" class="spinner-border text-secondary loader" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

      <p class="text-center">Don't have accounts?
         <router-link to="/Signup">Sign Up</router-link>
      </p>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
            </b-col>
            
        </b-row>
    </b-container>
    <!-- <Table2/> -->
</section>
</template>
<script>
import firebase from "firebase";
// import Table2 from './Table2.vue'
export default {
    name: "Login",
    // components:{
    //   Table2
    // },
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        }
    },
    methods: {
        loginRequest() {
            let v = this;

            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase.auth().signInWithEmailAndPassword(v.email, v.password).then(
                () => {
                    this.$router.replace('dashboard')
                    v.xhrRequest = false;
                }, 
                (error) => {
                    v.errorMessage = error.message;
                    v.xhrRequest = false;
                }
            )
        }
    }
}
</script>

<style scoped>
.loader {
    position:relative;
    top:6px;
    left:10px;
}
section{
  height: 100vh;
    background-color:whitesmoke;
}
.col{
  margin-top: 15%;
  margin-left: 30%;
  margin-right: 30%;
  
}
form{
    text-align: left;
    border: 2px solid #fff;
    
}
#Box{
background-color: #fff;
padding: 1%;
}
a{
  text-decoration: none;
}
</style>